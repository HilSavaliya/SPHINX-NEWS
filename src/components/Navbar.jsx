import React, { useState } from 'react';

function Navbar({ setCategory, setSearch, setCountryQuery }) {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSearch(input);
      setInput("");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <div className="navbar-brand" style={{ cursor: "pointer" }} onClick={() => setCategory("technology")}>
          <span className="badge text-bg-primary fs-4">SPHINX News</span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("world")}>World</div></li>
            <li className="nav-item"><div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("politics")}>Politics</div></li>
            <li className="nav-item"><div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("business")}>Business</div></li>
            <li className="nav-item"><div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("technology")}>Technology</div></li>
            <li className="nav-item"><div className="nav-link" style={{ cursor: "pointer" }} onClick={() => setCategory("sport")}>Sport</div></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Country</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => setCountryQuery("India")}>India</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setCountryQuery("USA")}>USA</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setCountryQuery("UK")}>UK</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => setCountryQuery("Australia")}>Australia</a></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" placeholder="Search..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;