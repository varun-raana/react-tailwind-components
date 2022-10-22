import ComponentFooter from "../components/ComponentFooter";
import ComponentHeader from "../components/ComponentHeader";

import Hero01 from "../components/headers/Hero01";
import Hero02 from "../components/headers/Hero02";

import BreadCrumb from "../utils/BreadCrumb";

function Home() {
	return (
		<div className="h-full w-full xl:pt-20 py-10">
			<BreadCrumb parentParam={"components"} param={"hero"} to="/hero/" />

			{/* Hero01 */}
			<div className="rounded-lg border border-gray-500 mb-10 mt-4">
				<ComponentHeader />
				<div className="py-4 px-2 h-full">
					<Hero01 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/breadCrumbs/BreadCrumb01.jsx"
					}
				/>
			</div>

			{/* Header02 */}
			<div className="rounded-lg border border-gray-500 mb-10 mt-4">
				<ComponentHeader />
				<div className="py-4 px-2 h-full">
					<Hero02 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/breadCrumbs/BreadCrumb01.jsx"
					}
				/>
			</div>
		</div>
	);
}

export default Home;
