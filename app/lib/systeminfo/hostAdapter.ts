"use server";
import { currentLoad } from "systeminformation";

import { SystemInfo } from "./interface";

class HostAdapter implements SystemInfo {
	async getCpuCurrentLoad(): Promise<number> {
		const cpuLoad = await currentLoad();
		return cpuLoad.currentLoad;
	}
}
export async function getHostAdapter() {
	return new HostAdapter();
}
