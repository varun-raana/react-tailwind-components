import React from "react";
import Button from "../utils/Button";

function ComponentHeader() {
	return (
		<div className="h-full w-full border-b-gray-500 p-4 rounded-t-lg border-b ">
			<div className="flex justify-end space-x-3 text-gray-600">
				<Button>preview</Button>
				<Button>code</Button>
			</div>
		</div>
	);
}

export default ComponentHeader;
