// import Errors from "./pages/errors/Errors";
import Home from "./pages/home/Home";
import Navbars from "./pages/navbars/Navbars";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="bg-hero bg-no-repeat bg-center bg-cover h-screen overflow-y-auto">
			<div className="relative max-w-screen-md pt-4 mx-auto xl:max-w-screen-lg sm:pt-6 xl:px-8 px-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="nav" element={<Navbars />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
