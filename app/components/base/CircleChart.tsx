import ReactECharts from "echarts-for-react";
import { getColorByPercentage } from "../../lib/tools";
import { CSSProperties } from "react";

export const CircleChart = (props: {
	load: number;
	scale?: number;
  title?: string;
}) => {
	const { load , scale, title=""} = props;
	const color = getColorByPercentage(load);

	const gaugeData = [
		{
			value: load,
			name: title,
			title: {
				offsetCenter: ["0%", "0%"],
			},
			detail: {
				valueAnimation: true,
				offsetCenter: ["0%", "0%"],
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
					show: true,
					fontSize: 10,
					color: "#b44347",
				},
				detail: {
					show: false,
				},
			},
		],
	};
	const defaultStyle: CSSProperties = {
		aspectRatio: "1/1",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	};
	const finalStyle: CSSProperties = props.scale
		? { ...defaultStyle, transform: `scale(${props.scale})` }
		: defaultStyle;
	return <ReactECharts option={option} style={finalStyle} />;
};
