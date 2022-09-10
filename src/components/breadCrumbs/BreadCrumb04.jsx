import React from "react";

function BreadCrumb04() {
	return (
		<ul className="flex items-center justify-center space-x-2 py-1 capitalize">
			<li className="truncate ">
				<a href="/#" className="inline-block text-gray-500">
					Home
				</a>
			</li>
			<li className="truncate ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-2 sm:w-3 text-slate-700">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</li>
			<li className="truncate">
				<a
					href="/#"
					className="inline-block underline text-gray-700 hover:text-orange-600 transition-colors duration-300 ease-in">
					products
				</a>
			</li>
			<li className="truncate ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-2 sm:w-3 text-slate-700 ">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</li>
			<li className="truncate">
				<a
					href="/#"
					className="inline-block text-blue-700 hover:text-orange-600 hover:scale-x-105 transition-all duration-200 ease-in-out">
					Model
				</a>
			</li>
		</ul>
	);
}

export default BreadCrumb04;
