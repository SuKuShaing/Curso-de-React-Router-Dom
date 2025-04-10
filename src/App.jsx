import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import ProfilePage from "./ProfilePage";
import Menu from "./Menu";
import Footer from "./Footer";
import BlogPost from "./BlogPost";
import './App.css'

function App() {
	return (
		<HashRouter>
			<Menu />

			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/blog" element={<BlogPage />} >
					{/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
					<Route path=":slug" element={<BlogPost />} />
				</Route>

				<Route path="/profile" element={<ProfilePage />} />
				
				<Route path="*" element={
						<h3
							style={{ color: "red", fontWeight: "bold", fontSize: "x-large" }}>Not Found
						</h3>
					}
				/>
			</Routes>

			<Footer />
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
