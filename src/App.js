import React from 'react';
import './App.css';
import BlogNav from './Components/BlogNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './Components/Posts';
import Post1 from './Components/Post1';
import Post2 from './Components/Post2';
import Post3 from './Components/Post3';
import Post4 from './Components/Post4';
import './Components/index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <BlogNav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post1" element={<Post1 />} />
          <Route path="/post2" element={<Post2 />} />
          <Route path="/post3" element={<Post3 />} />
          <Route path="/post4" element={<Post4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
