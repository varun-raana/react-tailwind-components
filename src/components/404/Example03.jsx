import React from "react";

function Example03() {
	return (
		<a href="http://github.com/varun-raana/react-tailwind-components/blob/main/src/components/404/Example03.jsx">
			<div
				className="h-screen flex items-center justify-center overflow-hidden
					 select-none bg-radial01 relative"
			>
				<p className="lg:text-[30rem] mix-blend-multiply md:text-[30rem] text-[14rem] font-black text-center text-opacity-90 drop-shadow-2xl text-white md:tracking-wider">
					4ʘ4
				</p>
				<div className="absolute md:text-xl text-right max-w-xs sm:bottom-10 bottom-2 right-2 p-2 sm:right-10 w-full text-gray-200 tracking-wide font-medium capitalize">
					the page you are looking for is not found.
				</div>
			</div>
		</a>
	);
}

export default Example03;
