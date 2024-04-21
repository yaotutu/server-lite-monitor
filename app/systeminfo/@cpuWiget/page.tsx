"use client";
import React, { useState } from "react";
import { getSystemInfo } from "../../lib/systeminfo";
import { useInterval } from "@/app/lib/hooks";
import Square from "@/app/components/square";
import { DynamicCpuInfo } from "@/app/lib/systeminfo/interface";
import { CircleChart } from "@/app/components/circleChart";

export default function Page() {
	const [dynamicCpuInfo, setDynamicCpuInfo] = useState<DynamicCpuInfo>({
		load: 0,
		speed: 0,
	});

	useInterval(() => {
		getSystemInfo().then((res) => {
			setDynamicCpuInfo(res.dynamicCpuInfo);
		});
	}, 1000);


	return (
		<>
			<div className="h-[150px] w-[150px] flex flex-1 flex-row justify-around">
				<Square
					title={"CPU Utillsation"}
					sum={dynamicCpuInfo.load}
					content1={dynamicCpuInfo.speed}
					content2={""}
					chart={<CircleChart load={dynamicCpuInfo.load} />}
				/>
			</div>
		</>
	);
}
