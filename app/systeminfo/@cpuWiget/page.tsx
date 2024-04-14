"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactECharts from "echarts-for-react";
import { getSystemInfo } from "../../lib/systeminfo";
import { useInterval } from "@/app/lib/hooks";
import Square from "@/app/components/square";
import { getColorByPercentage } from "@/app/lib/tools";

export default function Page() {
	const [currentCpuLoad, setCurrentCpuLoad] = useState(0);
  const [currentCPuSpeed, setCurrentCPuSpeed] = useState(0) 
  const color =  getColorByPercentage(currentCpuLoad);
	const chartRef = useRef(null);

	useInterval(() => {
		getSystemInfo().then((res) => {
      // console.log(res)
			setCurrentCpuLoad(res.cpuCurrentLoad);
      setCurrentCPuSpeed(res.cpuCurrentSpeed);
		});
	}, 1000);

	const renderChart = () => {
		const gaugeData = [
			{
				value: currentCpuLoad,
				name: "Perfect",
				title: {
					offsetCenter: ["0%", "-30%"],
				},
				detail: {
					valueAnimation: true,
					offsetCenter: ["0%", "-20%"],
				},
			},
		];
		const option = {
			series: [
				{
					type: "gauge",
					startAngle: 90,
					endAngle: -270,
					pointer: {
						show: false,
					},
					progress: {
						show: true,
						overlap: false,
						roundCap: true,
						clip: false,
						itemStyle: {
							borderWidth: 1,
							borderColor: color,
							color // 设置填充色为蓝色
						},
					},
					axisLine: {
						lineStyle: {
							width: 5,
							color: [[1, "#E6EBF8"]],
							shadowColor: "#fff",
						},
					},
					splitLine: {
						show: false,
					},
					axisTick: {
						show: false,
					},
					axisLabel: {
						show: false,
					},
					data: gaugeData,
					title: {
						show: false,
					},
					detail: {
						show: false,
					},
				},
			],
		};
		return (
			<ReactECharts
				option={option}
				style={{
					aspectRatio: "1/1",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
				ref={chartRef}
			/>
		);
	};

	return (
		<div className="h-2/5 w-full flex flex-1 flex-row justify-around">
			<Square
				title={"CPU Utillsation"}
				sum={currentCpuLoad}
				content1={currentCPuSpeed}
				content2={""}
				chart={renderChart()}
			/>
			<Square
				title={"CPU Utillsation"}
				sum={27}
				content1={""}
				content2={""}
				chart={undefined}
			/>
			{/* <Square /> */}
		</div>
	);
}
