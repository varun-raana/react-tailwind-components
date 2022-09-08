import github from "../assets/images/github.svg";

function Footer() {
	return (
		<div className="w-full py-6 md:px-24 flex items-center justify-between capitalize font-black text-lg border-t border-gray-700 text-gray-700">
			<p className="md:text-xl text-base">made by @varun-raana</p>
			<a
				href="http://github.com/varun-raana"
				rel="norefferrer"
				className="h-10 w-10 flex-none inline-flex"
			>
				<img src={github} className="" alt="" />
			</a>
		</div>
	);
}

export default Footer;
