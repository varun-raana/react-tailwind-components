function BreadCrumb01() {
	return (
		<ul className="flex items-center space-x-2 sm:space-x-3 py-1">
			<li className="text-gray-500 truncate">
				<a
					href="#"
					className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-violet-700 sm:text-base capitalize">
					Home
				</a>
			</li>
			<li className="truncate ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={4}
					stroke="currentColor"
					className="w-2 sm:w-3 text-gray-500 flex-none flex items-center justify-center">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</li>
			<li className="text-gray-500 truncate">
				<a
					href="#"
					className="truncate text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-violet-600 sm:text-base capitalize">
					About
				</a>
			</li>
			<li className="truncate ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={4}
					stroke="currentColor"
					className="w-2 sm:w-3 text-gray-500 flex-none flex items-center justify-center">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</li>
			<li className="sm:truncate">
				<a
					href="#"
					className="truncate text-sm sm:text-base font-semibold text-violet-700 capitalize">
					contact
				</a>
			</li>
		</ul>
	);
}

export default BreadCrumb01;
