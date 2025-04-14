import React from "react";
import { Link, Outlet } from "react-router-dom";
import blogdata from "../data/blogdata";
import { useAuth } from "../auth/auth";


function BlogPage() {

    const auth = useAuth();

    const canCreate = auth.user?.rolIs === "admin" || auth.user?.rolIs === "author";

    return (
        <div className="blog-page">
            <h1>Welcome to the Blog Page</h1>
            {canCreate && (
                <Link to="/blog/create-post">Create Post</Link>
            )}
            <Outlet />
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