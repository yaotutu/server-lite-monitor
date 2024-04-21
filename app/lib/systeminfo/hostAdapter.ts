"use server";
import { cpuCurrentSpeed, currentLoad } from "systeminformation";
import { DynamicCpuInfo, SystemInfo } from "./interface";

class HostAdapter implements SystemInfo {
	async getCpuCurrentLoad(): Promise<number> {
		const cpuLoad = await currentLoad();
		return cpuLoad.currentLoad;
	}
	async getCpuCurrentSpeed(): Promise<number> {
		const cpuSpeed = await cpuCurrentSpeed();
		return cpuSpeed.avg;
	}
	async getDynamicCpuInfo(): Promise<DynamicCpuInfo> {
		const cpuLoad = await this.getCpuCurrentLoad();
		const cpuSpeed = await this.getCpuCurrentSpeed();
		return { load: cpuLoad, speed: cpuSpeed };
	}
}
export async function getHostAdapter() {
	return new HostAdapter();
}
