import hero from "../../../src/assets/images/hero-03.jpg";

function Hero04() {
	return (
		<div className="md:h-screen w-full bg-white">
			<div className="flex md:flex-row flex-col h-full w-full">
				<div className="h-full flex flex-col justify-center w-full space-y-5 p-5 md:pl-10">
					<h2 className="font-bold text-6xl md:text-7xl lg:text-8xl max-w-6xl text-gray-800">
						<span className="block">Grow your business</span>
						<span className="block text-amber-600">with tech world.</span>
					</h2>
					<p className=" max-w-2xl font-medium text-lg text-gray-700 tracking-wide">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
						exercitationem deleniti, harum hic ratione itaque quibusdam dolores,
						illum, vitae minus inventore cumque? Aspernatur pariatur vitae sit?
						Provident, quo ipsum. Cum.
					</p>
					<div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-4 w-full md:w-fit">
						<button className="py-3 px-6 inline-block text-black text-base md:text-lg font-medium tracking-wide bg-white drop-shadow-md rounded-md">
							Get started
						</button>
						<button className="py-3 px-6 inline-block text-white font-medium bg-amber-600 text-base md:text-lg tracking-wide rounded-md">
							View demo
						</button>
					</div>
				</div>
				<div className="w-full h-full">
					<img
						src={hero}
						alt="hero"
						className="h-full w-full object-cover block resize-none"
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero04;
