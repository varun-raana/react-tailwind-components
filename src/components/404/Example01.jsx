import React from "react";
import error404_01 from "../../assets/images/404/error404_00.png";

function Example01() {
	return (
		<div className="h-screen overflow-hidden p-4 select-none bg-gradient-to-tr from-purple-50 to-transparent w-full">
			<div className="flex lg:flex-row flex-col items-center justify-center h-full">
				<div className="flex items-center justify-center h-full w-full">
					<div className="lg:max-h-96 lg:h-full md:max-w-md w-full flex flex-col md:p-4 p-2 md:gap-4 gap-7">
						<p className="lg:text-lg md:text-sm text-xs capitalize tracking-wider font-light text-gray-600">
							Need Help ?
						</p>
						<p className="lg:text-7xl md:text-6xl text-5xl capitalize tracking-wider font-extralight text-gray-600">
							page not found !!
						</p>
						<div className="flex lg:flow-row flex-col items-start mt-auto md:gap-4 gap-2">
							<button className="py-2 px-4 border-none outline-none focus:outline-none bg-purple-500 text-purple-50 hover:bg-purple-600 transition-all duration-200 ease-in flex-none font-medium tracking-wider capitalize rounded">
								talk to customer support ?
							</button>
							<button className="py-2 flex-none  px-4 border-none outline-none focus:outline-none hover:bg-purple-100 rounded transition-all ease-in font-medium capitalize duration-200 tracking-wider text-gray-600">
								go home 🏡
							</button>
						</div>
					</div>
				</div>
				<div className="h-full w-full flex items-center justify-center overflow-hidden ">
					<img
						src={error404_01}
						className="h-96 w-96 object-cover overflow-hidden flex-none"
						alt="not found"
					/>
				</div>
			</div>
		</div>
	);
}

export default Example01;
