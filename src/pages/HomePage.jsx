import React from "react";
import { useLocation } from "react-router-dom";

function HomePage() {
    const location = useLocation();

	return (
		<div className="home-page">
			<h1>Welcome to the Home Page</h1>
			<p>This is the home page of our application.</p>
			<p>Feel free to explore the other pages!</p>
			<div>
				<p>Ruta actual: {location.pathname}</p>
				<p>Query string: {location.search}</p>
				<p>Hash: {location.hash}</p>
			</div>
		</div>
	);
}

export default HomePage;
