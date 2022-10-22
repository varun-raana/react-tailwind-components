import { useState } from "react";
import logo from "../../assets/images/logo.jpg";

function Navbar01() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="px-4 py-6 lg:px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-gray-900 rounded-md md:px-10 w-full">
			<div className="md:px-6 px-2 flex items-center justify-between relative">
				<a href="/" className=" flex-none">
					<img
						src={logo}
						className="h-10 w-10 object-cover rounded-full"
						alt="logo"
					/>
				</a>
				<div className="text-gray-500 cursor-pointer h-full hidden lg:flex items-center">
					<a
						href="#"
						className="hover:bg-gray-800 hover:text-gray-300 py-2 inline-block px-4 capitalize text-sm font-medium tracking-wide rounded-md">
						home
					</a>
					<a
						href="#"
						className="hover:bg-gray-800 hover:text-gray-300 py-2 inline-block px-4 capitalize text-sm font-medium tracking-wide rounded-md">
						about
					</a>
					<a
						href="#"
						className="hover:bg-gray-800 hover:text-gray-300 py-2 inline-block px-4 capitalize text-sm font-medium tracking-wide rounded-md">
						contact
					</a>
				</div>
				<div className="lg:hidden">
					<button
						onClick={() => setIsMenuOpen(true)}
						className="items-center h-full justify-center flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="#fff"
							className="w-5 h-5">
							<path
								fillRule="evenodd"
								d="M2 6.75A.75.75 0 012.75 6h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 6.75zm0 6.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					{isMenuOpen && (
						<div className="absolute -top-3 left-0 w-full rounded-md bg-gray-900">
							<div className="p-5 h-full">
								<div className="mb-4 w-full items-center justify-end flex">
									<button
										className="bg-gray-800/40 p-1 rounded-full"
										onClick={() => setIsMenuOpen(false)}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="#fff"
											className="w-5 h-5 ">
											<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
										</svg>
									</button>
								</div>
								<div className="text-gray-500 cursor-pointer h-full space-y-4">
									<a
										href="#"
										className="hover:bg-gray-800 hover:text-gray-300 py-2 block px-4 capitalize text-sm font-medium tracking-wide rounded-md">
										home
									</a>
									<a
										href="#"
										className="hover:bg-gray-800 hover:text-gray-300 py-2 block px-4 capitalize text-sm font-medium tracking-wide rounded-md">
										about
									</a>
									<a
										href="#"
										className="hover:bg-gray-800 hover:text-gray-300 py-2 block px-4 capitalize text-sm font-medium tracking-wide rounded-md">
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

export default Navbar01;
