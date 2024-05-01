export interface DynamicCpuInfo {
	speed: number;
	load: number;
	temp?: number;
}
export interface DynamicDockerInfo {
	pausedContainers: number;
	stoppedContainers: number;
	totalContainers: number;
	totalImages: number;
	activeContainers: number;
	details: any;
}
export interface DockerContainerStats {
	cpuPercent: number;
	memLimit: number;
	memPercent: number;
	memUsage: number;
	netIO: {
		rx: number;
		wx: number;
	};
	blockIO: {
		r: number;
		w: number;
	};
}

export interface SystemInfo {
	getCpuCurrentLoad: () => Promise<number>;
	getCpuCurrentSpeed: () => Promise<number>;
	getDynamicCpuInfo: () => Promise<DynamicCpuInfo>;
	getDynamicDockerInfo: () => Promise<DynamicCpuInfo>;
}
