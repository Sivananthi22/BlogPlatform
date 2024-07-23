// src/App.js

import React from 'react';
import './App.css';
import BlogNav from './Components/BlogNav';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Posts from './Components/Posts';
import Post1 from './Components/Post1';
import Post2 from './Components/Post2';
import Post3 from './Components/Post3';
import Post4 from './Components/Post4';
import '/home/sivananthi/Documents/VSC/React/blogapp/src/Components/index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">Blog Platform</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/post1">JavaScript</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-ligth" to="/post2">Data Structure</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-ligth" to="/post3">Algorithms</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-ligth" to="/post4">Computer Networks</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="content">
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/post1" element={<Post1 />} />
              <Route path="/post2" element={<Post2 />} />
              <Route path="/post3" element={<Post3 />} />
              <Route path="/post4" element={<Post4 />} />
            </Routes>
          </div>
          <BlogNav />
        </div>
      </div>
    </Router>
  );
}

export default App;
