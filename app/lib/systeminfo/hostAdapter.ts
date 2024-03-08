"use server";
import { cpu, currentLoad, processes } from "systeminformation";

import { SystemInfo } from "./interface";

class HostAdapter implements SystemInfo {
	async getCpuCurrentLoad(): Promise<number> {
		const cpuLoad = await currentLoad();
		return cpuLoad.currentLoad;
	}
}

export async function getSystemInfo(): Promise<SystemInfo> {
  const hostAdapter = new HostAdapter();
    return {
    getCpuCurrentLoad: await hostAdapter.getCpuCurrentLoad()
  }

}

export const getCpuCurrentLoad: () => Promise<number> = async () => {
	const cpuLoad = await currentLoad();
	return cpuLoad.currentLoad;
};

