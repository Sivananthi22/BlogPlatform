import React from 'react';
import { Link } from 'react-router-dom';
import javascript from '/home/sivananthi/Documents/VSC/React/blogapp/src/Components/Images/JavaScript.png';
import datastructure from '/home/sivananthi/Documents/VSC/React/blogapp/src/Components/Images/Data Structures.png';
import algorithm from '/home/sivananthi/Documents/VSC/React/blogapp/src/Components/Images/Algorithms.png';
import computernetwork from '/home/sivananthi/Documents/VSC/React/blogapp/src/Components/Images/Computer Network.jpg';
function Posts() {
    return (
        <div className="container">
            <div>
                <div className="card" style={{ maxWidth: '850px' }}>
                    <img src={javascript} alt="JavaScript" />
                    <div className="card-body">
                        <h2>JavaScript</h2>
                        <p className="card-text">JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions...</p>
                        <Link to="/post1"><button>Read More</button></Link>
                    </div>
                </div>
                <br /><br />
                <div className="card" style={{ maxWidth: '850px' }}>
                    <img src={datastructure} alt="Data Structure" />
                    <div className="card-body">
                        <h2>Data Structure</h2>
                        <p className="card-text">A data structure is a way to store data. We structure data in...</p>
                        <Link to="/post2"><button>Read More</button></Link>
                    </div>
                </div>
                <br /><br />
                <div className="card" style={{ maxWidth: '850px' }}>
                    <img src={algorithm} alt="Algorithm" />
                    <div className="card-body">
                        <h2>Algorithm</h2>
                        <p className="card-text">An algorithm is a set of step-by-step instructions to solve a given problem or achieve a specific goal...</p>
                        <Link to="/post3"><button>Read More</button></Link>
                    </div>
                </div>
                <br /><br />
                <div className="card" style={{ maxWidth: '850px' }}>
                    <img src={computernetwork} alt="Computer Network" />
                    <div className="card-body">
                        <h2>Computer Network</h2>
                        <p className="card-text">A computer network is a system that connects two or more computing devices for transmitting and sharing information...</p>
                        <Link to="/post4"><button>Read More</button></Link>
                    </div>
                </div>
                <br /><br />
            </div>
            <div className='recent'>
                <nav>
                    <h4>Recent Posts</h4>
                    <ul>
                        <li><Link to="/post1">JavaScript</Link></li>
                        <li><Link to="/post2">Data Structures</Link></li>
                        <li><Link to="/post3">Algorithm</Link></li>
                        <li><Link to="/post4">Computer Network</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Posts;
