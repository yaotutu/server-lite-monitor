"use client";
import React, { useEffect, useRef, useState } from "react";

import { getSystemInfo,getCpuCurrentLoad } from "../../lib/systeminfo/hostAdapter";
import { useInterval } from "@/app/lib/hooks";

export default function Page() {
	const [currentCpuLoad, setCurrentCpuLoad] = useState(0);

	useInterval(() => {
    getSystemInfo().then((res) => {
      console.log(res);
      
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
		</div>
	);
}
