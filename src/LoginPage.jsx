import { useState } from "react";
import { useAuth } from "./auth.jsx";
import { Navigate } from "react-router-dom";

function LoginPage() {
    const auth = useAuth();
	const [username, setUsername] = useState("");

    const login = (e) => {
        e.preventDefault();
        auth.login({ username });
        console.log("Login", username);
    };

	// Si el usuario ya está logueado, redirigir a la página de perfil sí intenta acceder a la página de login
	if (auth.user) {
		return <Navigate to="/profile" />;
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
