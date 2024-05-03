import { useInterval } from "@/app/lib/hooks";
import React, { useState } from "react";

import { getSystemInfo } from "../../lib/systeminfo";
import { CircleChart } from "../base";
import SvgIcon from "../base/SvgIcon";
export default function DockerStatusWiget() {
	const arr = [1, 2, 3];

	// useInterval(() => {
	// 	getSystemInfo().then((res) => {
	// 		console.log(res.dynamicDockerInfo);
	// 	});
	// }, 1000);
	return (
		<div className="w-full h-full flex flex-col justify-between">
			{arr.map((item, index) => {
				return (
					<div
						className="flex rounded-lg  h-[100px] opacity-80  flex-col bg-white"
						key={index}
					>
						<div className="p-[10px]">
							<div className="flex flex-row justify-between  rounded-t-lg h-[14px] text-[10px] p-t-3">
								<span className="">RSSHUB</span>
								<span>UpTime 999d</span>
							</div>
							<div className="flex flex-row  rounded-b-lg h-[66px]">
								<div className="w-1/4">
									<CircleChart load={80} title="CPU" />
								</div>
								<div className="w-1/4">
									<CircleChart load={60} title="RAM" />
								</div>
								<div className="w-1/4 text-xs flex justify-between flex-col">
									<div className="flex justify-center flex-col items-center">
										<SvgIcon
											href="icon-r"
											style={{
												color: "#b44347",
												width: "10px",
												height: "10px",
											}}
										/>
										<div>10.00MB/s</div>
									</div>
									<div className="flex justify-center flex-col items-center">
										<SvgIcon
											href="icon-w"
											style={{
												color: "#b44347",
												width: "10px",
												height: "10px",
											}}
										/>
										<div>10.00MB/s</div>
									</div>
								</div>
								<div className="w-1/4 text-xs flex justify-between flex-col">
									<div className="flex justify-center flex-col items-center">
										<SvgIcon
											href="icon-Arrows_Arrow_Up"
											style={{ color: "#b44347" }}
										/>
										<div>10.00MB/s</div>
									</div>
									<div className="flex justify-center flex-col items-center">
										<SvgIcon
											href="icon-Arrows_Arrow_Down"
											style={{ color: "#b44347" }}
										/>
										<div>10.00MB/s</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
