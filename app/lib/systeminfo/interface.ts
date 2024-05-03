export interface DynamicCpuInfo {
	speed: number;
	load: number;
	temp?: number;
}
export interface DynamicDockerInfo {
	summary: DockerSummary;
	details: {
		[key: string]: DockerContainerStats;
	};
}
export interface DockerSummary {
	pausedContainers: number;
	stoppedContainers: number;
	totalContainers: number;
	totalImages: number;
	activeContainers: number;
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
	getDynamicDockerInfo: (containerIds: string[]) => Promise<DynamicCpuInfo>;
}
