import React from "react";

function ComponentHeader({ title }) {
	return (
		<div className="h-full w-full flex md:flex-row flex-col items-center justify-between bg-white p-4 rounded-t-lg border-b">
			<div className="capitalize tracking-wider py-2 px-4 text-gray-600 font-medium">
				{title}
			</div>
			<div className="flex gap-4">
				<button className="focus:bg-orange-300 focus:ring focus:ring-orange-400 font-medium text-base transition-all duration-300 ease-in outline-none py-1 px-4 rounded-md capitalize text-gray-600 ">
					preview
				</button>
				<button className="focus:bg-orange-300 focus:ring focus:ring-orange-400 font-medium text-base transition-all duration-300 ease-in outline-none py-1 px-4 rounded-md capitalize text-gray-600 ">
					code
				</button>
			</div>
		</div>
	);
}

export default ComponentHeader;
