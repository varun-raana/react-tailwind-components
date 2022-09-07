import React from "react";

function Example05() {
	return (
		<main className="h-screen bg-error404_05 bg-no-repeat bg-center font-sans bg-cover flex items-center justify-center p-2">
			<div className="flex flex-col items-center justify-center max-w-4xl mx-auto bg-orange-900 h-96 w-96 rounded-full bg-opacity-10 ">
				<p className="text-white capitalize md:text-9xl text-8xl font-black drop-shadow-md">
					404
				</p>
				<div className="flex flex-col items-center justify-center">
					<p className="md:text-base text-sm capitalize mt-5 text-white font-light tracking-wide">
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
