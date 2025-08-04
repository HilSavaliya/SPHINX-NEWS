import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({category}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            
            if (data.articles) {
                const filteredArticles = data.articles.filter(
                    (article) => article.urlToImage && article.urlToImage.trim() !== ""
                );
                
                setArticles(filteredArticles);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    fetchNews();
}, [category]);

  return (
    <>
      <div>
        <h2 className="text-center">
          Latest <span className="badge bg-danger">News</span>{" "}
        </h2>
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </>
  );
}

export default NewsBoard;
