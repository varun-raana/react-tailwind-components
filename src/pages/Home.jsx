import { Link } from "react-router-dom";

import Header from "../utils/Header";
import BreadCrumb from "../utils/BreadCrumb";

import ComponentBox from "../utils/ComponentBox";
import error404 from "../assets/images/404/error-404.png";
import dashboard from "../assets/images/dashboard/dashboard.png";
import landingPage from "../assets/images/landing-page/landing-page.png";
import CallToAction from "../utils/CallToAction";

function Home() {
	return (
		<div>
			<Header />

			{/* components */}
			<>
				<div className="pt-4 pb-1 border-t border-t-gray-500 mb-8">
					<BreadCrumb param={"components"} to={"/"} />
				</div>
				<section className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-4 mb-10">
					<ComponentBox title={"Navbars"} ariaLabel="nav" to={"/nav/"} />
					<ComponentBox title={"Hero"} ariaLabel="hero" to={"/hero/"} />
					<ComponentBox title={"Pricing"} ariaLabel="pricing" to={"/pricing/"} />
					<ComponentBox title={"Cards"} ariaLabel="cards" to={"/cards/"} />
					<ComponentBox
						title={"Breadcrumbs"}
						ariaLabel="breadcrumbs"
						to={"/breadcrumbs/"}
					/>
					<ComponentBox title={"Badges"} ariaLabel="badges" to={"/badges/"} />
					<ComponentBox title={"Features"} ariaLabel="features" to={"/features/"} />
					<ComponentBox title={"Footers"} ariaLabel="footers" to={"/footers/"} />
					<ComponentBox title={"Teams"} ariaLabel="teams" to={"/teams/"} />
					<ComponentBox title={"Blogs"} ariaLabel="blogs" to={"/blogs/"} />
					<ComponentBox title={"FAQs"} ariaLabel="faqs" to={"/faqs/"} />
				</section>
			</>

			{/* 404 */}
			<>
				<div className="pt-5 pb-2 border-t border-t-gray-500 mb-4 text-gray-600 font-medium capitalize">
					<BreadCrumb param={"templates"} to="/" />
				</div>
				<section className="grid sm:grid-cols-3 grid-cols-2 md:gap-10 items-center justify-items-center gap-4 py-10">
					<Link to="/404/" className="w-fit h-full sm:mx-0 mx-auto">
						<img
							src={error404}
							className="sm:w-40 w-28 h-full block object-cover flex-none"
							alt="error404"
						/>
					</Link>
					<Link to="/templates/dashboard">
						<img
							src={dashboard}
							className="sm:w-40 w-28 h-full block object-cover flex-none"
							alt="dashboard"
						/>
					</Link>
					<Link to="/landing-page">
						<img
							src={landingPage}
							className="sm:w-40 w-28 h-full block object-cover flex-none"
							alt="dashboard"
						/>
					</Link>
				</section>
			</>

			{/* Dashboard */}
			{/* <>
				<div className="pt-5 pb-2 border-t border-t-gray-500 mb-4 text-gray-600 font-medium capitalize">
					<BreadCrumb param={"Dashboard"} to={"Dashboard"} />
				</div>
				<section className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-4 mb-10">
					<Link to="/templates//dashboard" className="w-32 h-32 sm:mx-0 mx-auto">
						<img
							src={dashboard}
							className="w-full h-full block object-cover flex-none"
							alt="dashboard"
						/>
					</Link>
				</section>
			</> */}
			<CallToAction />
		</div>
	);
}

export default Home;
