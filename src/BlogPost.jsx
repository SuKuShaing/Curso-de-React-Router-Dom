import React, { use } from "react";
import { Link, useParams } from "react-router-dom";
import blogdata from "./blogdata";

function BlogPost() {
    const { slug } = useParams();

    const blogpost = blogdata.find((post) => post.slug === slug);

    return (
        <>
            <h2>{blogpost.title}</h2>
            <p>Published on: {blogpost.date}</p>
            <p>Author: {blogpost.author}</p>
            <p>{blogpost.content}</p>
        </>
    );
}

export default BlogPost;