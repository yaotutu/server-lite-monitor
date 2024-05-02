"use server";
import {
	cpuCurrentSpeed,
	currentLoad,
	dockerAll,
	dockerContainerStats,
	dockerContainers,
	dockerInfo,
} from "systeminformation";
import { DynamicCpuInfo, DynamicDockerInfo, SystemInfo } from "./interface";
import { CountingMap } from "../tools";

class HostAdapter implements SystemInfo {
	private dockerIdToNameMap: CountingMap<string, string>;
	constructor() {
		// 使用构造函数初始化变量
		this.dockerIdToNameMap = new CountingMap<string, string>(100, () =>
			this.updateData(),
		);
	}

	// 定义更新数据的函数
	private async updateData() {
		const allContainers = await dockerAll();
		allContainers.forEach((container: any) => {
			this.dockerIdToNameMap.update(container.name, container.id);
		});
	}

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
	async getDynamicDockerInfo(containerIds: string[]): Promise<any> {
		const summary = await dockerContainers();
		const details = {};
		return await this.dockerIdToNameMap.getAll();
	}
}
let cachedHostAdapter: HostAdapter | null = null;
export async function getHostAdapter() {
	if (!cachedHostAdapter) {
		cachedHostAdapter = new HostAdapter(); // 只在第一次创建
	}
	return cachedHostAdapter;
}
