import React from "react";

export default function DockerStatusWiget() {
	const arr = [1, 2, 3];
	return (
		<div className="w-full h-full flex flex-col justify-between">
			{arr.map((item) => {
				return (
					<div className="flex rounded-lg  h-[100px] opacity-80  flex-col">
						<div className="flex flex-row justify-between bg-white rounded-t-lg h-[20px] text-[12px] p-t-3">
							<span className="">RSSHUB</span>
							<span>uptime 999 day</span>
						</div>
						<div className="flex flex-row bg-white rounded-b-lg h-[80px]">
							<div className="w-1/4">cpu</div>
							<div className="w-1/4">cpu</div>
							<div className="w-1/4">cpu</div>
							<div className="w-1/4">cpu</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
