import { useState } from "react";

function Navbar03() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="max-w-5xl mx-auto bg-white drop-shadow w-full py-6 lg:px-6 md:px-20 px-4">
			<div className="px-2 flex items-center justify-between relative">
				<div className="flex items-center space-x-10">
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
						<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
							RTC
						</span>
					</a>
					<ul className=" items-center hidden space-x-8 lg:flex">
						<li>
							<a
								href="/#"
								aria-label="Company"
								title="Company"
								className="font-medium tracking-wide text-gray-400 focus:text-gray-700  transition-colors duration-200 hover:text-deep-purple-accent-400"
							>
								Company
							</a>
						</li>
						<li>
							<a
								href="/#"
								aria-label="Product"
								title="Product"
								className="font-medium tracking-wide text-gray-400 focus:text-gray-700  transition-colors duration-200 hover:text-deep-purple-accent-400"
							>
								Product
							</a>
						</li>
						<li>
							<a
								href="/#"
								aria-label="Pricing"
								title="Pricing"
								className="font-medium tracking-wide text-gray-400 focus:text-gray-700  transition-colors duration-200 hover:text-deep-purple-accent-400"
							>
								Pricing
							</a>
						</li>
					</ul>
				</div>
				<ul className="hidden lg:flex space-x-3">
					<li>
						<a
							href="/#"
							className="inline-block py-1 px-3 bg-green-600 hover:bg-green-700 transition-colors duration-200 ease-in  text-white rounded-md capitalize"
						>
							sign in
						</a>
					</li>
					<li>
						<a
							href="/#"
							className="inline-block py-1 px-3 text-gray-700 rounded-md capitalize"
						>
							sign up
						</a>
					</li>
				</ul>
				<div className="lg:hidden">
					<button
						onClick={() => setIsMenuOpen(true)}
						className="flex items-center justify-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5"
						>
							<path
								fillRule="evenodd"
								d="M2 6.75A.75.75 0 012.75 6h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 6.75zm0 6.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					{isMenuOpen && (
						<div className="absolute w-full bg-white border top-0 left-0 z-50">
							<div className="relative ">
								<div className="absolute right-0 top-0">
									<button
										onClick={() => setIsMenuOpen(false)}
										className="p-2 bg-gray-100 text-gray-700"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="w-5 h-5 "
										>
											<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
										</svg>
									</button>
								</div>
							</div>
							<div className="p-5 flex flex-col h-full">
								<div>
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
										<span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
											RTC
										</span>
									</a>
								</div>
								<ul className="items-center space-y-4 py-5">
									<li>
										<a
											href="/#"
											aria-label="Company"
											title="Company"
											className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
										>
											Company
										</a>
									</li>
									<li>
										<a
											href="/#"
											aria-label="Product"
											title="Product"
											className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
										>
											Product
										</a>
									</li>
									<li>
										<a
											href="/#"
											aria-label="Pricing"
											title="Pricing"
											className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
										>
											Pricing
										</a>
									</li>
								</ul>
								<div className="py-4 border-t">
									<ul className="flex space-x-5">
										<li>
											<a
												href="/#"
												className="inline-block py-1 px-3 bg-green-600 hover:bg-green-700 transition-colors duration-200 ease-in text-white rounded-md capitalize"
											>
												sign in
											</a>
										</li>
										<li>
											<a
												href="/#"
												className="inline-block py-1 px-3 text-gray-700 rounded-md capitalize hover:bg-green-100 transition-colors duration-200 ease-in"
											>
												sign up
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Navbar03;
