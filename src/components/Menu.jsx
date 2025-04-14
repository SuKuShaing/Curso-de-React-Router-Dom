import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth/auth";

function Menu() {
	const activeStyle = ({ isActive }) => ({
		color: isActive ? "red" : "black",
		textDecoration: isActive ? "none" : "underline",
	});

	const routes = [];
	routes.push({ private: false, to: "/", text: "Home" });
	routes.push({ private: false, to: "/blog", text: "Blog" });
	routes.push({ private: true, to: "/profile", text: "Profile" });
	routes.push({ private: false, publicOnly: true, to: "/login", text: "Login" });
	routes.push({ private: true, to: "/logout", text: "Logout" });

    const auth = useAuth();

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

				{routes.map((route) => {
                    if (route.private && !auth.user) return null
                    if (route.publicOnly && auth.user) return null
                    
                    return (
                        <li key={route.to}>
                            <NavLink style={activeStyle} to={route.to}>
                                {route.text}
                            </NavLink>
                        </li>
                    )
                })}
			</ul>
			<hr />
		</nav>
	);
}

export default Menu;
