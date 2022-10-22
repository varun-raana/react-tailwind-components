import React from "react";

function BreadCrumb03() {
	return (
		<ul className="flex items-center  space-x-2 py-1 lowercase">
			<li className="truncate ">
				<a href="#" className="inline-block text-gray-500">
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
			<li className="truncate">
				<a
					href="#"
					className="inline-block text-gray-700 hover:text-blue-600 hover:underline">
					Price
				</a>
			</li>
			<span>/</span>
			<li>Annual</li>
		</ul>
	);
}

export default BreadCrumb03;
