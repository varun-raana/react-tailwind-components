import github from "../assets/images/github.svg";

function Footer() {
	return (
		<div className="w-full py-2 flex items-center justify-between border-t border-gray-700">
			<p className="text-sm font-medium capitalize w-fit text-gray-900 tracking-wide">
				made with 💜 by varun rana
			</p>
			<a
				href="http://github.com/varun-rana"
				rel="norefferrer"
				className="w-8 h-8 flex-none inline-flex">
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
