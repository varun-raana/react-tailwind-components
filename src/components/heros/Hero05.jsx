import React from "react";

function Hero05() {
	return (
		<div className="lg:px-20 lg:py-14 p-2 bg-white">
			<div className="grid grid-cols-1 md:grid-cols-4  gap-2 w-full md:max-w-6xl mx-auto">
				<div className="h-96 cursor-pointer  p-4 w-full md:col-span-4 flex flex-col justify-center">
					<h2 className="font-bold text-4xl md:text-6xl lg:text-7xl  text-gray-600">
						<span className="block">Grow your business</span>
						<span className="block">
							with <span className="text-violet-600">tech world.</span>
						</span>
					</h2>
					<a
						href="#"
						className="inline-block w-fit py-3 px-6 bg-transparent border-none outline-none font-medium mt-5 bg-violet-600 text-violet-100 ">
						Show more
					</a>
				</div>
				<div className="h-96 cursor-pointer border border-gray-400 p-4 w-full md:col-span-2 flex items-center justify-center">
					<h2 className="font-bold text-4xl lg:text-5xl  text-violet-600">
						<span className="block">Grow your business</span>
						<span className="block">
							with <span className="text-gray-600">tech world.</span>
						</span>
					</h2>
				</div>
				<div className="h-96 cursor-pointer p-4 w-full md:col-span-2 bg-violet-700 overflow-auto">
					<p className="mt-4 text-violet-200 tracking-wide leading-8 font-medium overflow-auto ">
						<span className="text-4xl">Lorem</span> ipsum dolor sit amet consectetur
						adipisicing elit. Molestiae repudiandae corporis culpa nesciunt saepe?
						Sunt facilis quo nobis rem labore ullam sequi explicabo fugiat magni
						blanditiis id exercitationem ipsam commodi deserunt quis neque, porro quam
						dolor. Laborum sapiente mollitia vero ipsam nobis, ducimus corporis
						voluptas ullam debitis aut quos consectetur cumque accusamus commodi
						impedit a architecto blanditiis explicabo iure eligendi consequuntur?
						Accusantium nam.
					</p>
				</div>
				<div className="h-96 cursor-pointer group relative mix-blend-multiply p-4 w-full lg:col-span-3 col-span-full bg-hero03 bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center">
					<div className="absolute top-0 left-0 h-full w-full bg-black/70 -z-10 group-hover:bg-black/80 transition-all duration-100 ease-in"></div>

					<h2 className="font-bold text-4xl lg:text-5xl  text-white">
						<span className="block">Grow your business</span>
						<span className="block">with tech world.</span>
					</h2>
					<a
						href="#"
						className="inline-block w-fit py-2 px-4 bg-transparent border border-white outline-none rounded-md text-white font-medium mt-4 hover:bg-white hover:text-gray-600 ">
						Show more
					</a>
				</div>
				<div className="h-96 cursor-pointer w-full md:col-span-1">
					<div className="h-full flex md:flex-col flex-row items-center justify-center gap-2">
						<div className="bg-hero03 group bg-no-repeat  z-10 bg-center bg-cover h-full rounded-md relative w-full mix-blend-multiply">
							<div className="absolute top-0 -z-10 flex items-center justify-center left-0 h-full w-full bg-black/50 transition-all duration-100 ease-in">
								<a
									href="#"
									className="hidden group-hover:block text-center text-white font-medium border hover:bg-white hover:text-gray-600 transition-all duration-200 ease-in py-2 px-4 rounded-md z-10">
									Demo
								</a>
							</div>
						</div>
						<div className="bg-hero03 group bg-no-repeat z-10 bg-center bg-cover h-full rounded-md relative w-full ">
							<div className="absolute top-0 -z-10 flex items-center justify-center left-0 h-full w-full bg-black/50 transition-all duration-100 ease-in">
								<a
									href="#"
									className="hidden group-hover:block text-center text-white font-medium border hover:bg-white hover:text-gray-600 transition-all duration-200 ease-in py-2 px-4 rounded-md z-10">
									Demo
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero05;
