import { Link } from "react-router-dom";

function BreadCrumb01({ parentParam, param, to }) {
	return (
		<ul className="flex items-center space-x-2 sm:space-x-3 py-1">
			<li className="text-gray-500 truncate">
				<Link
					to="/"
					className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-violet-700 sm:text-base capitalize">
					react-tailwind-components
				</Link>
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
			{parentParam && (
				<>
					<li className="text-gray-500 truncate">
						<Link
							to="/"
							className="truncate text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-violet-600 sm:text-base capitalize">
							{parentParam}
						</Link>
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
				</>
			)}
			<li className="sm:truncate">
				<Link
					to={`${to}`}
					className="truncate text-sm sm:text-base font-bold text-violet-600 capitalize">
					{param}
				</Link>
			</li>
		</ul>
	);
}

export default BreadCrumb01;
