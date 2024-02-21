"use server";
import { cpu, currentLoad, processes } from "systeminformation";
export async function getSystemStaicInfo() {
  return await cpu();
}

export async function getCpuCurrentLoad() {
  const cpuLoad = await currentLoad();
  return cpuLoad.currentLoad;
}

export const getProcessesSortedByCpuUsage = async (optios?: {limit?:number}) => {
  const {limit = 5} = optios || {};
  const allProcess = await processes();
  allProcess.list.sort((a: any, b: any) => {
    return b.cpu - a.cpu;
  });
  return allProcess.list.slice(0, limit);
};
