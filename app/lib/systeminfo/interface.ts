export interface DynamicCpuInfo {
  speed: number;
  load: number;
  temp?: number;
}
export interface SystemInfo {
	getCpuCurrentLoad: () => Promise<number>;
  getCpuCurrentSpeed: () => Promise<number>;
  getDynamicCpuInfo: () => Promise<DynamicCpuInfo>;
}
