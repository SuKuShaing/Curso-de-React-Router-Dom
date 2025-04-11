import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
    const activeStyle = ({ isActive }) => ({
        color: isActive ? "red" : "black",
        textDecoration: isActive ? "none" : "underline",
    });

    const routes = []
    routes.push({ to: "/", text: "Home" });
    routes.push({ to: "/blog", text: "Blog" });
    routes.push({ to: "/profile", text: "Profile" });
    routes.push({ to: "/login", text: "Login" });
    routes.push({ to: "/logout", text: "Logout" });

    return (
        <nav className="menu">
            <ul>
                {/* <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li> */}

                {/* 
                    La diferencia entre Link y NavLink es que NavLink permite aplicar estilos a los enlaces activos.
                */}

                {/* <li>
                    <NavLink 
                        // className={({ isActive }) => (isActive ? "active" : "")}
                        // style={({ isActive }) => (isActive ? { color: "red" } : {})}
                        style={activeStyle}
                        to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink
                        style={activeStyle}
                        to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink 
                        style={activeStyle}
                        to="/profile">Profile</NavLink>
                </li> */}

                {routes.map((route) => (
                    <li key={route.to}>
                        <NavLink
                            style={activeStyle}
                            to={route.to}>{route.text}</NavLink>
                    </li>
                ))}
            </ul>
            <hr />
        </nav>
    );
}

export default Menu;