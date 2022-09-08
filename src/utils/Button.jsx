import React from "react";

function Button({ children }) {
	return (
		<button className="md:text-base text-sm focus:bg-white focus:bg-opacity-20 focus:border focus:border-gray-500 backdrop-blur-md font-medium transition-all duration-300 ease-in outline-none py-1 px-4 rounded-md capitalize text-gray-600 ">
			{children}
		</button>
	);
}

export default Button;
