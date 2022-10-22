import Example01 from "../components/404/Example01";
import Example02 from "../components/404/Example02";
import Example03 from "../components/404/Example03";
import Example04 from "../components/404/Example04";
import Example05 from "../components/404/Example05";

import BreadCrumb from "../utils/BreadCrumb";
import ComponentHeader from "../components/ComponentHeader";
import ComponentFooter from "../components/ComponentFooter";

function Errors() {
	return (
		<div className="h-full w-full space-y-5 xl:pt-20 pb-24 py-10">
			<BreadCrumb parentParam={"templates"} param={"404"} to="/404" />

			{/* 01 */}
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500">
				<ComponentHeader />
				<div className="md:py-10 p-2">
					<Example01 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/404/Example01.jsx"
					}
				/>
			</div>

			{/* 02 */}
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500">
				<ComponentHeader />
				<div className="md:py-10 p-2">
					<Example02 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/404/Example02.jsx"
					}
				/>
			</div>

			{/* 03 */}
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500">
				<ComponentHeader />
				<div className="md:py-10 p-2">
					<Example03 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/404/Example03.jsx"
					}
				/>
			</div>

			{/* 04 */}
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500">
				<ComponentHeader />
				<div className="md:py-10 p-2">
					<Example04 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/404/Example04.jsx"
					}
				/>
			</div>

			{/* 05 */}
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500">
				<ComponentHeader />
				<div className="md:py-10 p-2">
					<Example05 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/404/Example05.jsx"
					}
				/>
			</div>
		</div>
	);
}

export default Errors;
