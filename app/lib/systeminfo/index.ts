"use server";

import { getHostAdapter } from "./hostAdapter";

export async function getSystemInfo() {
  const hostAdapter = await getHostAdapter();
  
    return {
    cpuCurrentLoad: await hostAdapter.getCpuCurrentLoad(),
    cpuCurrentSpeed: await hostAdapter.getCpuCurrentSpeed(),
    dynamicCpuInfo: await hostAdapter.getDynamicCpuInfo(),
  }
}


