"use client";
import React, { useEffect } from "react";

export default function Layout({
	overview,
	cpuWiget,
}: {
	children: React.ReactNode;
	cpuWiget: React.ReactNode;
	overview: React.ReactNode;
}) {
	const refreshPage = () => {
		window.location.reload(); // 刷新当前页面
	};
	useEffect(() => {
		const handleOrientationChange = () => {
			// 屏幕旋转时执行的操作
			console.log("屏幕发生了旋转");
			refreshPage();
		};

		window.addEventListener("orientationchange", handleOrientationChange);

		return () => {
			window.removeEventListener("orientationchange", handleOrientationChange);
		};
	}, []);
	console.log("layout");
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
