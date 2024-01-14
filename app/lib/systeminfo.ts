'use server'
import { cpu, cpuCurrentSpeed } from 'systeminformation';
export async function getSystemStaicInfo() {
  return await cpu();

}

export async function getcpuCurrentSpeed() {
  return await cpuCurrentSpeed();
}
