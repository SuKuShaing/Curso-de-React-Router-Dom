import React, { use } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogdata from "./blogdata";

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const blogpost = blogdata.find((post) => post.slug === slug);

    const returnToBlog = () => {
        // navigate("/blog");
        navigate(-1); // equivalente al volver atrás de la flecha del navegador
    }

    return (
        <>
            <button onClick={returnToBlog}>Volver al blog</button>
            <h2>{blogpost.title}</h2>
            <p>Published on: {blogpost.date}</p>
            <p>Author: {blogpost.author}</p>
            <p>{blogpost.content}</p>
        </>
    );
}

export default BlogPost;