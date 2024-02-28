"use server";
import { cpu, currentLoad, processes } from "systeminformation";

import { SystemInfo } from "./interface";

class HostAdapter implements SystemInfo {
	async getCpuCurrentLoad(): Promise<number> {
		const cpuLoad = await currentLoad();
		return cpuLoad.currentLoad;
	}
}

const systeminfo = new HostAdapter();
export async function getSystemInfo(): Promise<SystemInfo> {
    return Promise.resolve(new HostAdapter());

}

export const getCpuCurrentLoad: () => Promise<number> = async () => {
	const cpuLoad = await currentLoad();
	return cpuLoad.currentLoad;
};

