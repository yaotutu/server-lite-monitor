"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactECharts from "echarts-for-react";
import { getSystemInfo } from "../../lib/systeminfo";
import { useInterval } from "@/app/lib/hooks";
import Square from "@/app/components/square";

export default function Page() {
	const [currentCpuLoad, setCurrentCpuLoad] = useState(0);
	const chartRef = useRef(null);

	useEffect(() => {
		const resizeChart = () => {
			if (chartRef.current) {
				chartRef.current.getEchartsInstance().resize();
			}
		};

		window.addEventListener("resize", resizeChart);

		return () => {
			window.removeEventListener("resize", resizeChart);
		};
	}, []);

	useInterval(() => {
		getSystemInfo().then((res) => {
			console.log(res.cpuCurrentLoad);
			setCurrentCpuLoad(res.cpuCurrentLoad);
		});
		// getCpuCurrentLoad().then((res) => {
		// 	setCurrentCpuLoad(res);
		// });
	}, 1000);

	const renderChart = () => {
		// 定义颜色渐变
		const colorGradient = [
			"#5AB36A", // 低占用，绿色
			"#ADD100", // 中等占用，黄绿色
			"#FECB00", // 正常占用，黄色
			"#FF8C00", // 高占用，橙色
			"#FF6A6A", // 过高占用，红色
		];
		const option = {
			render: "svg",
			xAxis: {
				type: "category",
				data: ["1", "2", "3", "4", "5"],
				show: false,
			},
			yAxis: {
				type: "value",
				min: 0,
				max: 100,
				show: false,
			},
			grid: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
			},

			series: [
				{
					data: [0, 30, 45, 65, 100],
					type: "line",
					itemStyle: {
						color: function (params: any) {
							const value = params.value;
							// 根据 CPU 占用情况确定颜色
							if (value < 20) {
								return colorGradient[0]; // 绿色
							} else if (value < 40) {
								return colorGradient[1]; // 黄绿色
							} else if (value < 60) {
								return colorGradient[2]; // 黄色
							} else if (value < 80) {
								return colorGradient[3]; // 橙色
							} else {
								return colorGradient[4]; // 红色
							}
						},
					},
				},
			],
		};
		return (
			<ReactECharts
				option={option}
				style={{ width: "100%", height: "100%", minHeight: 0, minWidth: 0 }}
				ref={chartRef}
			/>
		);
	};

	return (
		<div className="h-2/5 w-full flex flex-1 flex-row justify-around">
			<Square
				title={"CPU Utillsation"}
				sum={27}
				content1={""}
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
