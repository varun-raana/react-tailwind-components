import Navbar01 from "../components/navbars/Navbar01";
import Navbar02 from "../components/navbars/Navbar02";
import Navbar03 from "../components/navbars/Navbar03";
import Navbar04 from "../components/navbars/Navbar04";
import Navbar05 from "../components/navbars/Navbar05";
import Navbar06 from "../components/navbars/Navbar06";

import BreadCrumb from "../utils/BreadCrumb";
import ComponentFooter from "../components/ComponentFooter";
import ComponentHeader from "../components/ComponentHeader";

function Navbars() {
	return (
		<div className="h-full w-full md:space-y-5 space-y-10 xl:pt-20 pb-44 py-10">
			<BreadCrumb parentParam={"components"} param={"nav"} to={"/nav"} />
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500">
				<ComponentHeader />
				<div className="p-2">
					<Navbar01 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/navbars/Navbar01.jsx"
					}
				/>
			</div>
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500">
				<ComponentHeader />
				<div className="p-2">
					<Navbar02 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/navbars/Navbar02.jsx"
					}
				/>
			</div>
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500">
				<ComponentHeader />
				<div className="p-2">
					<Navbar03 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/navbars/Navbar03.jsx"
					}
				/>
			</div>
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500">
				<ComponentHeader />
				<div className="p-2">
					<Navbar04 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/navbars/Navbar04.jsx"
					}
				/>
			</div>
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500">
				<ComponentHeader />
				<div className="p-2">
					<Navbar05 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/navbars/Navbar05.jsx"
					}
				/>
			</div>
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500">
				<ComponentHeader />
				<div className="p-2">
					<Navbar06 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/navbars/Navbar05.jsx"
					}
				/>
			</div>
		</div>
	);
}

export default Navbars;
