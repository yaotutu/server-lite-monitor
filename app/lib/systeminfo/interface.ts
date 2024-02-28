export interface SystemInfo {
	getCpuCurrentLoad: () => Promise<number>;
}
