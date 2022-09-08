import React from "react";

function Button({ children }) {
	return (
		<button className="md:text-base text-sm focus:bg-white focus:bg-opacity-20 focus:ring-1 focus:ring-gray-400 font-medium transition-all duration-300 ease-in outline-none py-1 px-4 rounded-md capitalize text-gray-600 flex-none ">
			{children}
		</button>
	);
}

export default Button;
