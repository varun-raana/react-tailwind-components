import React from "react";
import Button from "../utils/Button";

function ComponentHeader() {
	return (
		<div className="border-b-gray-500 flex items-center justify-end p-4 rounded-t-lg border-b ">
			<div className="space-x-4 text-gray-600 bg-gray-900/5 p-1 rounded-lg">
				<Button>preview</Button>
				<Button>code</Button>
			</div>
		</div>
	);
}

export default ComponentHeader;
