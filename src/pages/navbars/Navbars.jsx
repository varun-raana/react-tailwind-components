import React from "react";
import BreadCrumb01 from "../../components/breadCrumbs/BreadCrumb01";
import ComponentHeader from "../../components/ComponentHeader";
import Navbar01 from "../../components/navbars/Navbar01";
import Navbar02 from "../../components/navbars/Navbar02";
import Navbar04 from "../../components/navbars/Navbar04";
// import Navbar03 from "../../components/navbars/Navbar03";

function Navbars() {
	return (
		<div className="h-full w-full space-y-5">
			<BreadCrumb01 param={"nav"} />
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-200">
				<ComponentHeader title={"dark nav"} />
				<div className="mmd:p-5 p-2">
					<Navbar01 />
				</div>
			</div>
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-200">
				<ComponentHeader title={"light nav"} />
				<div className="md:p-5 p-2">
					<Navbar02 />
				</div>
			</div>
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-200">
				<ComponentHeader title={"light nav"} />
				<div className="md:p-5 p-2">
					<Navbar04 />
				</div>
			</div>
		</div>
	);
}

export default Navbars;
