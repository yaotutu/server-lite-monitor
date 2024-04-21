"use client";
import autofit from "autofit.js";
import React, { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function Layout({
	cpuWiget,
}: {
	children: React.ReactNode;
	cpuWiget: React.ReactNode;
	overview: React.ReactNode;
}) {
	const refreshPage = () => {
		window.location.reload(); // 刷新当前页面
	};
	const handle = useFullScreenHandle();

	useEffect(() => {
		autofit.init({
			dw: 667,
			dh: 375,
			resize: true,
		});
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
	return (
		<>
			<button onClick={handle.enter} className="absolute bottom-0 right-0">
				Enter fullscreen
			</button>
			<FullScreen handle={handle} className="w-screen h-screen">
				<div
					className="flex flex-row  w-full h-full bg-cover"
					style={{
						backgroundImage: "url(images/bg.jpg)",
					}}
          id="dashboard"
				>
					<div className="h-[375px] w-[375px] flex-shrink-0 flex flex-col justify-center items-center">
						<div className="w-full h-1/2 flex flex-row justify-center items-center">
							{cpuWiget} {cpuWiget}
						</div>
						<div className="w-full h-1/2 flex flex-row justify-center items-center">
							{cpuWiget} {cpuWiget}
						</div>
					</div>
					<div className="h-full flex-1">
						<div>cpuWiget</div>
						<div>network wiget</div>
					</div>
				</div>
			</FullScreen>
		</>
	);
}
