"use client";
import React, { useState } from "react";

import { getSystemInfo } from "../../lib/systeminfo";
import { useInterval } from "@/app/lib/hooks";
import { Card, ProgressBar } from "@tremor/react";

export default function Page() {
	const [currentCpuLoad, setCurrentCpuLoad] = useState(0);

	useInterval(() => {
    getSystemInfo().then((res) => {
      console.log(res.cpuCurrentLoad);
      setCurrentCpuLoad(res.cpuCurrentLoad);
      
    });
		// getCpuCurrentLoad().then((res) => {
		// 	setCurrentCpuLoad(res);
		// });
	}, 1000);

	return (
		<div>
			<ul>
				<li>当前负载:{currentCpuLoad}</li>
			</ul>
       <Card className="max-w-sm">
          <ProgressBar value={currentCpuLoad} />
        </Card>

		</div>
	);
}
