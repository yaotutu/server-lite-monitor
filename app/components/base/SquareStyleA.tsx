import React from "react";

interface SquareProps {
  main: {
    title: string;
    content: number;
  }
  subA: {
    title: string;
    content: number;
  }
  subB: {
    title: string;
    content: number;
  }
  chart: React.ReactNode;
}
export default function SquareStyleA(props: SquareProps) {
	const {
    main = { title: "", content: 0 },
    subA = { title: "", content: 0 },
    subB = { title: "", content: 0 },
    chart = "",
	} = props;
	return (
		<div className="aspect-square rounded-lg bg-white h-full opacity-80 p-3 pt-4 flex flex-col">
			<div className=" text-[12px]">{main.title}</div>
			<div className="text-2xl">{`${main.content.toFixed(0)}%`}</div>
			<div className="flex-grow flex items-center">
				<div className="w-1/2 h-full">
					<div>
						<div className="text-xs" style={{ color: "#b44347" }}>
              {subA.title}
						</div>
						<div className="text-xs">{subA.content}</div>
					</div>
					<div>
						<div className="text-xs" style={{ color: "#b44347" }}>
              {subB.title}
						</div>
						<div className="text-xs">{subB.content}°C</div>
					</div>
				</div>
				<div className="aspect-square w-1/2"> {chart}</div>
			</div>
			{/* <div className="h-full aspect-square">111</div> */}
			{/* {chart} */}
		</div>
	);
}
