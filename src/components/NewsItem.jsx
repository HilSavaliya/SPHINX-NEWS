// In file: /src/components/NewsItem.js

import React from "react";
import Placeholder from '../assets/placeholder.jpg';

function NewsItem({ title, description, src, url }) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img
        src={src || Placeholder} // Use || for a simpler fallback
        style={{ height: "200px", objectFit: "cover" }}
        className="card-img-top"
        alt={title || 'News article image'}
        onError={(e) => { e.currentTarget.src = Placeholder; }}
      />
      <div className="card-body">
        {/* ✅ IMPORTANT: Check if title exists before using .slice() to prevent errors */}
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No Title Available"}...
        </h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "Description not available for this article"}...
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;