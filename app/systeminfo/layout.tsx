import React from "react";

export default function Layout({
	overview,cpuWiget
}: {
	children: React.ReactNode;
	cpuWiget: React.ReactNode;
	overview: React.ReactNode;
}) {
	return (
		<div
			className="flex flex-row  w-full h-full bg-cover p-3"
			style={{
				backgroundImage: "url(images/bg.jpg)",
			}}
		>
			<div className="h-full w-3/5">{cpuWiget}</div>
			<div className="h-full w-2/5">
				<div>cpuWiget</div>
				<div>network wiget</div>
			</div>
		</div>
	);
}
