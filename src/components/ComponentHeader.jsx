import React from "react";

function ComponentHeader({ title }) {
	return (
		<div className="h-full w-full flex md:flex-row flex-col items-center justify-between bg-white p-4 drop-shadow-md rounded-t-lg">
			<div className="capitalize tracking-wider py-2 px-4 text-gray-600 font-medium">
				{title}
			</div>
			<div className="flex gap-4">
				<button className="drop-shadow hover:bg-opacity-90 transition-all duration-300 ease-in outline-none py-2 px-4 bg-white rounded-md flex items-center justify-center gap-2 capitalize font-medium text-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default ComponentHeader;
