import error from "../../assets/images/404/undraw_page_not_found_re_e9o6.svg";

function Example04() {
	return (
		<div className="h-screen font-sans">
			<div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center h-full p-4">
				<div className="h-full flex items-center justify-center ">
					<img src={error} className="h-96 w-full" alt="" />
				</div>
				<div className="h-full flex flex-col md:items-start md:order-2 order-1 justify-center">
					<div className="max-w-md w-full p-4">
						<p className="lg:text-6xl md:text-5xl text-3xl text-gray-500 tracking-wide capitalize font-black">
							page not found !
						</p>
						<p className="text-sm text-gray-600 mt-3 text-justify font-medium">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
							nesciunt quis sed iusto nihil, impedit id architecto accusamus laborum
							magni rem, qui quidem consequuntur culpa praesentium non sequi ducimus!
							Cupiditate?
						</p>
						<button className="inline-block outline-none hover:bg-orange-50 py-2 px-4 border border-orange-500 rounded-lg text-orange-600 uppercase font-medium text-sm mt-3 transition-all duration-300 ease-in">
							go to home page
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Example04;
