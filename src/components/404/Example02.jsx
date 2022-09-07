import error404_02 from "../../assets/images/404/17Desember2020-003_-Converted-_generated.jpg";

function Example02() {
	return (
		<div className="h-screen overflow-hidden flex flex-col items-center justify-center gap-2 font-sans p-4">
			<div className="flex flex-col order-2 max-w-md backdrop-blur-md bg-amber-700 py-4 md:px-5 px-4 rounded-md bg-opacity-5 mix-blend-multiply">
				<p className=" lg:text-7xl md:text-5xl text-4xl capitalize font-medium text-amber-800">
					oops !!!
				</p>
				<p className="flex mt-6 text-amber-900 capitalize break-all text-justify">
					the page you looking for is might be deleted or moved somewhere else..
				</p>
				<p className="text-gray-500 mt-2 tracking-wide">
					let's go{" "}
					<a
						className="text-amber-600 capitalize font-medium no-underline hover:underline transition-all duration-500 ease-in-out"
						href="/"
						rel="noreferrer"
					>
						home
					</a>{" "}
					or talk to{" "}
					<a
						className="text-amber-600 capitalize font-medium no-underline hover:underline transition-all duration-500 ease-in-out"
						href="/"
						rel="noreferrer"
					>
						support.
					</a>{" "}
				</p>
			</div>
			<div className="md:h-[500px] h-[300px] w-fit bg-gray-800 flex-none">
				<img src={error404_02} className="h-full w-full object-cover" alt="" />
			</div>
		</div>
	);
}

export default Example02;
