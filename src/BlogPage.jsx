import React from "react";
import { Link } from "react-router-dom";
import blogdata from "./blogdata";


function BlogPage() {
    return (
        <div className="blog-page">
            <h1>Welcome to the Blog Page</h1>
            <ul>

            {
                blogdata.map(post => (
                    <BlogLink key={post.slug} post={post} />
                ))
            }
            </ul>
        </div>
    );
}

function BlogLink({ post }) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
}

export default BlogPage;