import Errors from "./pages/errors/Errors";
import Navbars from "./pages/navbars/Navbars";

function App() {
	return (
		<div className="max-w-7xl mx-auto md:p-10 p-5 space-y-10">
			<Navbars />
			<Errors />
		</div>
	);
}

export default App;
