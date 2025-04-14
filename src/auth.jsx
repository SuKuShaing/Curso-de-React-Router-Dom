import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const usersList = [
	{ username: "Sebastian", rol: "admin" }, // Puede crear, editar y borrar posts de cualquier autor
	{ username: "Diego", rol: "author" }, // Puede crear y editar sus propios posts, no puede borrarlos
	{ username: "Maca", rol: "editor" }, // Puede editar y borrar posts de otros autores, no puede crear posts
	{ username: "Pepe", rol: "user" }, // Puede leer posts, no puede crear, editar o borrar posts
];

const AuthContext = createContext();

function AuthProvider({ children }) {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);

	const login = ({ username }) => {
		const rolIs = usersList.find((user) => user.username === username)?.rol;
		
		console.log(usersList.find((user) => user.username === username));
		console.log(rolIs);
		console.log('rolIs es: ', typeof(rolIs));

		setUser({ username, rolIs });
		navigate("/profile");
	};

	const logout = () => {
		setUser(null);
		navigate("/");
		console.log("Logout");
	};

	const auth = { user, login, logout };

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
	const auth = useContext(AuthContext);
	return auth;
}

function AuthRoute(props) {
    const auth = useAuth();

	if (!auth.user) {
		return <Navigate to="/login" />;
	}

    return props.children;
}

export { AuthProvider, useAuth, AuthRoute };
