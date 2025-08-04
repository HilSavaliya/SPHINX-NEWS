import React from "react";
// You imported your placeholder image and named it 'Placeholder'
import Placeholder from '../assets/placeholder.jpg';

function NewsItem({ title, description, src, url }) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img
        src={src ? src : Placeholder}
        style={{ height: "200px", objectFit: "cover" }}
        className="card-img-top"
        alt={title}
        // Add the onError handler and make sure it uses the correct variable 'Placeholder'
        onError={(e) => { e.currentTarget.src = Placeholder; }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "All information about this is not available as of now so please wait"}...
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;