function Hero01() {
	return (
		<div className="relative bg-indigo-500 h-full sm:h-screen flex items-center justify-center">
			<div className="absolute inset-x-0 bottom-0">
				<svg
					viewBox="0 0 200 12"
					fill="currentColor"
					className="w-full -mb-1 text-white"
					preserveAspectRatio="none">
					<path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
				</svg>
			</div>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-32 h-full w-full">
				<div className="sm:flex sm:space-y-0 space-y-10 sm:space-x-5 h-full w-full">
					<div className="sm:h-full h-fit w-full flex flex-col justify-center">
						<h2 className="max-w-xl sm:p-2">
							<span className="block sm:text-4xl text-3xl mb-4 text-white font-bold capitalize">
								Lorem ipsum, dolor sit amet consectetur{" "}
								<span className="text-indigo-100 font-black">adipisicing</span>.
							</span>
							<span className="block text-sm sm:text-base text-indigo-50 font-medium tracking-wider">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus
								ullam laboriosam non ex assumenda a, officiis atque provident? Unde
								vero, dignissimos ducimus harum quis cupiditate molestiae corrupti nemo
								dolorum voluptatum ex at libero provident pariatur officiis.
							</span>
						</h2>

						<div className="sm:flex space-y-2 sm:space-x-4 items-center sm:space-y-0 mt-4">
							<button className="outline-none sm:w-fit w-full py-2 px-3 transition-all duration-300 ease-in capitalize tracking-wide font-medium text-white border hover:ring-offset-1 border-indigo-400 hover:ring-indigo-400 hover:ring-2">
								see cases
							</button>
							<button className="outline-none sm:w-fit w-full py-2 px-3 capitalize tracking-wide font-semibold bg-indigo-400 hover:bg-indigo-300 transition-colors duration-200 ease-in	 text-white">
								download as CSV
							</button>
						</div>
					</div>
					<div className="h-full w-full flex flex-col justify-center">
						{/* add img here */}
						<img
							className="h-96 w-full rounded-2xl block object-cover resize-none"
							src="https://dummyimage.com/640x360/fff/aaa"
							alt="dummy_image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Hero01;
