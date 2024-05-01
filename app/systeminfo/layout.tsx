"use client";
import autofit from "autofit.js";
import React, { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import CPUWiget from "../components/size-2x2/CPUWiget";
import DockerStatusWiget from "../components/size-4x4/DockerStatusWiget";

export default function Layout() {
	const refreshPage = () => {
		window.location.reload(); // 刷新当前页面
	};
	const handle = useFullScreenHandle();

	useEffect(() => {
		autofit.init({
			dw: 667,
			dh: 375,
			resize: true,
			el: "#dashboard",
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
			<FullScreen handle={handle} className="w-screen h-screen relative">
				<div
					className="flex flex-row  w-full h-full bg-cover justify-around items-center relative"
					style={{
						backgroundImage: "url(images/bg.jpg)",
					}}
					id="dashboard"
				>
					{/* <div */}
					{/* 	className="absolute backdrop-opacity-10 w-[350px] h-[350px] bg-opacity-30 bg-white rounded-lg" */}
					{/* > */}
					{/* </div> */}
					<div className="h-[330px] w-[330px] flex-shrink-0 flex flex-col justify-between items-center relative">
						<div className="absolute backdrop-opacity-10 w-[340px] h-[360px] bg-opacity-30 bg-white rounded-lg top-[-20px] bottom-[10px]"></div>
						<div
							className="absolute top-[-20px] text-[12px]"
							style={{ color: "#b44347" }}
						>
							Host Status
						</div>

						<div className="w-full  flex flex-row justify-center items-center">
							<CPUWiget />
							<CPUWiget />
						</div>
						<div className="w-full  flex flex-row justify-center items-center">
							<CPUWiget />
							<CPUWiget />
						</div>
					</div>
					<div className="h-[330px] w-[330px] flex-shrink-0 flex flex-col justify-between items-center px-[10px] relative">
						<div className="absolute backdrop-opacity-10 w-[340px] h-[360px] bg-opacity-30 bg-white rounded-lg top-[-20px] bottom-[10px]"></div>
						<div
							className="absolute top-[-20px] text-[12px]"
							style={{ color: "#b44347" }}
						>
							Docker Status
						</div>
						<DockerStatusWiget />
					</div>
				</div>
			</FullScreen>
		</>
	);
}
