// In file: /src/components/NewsBoard.js

import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null);     // Added error state for UI

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        // Call your own serverless function, passing the category as a query parameter
        const url = `/api/getNews?category=${category}`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          // Filter out articles that don't have an image
          const filteredArticles = data.articles.filter(
            (article) => article.urlToImage
          );
          setArticles(filteredArticles);
        } else {
          // Handle errors from the API (e.g., bad API key)
          throw new Error(data.message || "Failed to fetch news");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {/* Show loading message */}
      {loading && <p className="text-center">Loading articles...</p>}

      {/* Show error message */}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Show articles */}
      {!loading && !error && articles.map((news) => (
        <NewsItem
          // ⚠️ IMPORTANT: Use a unique ID from the data for the key, not the index.
          key={news.url}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
}

export default NewsBoard;