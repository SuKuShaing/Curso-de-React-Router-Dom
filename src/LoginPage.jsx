import { useState } from "react";

function LoginPage() {
	const [username, setUsername] = useState("");

    const login = (e) => {
        e.preventDefault();
        console.log("Login", username);
    };

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
