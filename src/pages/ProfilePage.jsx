import React from "react";
import { useAuth, AuthRoute } from "../auth/auth";

function ProfilePage() {
	const auth = useAuth();

	return (
		// <AuthRoute>
			<div className="profile-page">
				<h1>Bienvenido a tu perfil {auth.user?.username}</h1>
				<p>This is the profile page of our application.</p>
				<p>Here you can view and edit your profile information.</p>
			</div>
		// </AuthRoute>
	);
}

export default ProfilePage;
