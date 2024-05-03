import React from "react";

interface IProps {
	href: string;
	className?: string;
	style?: React.CSSProperties;
}
const defaultStyle = {
	width: "12px", // 使用字符串表示尺寸
	height: "12px",
	// verticalAlign: "-0.15em", // 驼峰式命名
	fill: "currentColor", // 使用字符串表示颜色
	overflow: "hidden",
};
export default function SvgIcon(props: IProps) {
	const { href, className, style } = props;
	const finalStyle = { ...defaultStyle, ...style };
	return (
		<svg className={className} aria-hidden="true" style={finalStyle}>
			<use href={`#${href}`} /> {/* 引用 SVG Symbol */}
		</svg>
	);
}
