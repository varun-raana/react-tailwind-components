import React from "react";

function Example05() {
	return (
		<main className="h-screen bg-error404_05 bg-no-repeat bg-center bg-cover flex items-center justify-center p-2">
			<div className="flex flex-col items-center justify-center max-w-4xl mx-auto bg-orange-900 sm:h-96 sm:w-96 h-64 w-64 rounded-full bg-opacity-10 ">
				<p className="text-white capitalize lg:text-9xl md:text-8xl text-6xl font-black drop-shadow-md">
					404
				</p>
				<div className="flex flex-col items-center justify-center">
					<p className="md:text-base text-sm text-center capitalize mt-5 text-white font-light tracking-wide">
						Oops! something went wrong!
					</p>
					<button className="bg-orange-600 text-white font-medium py-2 px-4 mt-4 rounded-md capitalize">
						go back
					</button>
				</div>
			</div>
		</main>
	);
}

export default Example05;
