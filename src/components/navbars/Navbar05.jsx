import { useState } from "react";

function Navbar05() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="px-4 py-6 lg:px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-violet-600 rounded-md md:px-10 w-full">
			<div className="flex relative items-center justify-between w-full">
				<a
					href="/#"
					aria-label="Company"
					title="Company"
					className="inline-flex items-center text-violet-50"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
						/>
					</svg>
					<span className="ml-2 text-xl font-bold tracking-wide uppercase">RTC</span>
				</a>
				<div>
					<button
						onClick={() => setIsMenuOpen(true)}
						className="flex items-center justify-center text-violet-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
							/>
						</svg>
					</button>
					{isMenuOpen && (
						<div className="absolute z-10 group cursor-pointer overflow-hidden drop-shadow-md w-full top-0 left-0 bg-violet-100 transition-all duration-500 ease-in transform rounded-xl">
							<div className="h-full relative">
								<div className="absolute top-4 right-4">
									<button
										onClick={() => setIsMenuOpen(false)}
										className="flex items-center justify-center text-violet-600"
									>
										<svg className="w-5" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
											/>
										</svg>
									</button>
								</div>
								<div className="grid lg:grid-cols-3 grid-cols-1 h-full border-2 border-violet-200 rounded-xl">
									<div className="h-full w-full p-5">
										<div className="flex flex-col space-y-5 rounded-xl h-full">
											<a
												href="/#"
												aria-label="RTC"
												title="RTC"
												className="inline-flex items-center group-hover:text-violet-700 transition-colors duration-300 ease-in text-violet-600 justify-center h-full"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className="md:w-16 w-8"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
													/>
												</svg>
												<span className="ml-2 text-5xl lg:text-7xl font-bold tracking-wide uppercase">
													RTC
												</span>
											</a>
											<ul className="flex flex-col md:flex-row mt-16  lg:flex-col md:items-center items-start gap-5 ">
												<li className="w-full md:text-center text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														home
													</a>
												</li>
												<li className="w-full md:text-center text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														about
													</a>
												</li>
												<li className="w-full md:text-center text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														contact
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="h-full w-full p-5 border-y-2 lg:border-y-0 lg:border-x-2 border-violet-200">
										<div className="flex flex-col h-full items-center w-full">
											<h1 className="text-gray-600 w-full text-center lg:text-2xl sm:text-lg capitalize font-medium">
												components
											</h1>
											<ul className="grid sm:grid-cols-2 gap-4 sm:gap-4 mt-10 w-full truncate ">
												<li className="text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														navbar
													</a>
												</li>
												<li className="text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														header
													</a>
												</li>
												<li className="text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														hero
													</a>
												</li>
												<li className="text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														cards
													</a>
												</li>
												<li className="text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														forms
													</a>
												</li>
												<li className="text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														features
													</a>
												</li>
												<li className="text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														steps
													</a>
												</li>
												<li className="text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														footers
													</a>
												</li>
												<li className="text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														pricing
													</a>
												</li>
												<li className="text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														breadcrumbs
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="h-full w-full p-5">
										<div className="flex flex-col h-full w-full">
											<h1 className="text-gray-600 text-center lg:text-2xl sm:text-lg capitalize font-medium">
												templates
											</h1>
											<ul className="flex lg:flex-col lg:mt-auto md:flex-row flex-col gap-5 mt-10  md:items-center items-start">
												<li className="w-full md:text-center text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														landing pages
													</a>
												</li>
												<li className="w-full md:text-center text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														error 404
													</a>
												</li>
												<li className="w-full md:text-center text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														dashboard
													</a>
												</li>
												<li className="w-full md:text-center text-left lg:text-left">
													<a
														href="/#"
														className="inline-block uppercase text-sm w-full text-gray-700 font-medium hover:text-violet-600  transition-colors duration-200 ease-in-out"
													>
														ecommerce
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Navbar05;
