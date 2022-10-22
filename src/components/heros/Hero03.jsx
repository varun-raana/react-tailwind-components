function Hero03() {
	return (
		<div className="h-screen flex items-center justify-center md:px-20 font-mont bg-white">
			<div className="bg-hero03 flex flex-col items-center justify-center space-y-5 relative w-full bg-center bg-no-repeat bg-cover md:rounded-2xl p-2 md:p-4 mix-blend-multiply md:h-[700px] md:py-0 py-10 overflow-hidden">
				<div className="absolute h-full top-0 left-0 w-full bg-sky-900 mix-blend-multiply -z-10"></div>
				<h1 className="text-4xl md:w-fit w-full md:text-6xl text-white font-semibold md:space-y-2 text-center">
					<span className="block w-full">Grow your business</span>
					<span className="block w-full text-sky-700 text-opacity-80">
						with tech world.
					</span>
				</h1>
				<p className="text-base md:text-lg text-white max-w-2xl mx-auto w-full text-center mt-4 font-medium tracking-wide">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eaque rerum
					natus officia autem. Veniam soluta ullam nulla provident debitis.
				</p>

				<div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-4 w-full md:w-fit">
					<button className="py-3 px-6 inline-block text-white text-base md:text-lg font-medium tracking-wide bg-sky-900/50 rounded-md hover:bg-sky-900/80 transition-colors duration-200 ease-in">
						Get started
					</button>
					<button className="py-3 px-6 inline-block text-sky-600 text-base md:text-lg font-medium tracking-wide bg-white rounded-md">
						Talk support
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero03;
