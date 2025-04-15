import { createContext, useContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

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

	const login = ({ username, from }) => {
		const rolIs = usersList.find((user) => user.username === username)?.rol;

		setUser({ username, rolIs });

		// Redirige a la página de origen o a "/profile" por defecto
		navigate(from || "/profile", { replace: true });
		// navigate("/profile");

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

	const location = useLocation(); // captura la página de origen a la que iba el usuario antes de loguearse

	// guardamos la página de origen a la que iba el usuario en state y lo redirigimos a la página de login
	// loginPage con useLocation obtienen la página de origen con location.state?.from?.pathname
	// se loguea el usuario y se redirige a la página de destino original	
	if (!auth.user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

    return props.children;
}

export { AuthProvider, useAuth, AuthRoute };
