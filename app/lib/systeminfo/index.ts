"use server";

import { getHostAdapter } from "./hostAdapter";

export async function getSystemInfo() {
  const hostAdapter = await getHostAdapter();
  
    return {
    dynamicCpuInfo: await hostAdapter.getDynamicCpuInfo(),
    dynamicDockerInfo: await hostAdapter.getDynamicDockerInfo(),
  }
}


