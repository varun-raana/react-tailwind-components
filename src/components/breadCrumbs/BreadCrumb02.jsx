function BreadCrumb02() {
	return (
		<ul className="flex items-center justify-center space-x-2 py-1 lowercase">
			<li>
				<a href="#" className="inline-block text-gray-500">
					Home
				</a>
			</li>
			<span>/</span>
			<li className="inline-block hover:underline">Price</li>
		</ul>
	);
}

export default BreadCrumb02;
