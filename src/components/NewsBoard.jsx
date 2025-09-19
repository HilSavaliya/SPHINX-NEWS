import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function NewsBoard({ category, searchTerm, countryQuery }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Latest News");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const apiKey = import.meta.env.VITE_GUARDIAN_API_KEY;
      let url = `https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=all&page-size=20&q=${countryQuery}`;

      if (searchTerm) {
        url += ` ${searchTerm}`;
        setTitle(`Results for: ${searchTerm} in ${countryQuery}`);
      } else {
        url += `&section=${category}`;
        setTitle(`${category.charAt(0).toUpperCase() + category.slice(1)} News in ${countryQuery}`);
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.response && data.response.results) {
          setArticles(data.response.results.filter(article => article.fields && article.fields.thumbnail));
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [category, searchTerm, countryQuery]);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 display-4 fw-bold">{title}</h1>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {articles.length > 0 ? (
            articles.map((article) => (
              <div key={article.id} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch">
                <NewsItem
                  title={article.webTitle}
                  description={article.fields.trailText}
                  src={article.fields.thumbnail}
                  url={article.webUrl}
                />
              </div>
            ))
          ) : (
            <div className="alert alert-warning text-center" role="alert">
              No articles found. Please try a different category or search.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NewsBoard;