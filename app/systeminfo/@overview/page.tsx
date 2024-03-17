import Square from "@/app/components/square";
import React from "react";

export default function page() {
	return (
		<div className="h-2/5 w-full flex flex-1 flex-row justify-around">
				<Square />
				<Square />
		</div>
	);
}
