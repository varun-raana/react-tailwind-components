import github from "../assets/images/github.svg";

function Footer() {
	return (
		<div className="w-full py-6 md:px-24 flex items-center justify-between border-t border-gray-700">
			<p className="md:text-lg text-sm font-medium capitalize truncate text-gray-800 tracking-wide">
				made with 💜 by varun rana
			</p>
			<a
				href="http://github.com/varun-rana"
				rel="norefferrer"
				className="h-10 w-10 flex-none inline-flex"
			>
				<img
					src={github}
					className="h-full w-full object-cover"
					alt="git hub profile"
				/>
			</a>
		</div>
	);
}

export default Footer;
