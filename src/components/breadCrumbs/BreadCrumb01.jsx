import { Link } from "react-router-dom";

function BreadCrumb01({ parentParam, param }) {
	return (
		<ul className="flex items-center mb-5 space-x-2 sm:space-x-3">
			<li className="text-gray-500 truncate">
				<Link
					to="/"
					className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-700 sm:text-base capitalize"
				>
					react-tailwind-components
				</Link>
			</li>
			<li className="truncate">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={4}
					stroke="currentColor"
					className="w-2 sm:w-3 text-gray-500"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</li>
			{parentParam && (
				<>
					<li className="text-gray-500 truncate">
						<Link
							to="/"
							className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-700 sm:text-base capitalize"
						>
							{parentParam}
						</Link>
					</li>
					<li className="truncate">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={4}
							stroke="currentColor"
							className="w-2 sm:w-3 text-gray-500"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</li>
				</>
			)}
			<li className="sm:truncate">
				<Link
					to="/nav"
					className="text-sm sm:text-base font-black text-gray-800 capitalize"
				>
					{param}
				</Link>
			</li>
		</ul>
	);
}

export default BreadCrumb01;
