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
		<div className="aspect-square rounded-lg bg-white h-full opacity-80 p-3 pt-4">
			<div className="w-full">
				<div className=" text-xs">{title}</div>
				<div>{`${sum}%`}</div>
				<div>Speed : {content1}</div>
				<div>temp: {content2}</div>
			</div>
			<div className="w-full">
				<div className="aspect-square">{chart}</div>
			</div>
		</div>
	);
}
