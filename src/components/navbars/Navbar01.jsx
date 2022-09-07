import logo from "../../assets/images/logo.jpg";

function Navbar01() {
	return (
		<nav className="w-full bg-gray-900 rounded md:h-20 h-full p-4">
			<div className="md:px-6 px-2 flex items-center justify-between h-full">
				<a href="/" className=" flex-none">
					<img
						src={logo}
						className="h-10 w-10 object-cover rounded-full"
						alt="logo"
					/>
				</a>
				<div className="text-gray-500 cursor-pointer h-full hidden md:flex items-center justify-center">
					<a
						href="/"
						className="hover:bg-gray-800 hover:text-gray-300 py-2 inline-block px-4 capitalize text-sm font-medium tracking-wide rounded-md"
					>
						home
					</a>
					<a
						href="/"
						className="hover:bg-gray-800 hover:text-gray-300 py-2 inline-block px-4 capitalize text-sm font-medium tracking-wide rounded-md"
					>
						about
					</a>
					<a
						href="/"
						className="hover:bg-gray-800 hover:text-gray-300 py-2 inline-block px-4 capitalize text-sm font-medium tracking-wide rounded-md"
					>
						contact
					</a>
				</div>
				<div className="md:hidden p-2 cursor-pointer text-gray-600 flex mr-2">
					<button>
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
				</div>
			</div>
			<div className="md:hidden block h-full w-full">
				<div className="pt-2 pb-3 space-y-1">
					<a
						href="/"
						className="hover:bg-gray-800 text-gray-400 py-2 block px-4 capitalize text-sm font-medium tracking-wide rounded-md"
					>
						home
					</a>
					<a
						href="/"
						className="hover:bg-gray-800 text-gray-400 py-2 block px-4 capitalize text-sm font-medium tracking-wide rounded-md"
					>
						about
					</a>
					<a
						href="/"
						className="hover:bg-gray-800 text-gray-400 py-2 block px-4 capitalize text-sm font-medium tracking-wide rounded-md"
					>
						contact
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar01;
