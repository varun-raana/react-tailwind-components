import React from "react";

function CallToAction() {
	return (
		<section className="pt-5 pb-1 px-0 w-full">
			<div className="flex sm:flex-row flex-col items-center justify-between w-full ">
				<p className="font-semibold tracking-wide self-start text-lg sm:mb-0 mb-3 capitalize">
					<span className="block">subscribe</span>
					<span className="block">to get new updates.</span>
				</p>
				<form className="flex items-center sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-2 sm:w-fit w-full h-full">
					<input
						type="email"
						placeholder="Subscribe"
						aria-label="subscribe"
						className="inline-block outline-none py-2 focus:placeholder:text-transparent placeholder:text-gray-600 px-4 font-medium focus:outline-none bg-transparent border border-gray-600 w-full"
						required
					/>
					<button
						type="submit"
						className="inline-block sm:w-fit w-full py-2 px-4 font-medium uppercase bg-gray-900 text-white h-full">
						subscribe
					</button>
				</form>
			</div>
		</section>
	);
}

export default CallToAction;
