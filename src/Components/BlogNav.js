import React from "react";
import {Link} from 'react-router-dom';
function BlogNav() {
    return (
        <div>
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

    );
};
export default BlogNav;
