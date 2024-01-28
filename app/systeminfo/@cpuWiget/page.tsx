"use client";
import { getCpuCurrentLoad } from "@/app/lib/systeminfo";
import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const intervalRef = useRef<any>(null);
  useEffect(() => {
    // 清除之前的定时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // 创建新的定时器
    intervalRef.current = window.setInterval(() => {
      console.log("Logging every minute");
    }, 1000);
    // 在组件卸载时清除定时器
    return () => {
      window.clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <ul>
        <li>{}</li>
      </ul>
    </div>
  );
}
