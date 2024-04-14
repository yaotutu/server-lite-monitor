"use server";
import { cpuCurrentSpeed, currentLoad } from "systeminformation";

import { SystemInfo } from "./interface";

class HostAdapter implements SystemInfo {
	async getCpuCurrentLoad(): Promise<number> {
		const cpuLoad = await currentLoad();
		return cpuLoad.currentLoad;
	}
	async getCpuCurrentSpeed(): Promise<number> {
		const cpuSpeed = await cpuCurrentSpeed();
		return cpuSpeed.avg;
	}
}
export async function getHostAdapter() {
	return new HostAdapter();
}
