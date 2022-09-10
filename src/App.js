import Navbar from "./utils/Navbar";
import Home from "./pages/Home";
import Navbars from "./pages/Navbars";
import { Routes, Route } from "react-router-dom";
import Errors from "./pages/Errors";
import Footer from "./utils/Footer";
import Breadcrumbs from "./pages/Breadcrumbs";

function App() {
	return (
		<div className="bg-hero02 bg-no-repeat bg-center bg-cover h-screen overflow-y-auto">
			<div className="relative max-w-screen-md mx-auto xl:max-w-screen-lg xl:px-8 px-4">
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="nav" element={<Navbars />} />
					<Route path="breadcrumbs" element={<Breadcrumbs />} />
					<Route path="404" element={<Errors />} />
				</Routes>

				<Footer />
			</div>
		</div>
	);
}

export default App;
