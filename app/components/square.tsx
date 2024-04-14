import React from "react";

interface SquareProps {
	title: string;
	sum: number;
	content1: string;
	content2: string;
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
			<div className=" text-xs">{title}</div>
			<div>{`${sum.toFixed(0)}%`}</div>
			<div>Speed : {content1}</div>
			{content2 === "" ? <></> : <div>temp: {content2}</div>}
			<div className="flex-grow flex items-center justify-end">
				<div className="aspect-square h-full">
          {chart}
        </div>
			</div>
			{/* <div className="h-full aspect-square">111</div> */}
			{/* {chart} */}
		</div>
	);
}
