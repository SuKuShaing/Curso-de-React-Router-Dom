import React from "react";
import { useAuth, AuthRoute } from "../auth/auth";
import { useLocation } from "react-router-dom";

function ProfilePage() {
	const auth = useAuth();
	const location = useLocation();

	console.log(location);
	console.log(location.pathname);
	console.log(location.search);
	console.log(location.hash);

	return (
		// <AuthRoute>
		<div className="profile-page">
			<h1>Bienvenido a tu perfil {auth.user?.username}</h1>
			<p>This is the profile page of our application.</p>
			<p>Here you can view and edit your profile information.</p>
			<div>
				<p>Ruta actual: {location.pathname}</p>
				<p>Query string: {location.search}</p>
				<p>Hash: {location.hash}</p>
			</div>
		</div>
		// </AuthRoute>
	);
}

export default ProfilePage;
