import React from "react";
import { Link } from 'react-router-dom';

function BlogNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">Blog Platform</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/post1">JavaScript</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/post2">Data Structure</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/post3">Algorithms</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/post4">Computer Networks</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    
  );
}

export default BlogNav;
