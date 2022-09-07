import React from "react";

function Box({ title, children }) {
	return (
		<div className="flex flex-col items-center justify-center drop-shadow bg-white rounded-md gap-4 w-full">
			<div className="flex items-center justify-between bg-white drop-shadow w-full rounded-md p-4">
				<div className="capitalize tracking-wider py-2 px-4 text-gray-600 font-medium">
					{title}
				</div>
				<div className="flex gap-4">
					<button className="drop-shadow py-2 px-4 bg-white rounded-md flex items-center justify-center gap-2 capitalize font-medium text-gray-500">
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
						<span>code</span>
					</button>
				</div>
			</div>
			<div className="p-2">{children}</div>
		</div>
	);
}

export default Box;
