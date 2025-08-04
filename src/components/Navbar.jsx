// In file: /src/components/Navbar.js

import React from "react";

function Navbar({ setCategory }) {
  const categories = ["technology", "business", "health", "science", "sports", "entertainment"];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="badge bg-light text-dark fs-4">ACE News</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* ✅ BEST PRACTICE: Use a button for click actions for accessibility */}
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <button
                  className="nav-link button-as-link"
                  onClick={() => setCategory(cat)}
                >
                  {/* Capitalize first letter for display */}
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;