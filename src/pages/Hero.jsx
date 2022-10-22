import ComponentFooter from "../components/ComponentFooter";
import ComponentHeader from "../components/ComponentHeader";

import Hero01 from "../components/heros/Hero01";
import Hero02 from "../components/heros/Hero02";
import Hero03 from "../components/heros/Hero03";
import Hero04 from "../components/heros/Hero04";

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
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/heros/Hero01.jsx"
					}
				/>
			</div>

			{/* Hero02 */}
			<div className="rounded-lg border border-gray-500 mb-10 mt-4">
				<ComponentHeader />
				<div className="py-4 px-2 h-full">
					<Hero02 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/heros/Hero02.jsx"
					}
				/>
			</div>

			{/* Hero03 */}
			<div className="rounded-lg border border-gray-500 mb-10 mt-4">
				<ComponentHeader />
				<div className="py-4 px-2 h-full">
					<Hero03 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/heros/Hero03.jsx"
					}
				/>
			</div>

			{/* Hero04 */}
			<div className="rounded-lg border border-gray-500 mb-10 mt-4">
				<ComponentHeader />
				<div className="py-4 px-2 h-full">
					<Hero04 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/heros/Hero04.jsx"
					}
				/>
			</div>
		</div>
	);
}

export default Home;
