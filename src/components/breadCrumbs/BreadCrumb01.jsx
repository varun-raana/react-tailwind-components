import React from "react";

function BreadCrumb01({ param }) {
	return (
		<div className="flex items-center gap-2 font-medium capitalize md:text-xs text-[11px]">
			<span className="text-gray-500">r-t-c</span>/<span>component</span>/
			<span>{param}</span>
		</div>
	);
}

export default BreadCrumb01;
