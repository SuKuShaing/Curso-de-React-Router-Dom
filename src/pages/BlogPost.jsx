import React, { use } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogdata from "../data/blogdata";
import { useAuth } from "../auth/auth";

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const auth = useAuth();
    
    const blogpost = blogdata.find((post) => post.slug === slug);

    const canDelete = auth.user?.rolIs === "admin" || auth.user?.rolIs === "editor" || auth.user?.username === blogpost.author; 

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

            {canDelete && (
                <div>
                    <h3>Admin Actions</h3>
                    <button onClick={() => alert("Edit post")}>Edit</button>
                    <button onClick={() => alert("Delete post")}>Delete</button>
                </div>
            )}
        </>
    );
}

export default BlogPost;