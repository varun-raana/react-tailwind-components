import React from "react";

function CallToAction() {
	return (
		<section className="sm:py-5 p-4 mb-2 w-full border-2 top-0 left-0 border-gray-600">
			<div className="flex sm:flex-row flex-col items-center justify-between w-full ">
				<p className="font-semibold tracking-wide self-start sm:text-xl text-lg sm:mb-0 mb-3 capitalize">
					<span className="block">subscribe</span>
					<span className="block">to get new updates.</span>
				</p>
				<form className="flex items-center sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-2 sm:w-fit w-full h-full">
					<input
						type="email"
						placeholder="Subscribe"
						aria-label="subscribe"
						className="inline-block outline-none py-2 focus:placeholder:text-transparent placeholder:text-gray-600 px-4 font-medium focus:outline-none bg-transparent border border-gray-600 w-full invalid:border-gray-600 
						focus:invalid:border-gray-600 focus:invalid:ring-[0.5px] focus:invalid:ring-gray-700 transition-all duration-300 ease-out"
						required
					/>
					<button
						type="submit"
						className="inline-block tracking-wide sm:w-fit w-full py-2 px-4 hover:text-gray-200 transition-colors duration-300 ease-in capitalize bg-gray-900 text-white h-full">
						subscribe
					</button>
				</form>
			</div>
		</section>
	);
}

export default CallToAction;
