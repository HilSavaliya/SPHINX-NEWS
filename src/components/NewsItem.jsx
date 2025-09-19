// src/components/NewsItem.jsx

import React, { useState } from 'react';
import Placeholder from '../assets/placeholder.jpg';

function NewsItem({ title, description, src, url }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleTitle = () => setIsExpanded(!isExpanded);

  return (
    // 1. The new outer wrapper with the animated border
    <div className="card-border-wrap h-100 shadow">
      {/* 2. The original card now has a solid background to cover the gradient */}
      <div className="card h-100 border-0 rounded-4" style={{ backgroundColor: "#212529" }}>
        <img
          src={src ? src : Placeholder}
          onError={(e) => { e.currentTarget.src = Placeholder; }}
          style={{ height: "250px", objectFit: "cover" }}
          className="card-img-top rounded-top-4"
          alt={title}
        />
        <div className="card-body d-flex flex-column">
          <h5 
            className={`card-title ${!isExpanded ? 'title-clamp' : ''}`}
            onClick={toggleTitle}
            style={{ cursor: 'pointer' }}
            title="Click to read full title"
          >
            {title}
          </h5>
          <p className="card-text flex-grow-1 description-clamp text-muted">
            {description || "Description not available."}
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;