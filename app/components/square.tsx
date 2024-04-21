import React from "react";

interface SquareProps {
	title: string;
	sum: number;
	content1: string | number;
	content2: string | number;
	chart: React.ReactNode;
}
export default function Square(props: SquareProps) {
	const {
		title = "",
		sum = 0,
		content1 = "",
		content2 = "",
		chart = "",
	} = props;
	return (
		<div className="aspect-square rounded-lg bg-white h-full opacity-80 p-3 pt-4 flex flex-col">
			<div className=" text-[12px]">{title}</div>
			<div className="text-2xl">{`${sum.toFixed(0)}%`}</div>
			<div className="flex-grow flex items-center">
				<div className="w-1/2 h-full">
					<div>
						<div className="text-xs" style={{ color: "#b44347" }}>
							Speed
						</div>
						<div className="text-xs">{content1 ? content1 : "0"}</div>
					</div>
					<div>
						<div className="text-xs" style={{ color: "#b44347" }}>
							Temp
						</div>
						<div className="text-xs">{content2 ? content2 : 0}°C</div>
					</div>
				</div>
				<div className="aspect-square w-1/2"> {chart}</div>
			</div>
			{/* <div className="h-full aspect-square">111</div> */}
			{/* {chart} */}
		</div>
	);
}
