import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ProfilePage from "./pages/ProfilePage";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage.jsx";
import { AuthProvider, AuthRoute } from "./auth/auth.jsx";

import "./App.css";
import CreatePost from "./pages/CreatePost.jsx";

function App() {
	return (
		<HashRouter>
			<AuthProvider>
				<Menu />

				<Routes>
					<Route path="/" element={<HomePage />} />

					<Route path="/blog" element={<BlogPage />}>
						{/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
						<Route path=":slug" element={<BlogPost />} />
					</Route>
					<Route path="/blog/create-post" element={
						<CreatePost />
					} 
					/>

					{/* Se puede hacer un OnlyNoAuthRoute y envolver el login Page y las rutas que son onlyPublic, pero aquí se optó por hacerlo en el componente mismo de LoginPage */}
					<Route path="/login" element={<LoginPage />} />
					<Route
						path="/logout"
						element={
							<AuthRoute>
								<LogoutPage />
							</AuthRoute>
						}
					/>
					<Route
						path="/profile"
						element={
							<AuthRoute>
								<ProfilePage />
							</AuthRoute>
						}
					/>

					<Route
						path="*"
						element={
							<h3
								style={{
									color: "red",
									fontWeight: "bold",
									fontSize: "x-large",
								}}
							>
								Not Found
							</h3>
						}
					/>
				</Routes>

				<Footer />
			</AuthProvider>
		</HashRouter>
	);
}

export default App;

// HashRouter es recomendable para cuando controlo solo el frontend
// HashRouter -> URL con #
// Ejemplo:
// / -> HomePage
// /#/ -> HomePage
// /#/blog
// /#/profile
// /#/aaksdfjkas -> Not Found
// /blog, /profile -> HomePage

// BrowserRouter es recomendable para cuando controlo el backend y el frontend
// BrowserRouter -> URL sin #
// Ejemplo:
// / -> HomePage
// /blog
// /profile
// /aaksdfjkas -> Not Found

// Memory Router es recomendable para apps que no tienen URL
