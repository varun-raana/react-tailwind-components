import { useState } from "react";
import logo from "../../assets/images/logo.jpg";

function Navbar02() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-white	drop-shadow md:px-24 lg:px-8 rounded-md w-full">
			<div className="md:px-6 px-2 flex items-center justify-between relative">
				<div>
					<a href="/" className="flex-none">
						<img
							src={logo}
							className="h-10 w-10 object-cover rounded-full"
							alt="logo"
						/>
					</a>
				</div>
				<div className="md:flex items-center space-x-4 text-gray-600 hidden">
					<a
						href="/"
						className="bg-blue-500 hover:bg-blue-600 transition-all duration-100 ease-in text-white py-2 px-4 capitalize text-sm font-medium tracking-wide rounded-md"
					>
						home
					</a>
					<a
						href="/"
						className="hover:bg-blue-500 transition-all duration-100 ease-in hover:text-white py-2 px-4 capitalize text-sm font-medium tracking-wide rounded-md"
					>
						about
					</a>
					<a
						href="/"
						className="hover:bg-blue-500 transition-all duration-100 ease-in hover:text-white py-2 px-4 capitalize text-sm font-medium tracking-wide rounded-md"
					>
						contact
					</a>
				</div>
				<div className="md:hidden">
					<button onClick={() => setIsMenuOpen(true)}>
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
						<div className="absolute -top-3 left-0 w-full rounded-md bg-white z-10 border">
							<div className="p-5 h-full">
								<div className="flex items-center justify-between mb-4">
									<div>
										<a href="/" className=" flex-none">
											<img
												src={logo}
												className="h-10 w-10 object-cover rounded-full"
												alt="logo"
											/>
										</a>
									</div>
									<div>
										<button onClick={() => setIsMenuOpen(false)}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="w-5 h-5"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
											</svg>
										</button>
									</div>
								</div>
								<div className="text-gray-500 cursor-pointer h-full space-y-4">
									<a
										href="/"
										className="hover:bg-blue-500 hover:text-white py-2 block px-4 capitalize text-sm font-medium tracking-wide rounded-md"
									>
										home
									</a>
									<a
										href="/"
										className="hover:bg-blue-500 hover:text-white py-2 block px-4 capitalize text-sm font-medium tracking-wide rounded-md"
									>
										about
									</a>
									<a
										href="/"
										className="hover:bg-blue-500 hover:text-white py-2 block px-4 capitalize text-sm font-medium tracking-wide rounded-md"
									>
										contact
									</a>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar02;
