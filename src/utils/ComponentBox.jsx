import { Link } from "react-router-dom";

function ComponentBox({ title, to, ariaLabel }) {
	return (
		<Link aria-label={ariaLabel} to={to}>
			<div className="w-full h-full rounded-xl cursor-pointer outline-none hover:outline-none flex flex-col group border border-gray-500 filter backdrop-blur-md bg-white/10 transition-colors duration-300 ease-in overflow-hidden">
				<div className="h-14 flex items-center space-x-5 py-4 px-5 w-full transition-all duration-300 ease-in font-medium">
					<p className="font-black tracking-wide text-base text-gray-600 group-hover:text-slate-700 transition-colors duration-300 ease-in w-full">
						{title}
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={3}
						stroke="currentColor"
						className="w-6 h-6 text-gray-500 group-hover:-mr-1 transition-all duration-200 ease-in"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
						/>
					</svg>
				</div>
			</div>
		</Link>
	);
}

export default ComponentBox;
