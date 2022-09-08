import { Link } from "react-router-dom";

import Header from "../../utils/Header";
import BreadCrumb01 from "../../components/breadCrumbs/BreadCrumb01";
import ComponentBox from "../../utils/ComponentBox";
import error404 from "../../assets/images/404/error-404.png";

function Home() {
	return (
		<div className="relative max-w-screen-md mx-auto xl:max-w-screen-lg xl:px-8 px-4 ">
			<Header />
			<div className="pt-5 pb-2 border-t border-t-gray-500 mb-4 text-gray-600 font-medium capitalize">
				<BreadCrumb01 param={"components"} />
			</div>
			<section className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-4 mb-10">
				<ComponentBox title={"Navbars"} ariaLabel="nav" to={"/nav"} />
				<ComponentBox title={"Headers"} ariaLabel="headers" to={"/headers"} />
				<ComponentBox title={"Pricing"} ariaLabel="pricing" to={"/pricing"} />
				<ComponentBox title={"Cards"} ariaLabel="cards" to={"/cards"} />
				<ComponentBox title={"Features"} ariaLabel="features" to={"/features"} />
				<ComponentBox title={"Footers"} ariaLabel="footers" to={"/footers"} />
				<ComponentBox title={"Teams"} ariaLabel="teams" to={"/teams"} />
				<ComponentBox title={"FAQs"} ariaLabel="faqs" to={"/faqs"} />
			</section>

			{/* 404 */}
			<div className="pt-5 pb-2 border-t border-t-gray-500 mb-4 text-gray-600 font-medium capitalize">
				<BreadCrumb01 param={"404 error"} />
			</div>
			<section className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-4 mb-10">
				<Link to="/404" className="md:w-40">
					<img
						src={error404}
						className="w-full h-full block object-cover flex-none"
						alt="error404"
					/>
				</Link>
			</section>
		</div>
	);
}

export default Home;
