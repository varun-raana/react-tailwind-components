import React from "react";
import logo from "../../assets/images/logo.jpg";

function Navbar03() {
	return (
		<div className="max-w-5xl mx-auto bg-white drop-shadow-md rounded-md h-14 w-full">
			<div className="flex items-center justify-center h-full w-full">
				<div className="bg-gray-500 h-full flex-1 flex items-center justify-center">
					<a href="/" className=" flex-none">
						<img
							src={logo}
							className="h-10 w-10 object-cover rounded-full"
							alt="logo"
						/>
					</a>
				</div>
				<div className="bg-sky-500 h-full flex-[4] flex items-center justify-center gap-4 ">
					<a href="/" rel="noopener noreferrer">
						home
					</a>
					<a href="/" rel="noopener noreferrer">
						home
					</a>
					<a href="/" rel="noopener noreferrer">
						home
					</a>
				</div>
				<div className="bg-orange-500 h-full flex-[2]"></div>
			</div>
		</div>
	);
}

export default Navbar03;
