import ComponentHeader from "../components/ComponentHeader";
import BreadCrumb01 from "../components/breadCrumbs/BreadCrumb01";
import ComponentFooter from "../components/ComponentFooter";

import BreadCrumb from "../utils/BreadCrumb";
import BreadCrumb02 from "../components/breadCrumbs/BreadCrumb02";
import BreadCrumb03 from "../components/breadCrumbs/BreadCrumb03";
import BreadCrumb04 from "../components/breadCrumbs/BreadCrumb04";

function Breadcrumbs() {
	return (
		<div className="h-full w-full xl:pt-20 py-10">
			<BreadCrumb
				parentParam={"components"}
				param={"breadcrumbs"}
				to={"/breadcrumbs"}
			/>

			{/* breadcrumb01 */}
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500 mb-10 mt-4">
				<ComponentHeader />
				<div className="py-4 px-2 flex justify-center">
					<BreadCrumb01 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/breadCrumbs/BreadCrumb01.jsx"
					}
				/>
			</div>

			{/* breadcrumb02 */}
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500 mb-10">
				<ComponentHeader />
				<div className="py-4 px-2 flex justify-center">
					<BreadCrumb02 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/breadCrumbs/BreadCrumb02.jsx"
					}
				/>
			</div>

			{/* breadcrumb03 */}
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500 mb-10">
				<ComponentHeader />
				<div className="py-4 px-2 flex justify-center">
					<BreadCrumb03 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/breadCrumbs/BreadCrumb03.jsx"
					}
				/>
			</div>

			{/* breadcrumb04 */}
			<div className="h-auto w-full flex flex-col rounded-lg border border-gray-500 mb-10">
				<ComponentHeader />
				<div className="py-4 px-2 flex justify-center">
					<BreadCrumb04 />
				</div>
				<ComponentFooter
					href={
						"https://github.com/varun-raana/react-tailwind-components/blob/main/src/components/breadCrumbs/BreadCrumb04.jsx"
					}
				/>
			</div>
		</div>
	);
}

export default Breadcrumbs;
