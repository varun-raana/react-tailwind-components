function Header() {
	return (
		<header className="md:py-12 py-10 h-full w-full">
			<h1 className=" selection:text-violet-600 selection:bg-gray-800 lg:text-8xl md:text-7xl inline-block text-4xl text-gray-700 capitalize font-black">
				<span className="block w-full">react</span>{" "}
				<span className="block w-full">tailwindcss</span>{" "}
				<span className="block w-full">components</span>
			</h1>
		</header>
	);
}

export default Header;
