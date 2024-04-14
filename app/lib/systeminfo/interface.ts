export interface SystemInfo {
	getCpuCurrentLoad: () => Promise<number>;
  getCpuCurrentSpeed: () => Promise<number>;
}
