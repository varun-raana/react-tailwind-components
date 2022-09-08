import React, { useState } from "react";

function Navbar04() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="px-4 py-6 lg:px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-black rounded-md md:px-10 w-full">
			<div className="relative flex items-center justify-between lg:justify-center lg:space-x-20">
				<ul className=" items-center hidden space-x-8 lg:flex">
					<li>
						<a
							href="/#"
							aria-label="Home"
							title="Home"
							className="font-medium tracking-wide text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="/#"
							aria-label="About"
							title="About"
							className="font-medium tracking-wide text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
						>
							About us
						</a>
					</li>
				</ul>
				<a
					href="/#"
					aria-label="Company"
					title="Company"
					className="inline-flex items-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="yellow"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
						/>
					</svg>

					<span className="ml-2 text-xl font-black tracking-wide text-yellow-300 uppercase">
						RTC
					</span>
				</a>
				<ul className="items-center hidden space-x-8 lg:flex">
					<li>
						<a
							href="/#"
							aria-label="Team"
							title="Team"
							className="font-medium tracking-wide text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
						>
							Team
						</a>
					</li>
					<li>
						<a
							href="/#"
							aria-label="Contact"
							title="Contact"
							className="font-medium tracking-wide text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
						>
							Contact
						</a>
					</li>
				</ul>
				<div className="lg:hidden">
					<button
						aria-label="Open Menu"
						title="Open Menu"
						className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
						onClick={() => setIsMenuOpen(true)}
					>
						<svg className="w-5 text-yellow-300" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
							/>
							<path
								fill="currentColor"
								d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
							/>
							<path
								fill="currentColor"
								d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
							/>
						</svg>
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full z-50">
							<div className=" bg-black rounded-md shadow-sm">
								<div className="flex items-center justify-between space-x-3 p-5 ">
									<div className="w-full">
										<input
											type="text"
											className="p-2 border border-gray-200 bg-transparent text-white inline-block focus:border-yellow-400 outline-none w-full rounded-md transition-colors duration-300 ease-in"
										/>
									</div>
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											className="p-2  -mr-2 transition duration-200 rounded text-yellow-300 focus:outline-none"
											onClick={() => setIsMenuOpen(false)}
										>
											<svg className="w-5" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
												/>
											</svg>
										</button>
									</div>
								</div>
								<nav>
									<ul>
										<li>
											<a
												href="/#"
												aria-label="Home"
												title="Home"
												className="font-bold p-5 block tracking-wide text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
											>
												Home
											</a>
										</li>
										<li>
											<a
												href="/#"
												aria-label="About"
												title="About"
												className="font-bold p-5 block tracking-wide text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
											>
												About us
											</a>
										</li>
										<li>
											<a
												href="/#"
												aria-label="Contact"
												title="Contact"
												className="font-bold p-5 block tracking-wide text-yellow-300 transition-colors duration-200 hover:text-deep-purple-accent-400"
											>
												Contact
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Navbar04;
