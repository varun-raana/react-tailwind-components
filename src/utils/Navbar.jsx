import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="xl:max-w-screen-xl md:max-w-full sticky top-3 w-full bg-[#e6dee9] bg-opacity-80 z-50 rounded-xl drop-shadow-md backdrop-blur-sm">
			<div className="py-6 lg:px-8 px-4 flex items-center justify-between relative">
				<Link
					to="/"
					aria-label="react-tailwind-components"
					title="react-tailwind-components"
					className="inline-flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 flex items-center">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
						/>
					</svg>
					<span className="ml-2 text-xl font-black tracking-wide text-gray-700 uppercase">
						RTC
					</span>
				</Link>
				<ul className="hidden lg:flex items-center space-x-5">
					<li>
						<Link
							to="/templates/dashboard"
							className="inline-block text-gray-700 hover:text-violet-600 transition-colors duration-200 font-semibold ease-in capitalize  py-1 px-3 hover:bg-[#938698] tracking-wide hover:bg-opacity-10 outline-none rounded-md">
							dashboard
						</Link>
					</li>
					<li>
						<Link
							to="/404"
							className="inline-block text-gray-700 hover:text-violet-600 transition-colors duration-200 font-semibold ease-in capitalize  py-1 px-3 hover:bg-[#938698] tracking-wide hover:bg-opacity-10 outline-none rounded-md">
							error
						</Link>
					</li>
					<li>
						<Link
							to="/landing-pages"
							className="inline-block text-gray-700 hover:text-violet-600 transition-colors duration-200 font-semibold ease-in capitalize  py-1 px-3 hover:bg-[#938698] tracking-wide hover:bg-opacity-10 outline-none rounded-md">
							landing pages
						</Link>
					</li>
				</ul>
				<div className="lg:hidden">
					<button
						onClick={() => setIsMenuOpen(true)}
						className="items-center h-full justify-center flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="#currentColor"
							className="w-5 h-5">
							<path
								fillRule="evenodd"
								d="M2 6.75A.75.75 0 012.75 6h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 6.75zm0 6.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					{isMenuOpen && (
						<div className="fixed top-0 left-0 w-full bg-[#e6dee9] bg-opacity-90 z-50 rounded-xl drop-shadow-md filter backdrop-blur-md">
							<div className="p-5 pt-0 ">
								<div className="flex items-center justify-between border-b py-5 border-gray-500">
									<Link
										to="/"
										aria-label="react-tailwind-components"
										title="react-tailwind-components"
										className="inline-flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
											/>
										</svg>
										<span className="ml-2 text-xl font-black tracking-wide text-gray-700 uppercase">
											RTC
										</span>
									</Link>
									<button
										onClick={() => setIsMenuOpen(false)}
										className="items-center h-full justify-center flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											strokeWidth={3}
											className="w-5 h-5">
											<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
										</svg>
									</button>
								</div>
								<ul className="md:flex-row flex flex-col gap-3 mt-10">
									<li className="md:w-fit w-full">
										<Link
											to="/404"
											className="inline-block md:w-fit w-full text-gray-700 hover:text-violet-600 transition-colors duration-200 font-semibold ease-in capitalize  py-1 px-3 hover:bg-[#938698] tracking-wide hover:bg-opacity-10 outline-none rounded-md">
											dashboard
										</Link>
									</li>
									<li className="md:w-fit w-full">
										<Link
											to="/404"
											className="inline-block md:w-fit w-full text-gray-700 hover:text-violet-600 transition-colors duration-200 font-semibold ease-in capitalize  py-1 px-3 hover:bg-[#938698] tracking-wide hover:bg-opacity-10 outline-none rounded-md">
											error
										</Link>
									</li>
									<li className="md:w-fit w-full">
										<Link
											to="/404"
											className="inline-block md:w-fit w-full text-gray-700 hover:text-violet-600 transition-colors duration-200 font-semibold ease-in capitalize  py-1 px-3 hover:bg-[#938698] tracking-wide hover:bg-opacity-10 outline-none rounded-md">
											landing pages
										</Link>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
