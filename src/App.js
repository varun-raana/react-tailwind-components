import Navbar from "./utils/Navbar";
import Home from "./pages/Home";
import Navbars from "./pages/Navbars";
import { Routes, Route } from "react-router-dom";
import Errors from "./pages/Errors";
import Footer from "./utils/Footer";
import Breadcrumbs from "./pages/Breadcrumbs";
import Hero from "./pages/Hero";
import Hero03 from "./components/heros/Hero03";
// import Header02 from "./components/headers/Header02";
// import Header01 from "./components/headers/Header01";

function App() {
	return (
		// <div className="bg-hero02 bg-no-repeat bg-center bg-cover h-screen overflow-y-auto">
		// 	<div className="relative max-w-screen-md mx-auto xl:max-w-screen-lg xl:px-8 px-4  flex flex-col">
		// 		<Navbar />

		// 		<div className="h-full">
		// 			<Routes>
		// 				<Route path="/" element={<Home />} />
		// 				<Route path="nav" element={<Navbars />} />
		// 				<Route path="hero" element={<Hero />} />
		// 				<Route path="breadcrumbs" element={<Breadcrumbs />} />
		// 				<Route path="404" element={<Errors />} />
		// 			</Routes>
		// 		</div>

		// 		<Footer />
		// 	</div>
		// </div>
		<div>
			<Hero03 />
		</div>
	);
}

export default App;
