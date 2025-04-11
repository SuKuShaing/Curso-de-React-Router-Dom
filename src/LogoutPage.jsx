import React from "react";

function LogoutPage() {

    const logout = (e) => {
        e.preventDefault();
        console.log("Logout");
        // Aquí puedes agregar la lógica para cerrar sesión, como borrar el token de autenticación o redirigir al usuario a la página de inicio.
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