
export const getColorByPercentage = (percentage: number): string => {
	// 如果输入的数值范围在 1 到 10 之间，则将其除以 10
	if (percentage > 1 && percentage <= 10) {
		percentage /= 10;
	}
	// 如果输入的数值范围在 1 到 100 之间，则将其除以 100
	else if (percentage > 10 && percentage <= 100) {
		percentage /= 100;
	}
	const green = [0, 255, 0]; // 绿色
	const yellow = [255, 255, 0]; // 黄色
	const red = [255, 0, 0]; // 红色

	let color: number[] = [];

	// 根据百分比计算颜色值
	if (percentage < 0.5) {
		// 当百分比小于0.5时，从绿色渐变到黄色
		const ratio = percentage * 2;
		color = [
			Math.round((yellow[0] - green[0]) * ratio + green[0]),
			Math.round((yellow[1] - green[1]) * ratio + green[1]),
			Math.round((yellow[2] - green[2]) * ratio + green[2]),
		];
	} else {
		// 当百分比大于等于0.5时，从黄色渐变到红色
		const ratio = (percentage - 0.5) * 2;
		color = [
			Math.round((red[0] - yellow[0]) * ratio + yellow[0]),
			Math.round((red[1] - yellow[1]) * ratio + yellow[1]),
			Math.round((red[2] - yellow[2]) * ratio + yellow[2]),
		];
	}

	// 将 RGB 值转换为十六进制表示的颜色值
	return (
		"#" +
		color
			.map((c) => {
				const hex = c.toString(16);
				return hex.length === 1 ? "0" + hex : hex;
			})
			.join("")
	);
};

