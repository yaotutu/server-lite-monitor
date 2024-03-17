import React from "react";

export default function Square() {
	return (
		<div className="aspect-square rounded-lg bg-white h-full opacity-80 p-3 pt-4">
			<div className="w-full h-1/3">
				<div className=" text-xs">CPU Utillization</div>
				<div>27%</div>
			</div>
			<div>
				<div>
					<div>Speed : 4ghz</div>
					<div>temp: 45c</div>
				</div>
				<div>chart</div>
			</div>
		</div>
	);
}
