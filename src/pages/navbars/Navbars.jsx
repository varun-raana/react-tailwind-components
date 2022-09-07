import React from "react";
import ComponentHeader from "../../components/ComponentHeader";
import Navbar01 from "../../components/navbars/Navbar01";
import Navbar02 from "../../components/navbars/Navbar02";
// import Navbar03 from "../../components/navbars/Navbar03";

function Navbars() {
	return (
		<div className="h-full w-full space-y-5">
			<div className="flex items-center justify-between">
				<h1 className="lg:text-7xl md:text-5xl text-3xl text-gray-600 font-light capitalize">
					header
				</h1>
				<button className="text-gray-600 font-medium py-1 px-3 rounded hover:bg-gray-100 duration-300 transition-all">
					back
				</button>
			</div>
			<div className="h-auto w-full flex flex-col rounded-lg bg-gray-50 overflow-hidden border-2">
				<ComponentHeader title={"dark nav"} />
				<div className="py-12 mb-10 px-4">
					<Navbar01 />
				</div>
			</div>
			<div className="h-auto w-full flex flex-col rounded-lg bg-gray-50 overflow-hidden border-2">
				<ComponentHeader title={"light nav"} />
				<div className="py-12 mb-10 px-4">
					<Navbar02 />
				</div>
			</div>
			{/* <Navbar03 /> */}
		</div>
	);
}

export default Navbars;
