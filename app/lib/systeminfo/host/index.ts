'use server'
import { cpu, currentLoad } from 'systeminformation';
export async function getSystemStaicInfo() {
  return await cpu();

}

export async function getCpuCurrentLoad() {
  const cpuLoad = await currentLoad()
  return cpuLoad.currentLoad
}
