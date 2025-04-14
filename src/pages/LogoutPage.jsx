import React from "react";
import { useAuth } from "../auth/auth";

function LogoutPage() {
    const auth = useAuth();

    const logout = (e) => {
        e.preventDefault();
        auth.logout();
        console.log("Logout");
    };

    return (
		<>
			<h1>Logout</h1>

			<form action="" onSubmit={logout}>
				<label htmlFor="nombre-de-usuario">
					¿Estás seguro de que quieres salir?
				</label>

				<button type="submit">Salir</button>
			</form>
		</>
	);
};

export default LogoutPage;