import React from "react";
import BreadCrumb01 from "../../components/breadCrumbs/BreadCrumb01";
import ComponentBox from "../../utils/ComponentBox";
import Header from "../../utils/Header";

function Home() {
	return (
		<div className="relative max-w-screen-md pt-4 mx-auto xl:max-w-screen-lg sm:pt-6 xl:px-8 px-4 py-10">
			<Header />
			<div className="pt-5 pb-2 border-t border-t-gray-500 mb-4 text-gray-600 font-medium capitalize">
				<BreadCrumb01 param={"components"} />
			</div>
			<section className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-4 mb-10">
				<ComponentBox title={"Navbars"} ariaLabel="nav" href={"/nav"} />
				<ComponentBox title={"Headers"} ariaLabel="headers" href={"/headers"} />
				<ComponentBox title={"Pricing"} ariaLabel="pricing" href={"/pricing"} />
				<ComponentBox title={"Cards"} ariaLabel="cards" href={"/cards"} />
				<ComponentBox title={"Features"} ariaLabel="features" href={"/features"} />
				<ComponentBox title={"Footers"} ariaLabel="footers" href={"/footers"} />
				<ComponentBox title={"Teams"} ariaLabel="teams" href={"/teams"} />
				<ComponentBox title={"FAQs"} ariaLabel="faqs" href={"/faqs"} />
			</section>

			{/* 404 */}
			<div className="pt-5 pb-2 border-t border-t-gray-500 mb-4 text-gray-600 font-medium capitalize">
				<BreadCrumb01 param={"404 error pages"} />
			</div>
			<section className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-4 mb-10">
				<a href="/404">
					<div className="flex flex-col h-56 rounded-xl w-full border border-gray-500 bg-cover bg-center bg-no-repeat items-center justify-center">
						<p className="font-black md:text-7xl truncate bg-clip-text text-transparent text-red-500">
							Oops !!
						</p>
					</div>
				</a>
				<a href="/404">
					<div className="flex flex-col h-56 rounded-xl w-full border border-gray-500"></div>
				</a>
				<a href="/404">
					<div className="flex flex-col h-56 rounded-xl w-full border border-gray-500"></div>
				</a>
			</section>
		</div>
	);
}

export default Home;
