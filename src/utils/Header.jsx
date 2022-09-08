import React from "react";

function Header() {
	return (
		<div className="md:max-h-screen h-full w-full py-10 mb-10">
			<div className="flex md:flex-row flex-col space-x-10 h-full">
				<div className="h-full">
					<h2 className="max-w-lg md:text-9xl text-5xl text-gray-700 capitalize font-black">
						react tailwindcss components
					</h2>
				</div>
				{/* <div className=" h-full md:self-end">
					<p className="text-gray-800 font-medium text-justify ">
						a react tailwind component website with some extra UI.
					</p>
				</div> */}
			</div>
		</div>
	);
}

export default Header;
