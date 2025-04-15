import { useState } from "react";
import { useAuth } from "../auth/auth";
import { Navigate, useLocation } from "react-router-dom";

function LoginPage() {
    const auth = useAuth();
	const location = useLocation();
	const [username, setUsername] = useState("");

	// Obtén la página de origen o usa "/profile" como predeterminado
    const from = location.state?.from?.pathname || "/profile";

    const login = (e) => {
        e.preventDefault();
        auth.login({ username, from });  // Pasa "from" al login
        console.log("Login", username);
    };

	// Si el usuario ya está logueado, redirigir a la página de perfil sí intenta acceder a la página de login
	if (auth.user) {
		return <Navigate to={from} replace />;
		// return <Navigate to="/profile" />;
		// return Navigate(from, { replace: true });
	}

	return (
		<>
			<h1>Login Page</h1>

			<form action="" onSubmit={login}>
				<label htmlFor="nombre-de-usuario">
					Escribe tu nombre de usuario: 
				</label>
				<input
					type="text"
					name=""
					id="nombre-de-usuario"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<button type="submit">Entrar</button>
			</form>
		</>
	);
}

export default LoginPage;
