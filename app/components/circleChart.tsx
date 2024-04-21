import ReactECharts from "echarts-for-react";
import { getColorByPercentage } from "../lib/tools";

export const CircleChart = (props: {
	load: number;
}) => {
	const { load } = props;
	const color = getColorByPercentage(load);

	const gaugeData = [
		{
			value: load,
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
						color, // 设置填充色为蓝色
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
		/>
	);
};
