import { useInterval } from "@/app/lib/hooks";
import React, { useState } from "react";

import { getSystemInfo } from "../../lib/systeminfo";
export default function DockerStatusWiget() {
	const arr = [1, 2, 3];

	useInterval(() => {
		getSystemInfo().then((res) => {
			console.log(res.dynamicDockerInfo);
		});
	}, 1000);
	return (
		<div className="w-full h-full flex flex-col justify-between">
			{arr.map((item, index) => {
				return (
					<div
						className="flex rounded-lg  h-[100px] opacity-80  flex-col bg-white"
						key={index}
					>
						<div className="p-[10px]">
							<div className="flex flex-row justify-between  rounded-t-lg h-[20px] text-[12px] p-t-3">
								<span className="">RSSHUB</span>
								<span>uptime 999 day</span>
							</div>
							<div className="flex flex-row  rounded-b-lg h-[60px]">
								<div className="w-1/4">cpu</div>
								<div className="w-1/4">cpu</div>
								<div className="w-1/4">cpu</div>
								<div className="w-1/4">cpu</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
