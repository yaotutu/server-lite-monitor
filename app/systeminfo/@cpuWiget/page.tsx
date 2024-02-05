"use client";
import {
  getCpuCurrentLoad,
  getProcessesSortedByCpuUsage,
} from "@/app/lib/systeminfo/host";
import React, { useEffect, useRef, useState } from "react";
import { ArcGuide, Axis, Chart, Interval, Line } from "@antv/f2";
import Canvas from "@antv/f-react";

export default function Page() {
  const intervalRef = useRef<any>(null);
  const [currentCpuLoad, setCurrentCpuLoad] = useState(0);
  const [data, setdata] = useState([
    {
      time: new Date().getTime(),
      value: 0,
    },
  ]);
  useEffect(() => {
    // 清除之前的定时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // 创建新的定时器
    intervalRef.current = window.setInterval(() => {
      console.log("Logging every minute");
      getCpuCurrentLoad().then((res) => {
        console.log(res);
        setCurrentCpuLoad(res);
        setdata((data) => {
          if (data.length > 50) {
            data.shift();
          }
          return [
            ...data,
            {
              time: new Date().getTime(),
              value: res,
            },
          ];
        });
      });
      getProcessesSortedByCpuUsage().then((res) => {
        console.log(res)
      });
    }, 1000);
    // 在组件卸载时清除定时器
    return () => {
      window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <ul>
        <li>当前负载:{currentCpuLoad}</li>
      </ul>
      <Canvas>
        <Chart data={data}>
          <Axis field="value" />
          <Axis field="time" type="timeCat" tickCount={5} mask="mm:ss" />
          <Line x="time" y="value" shape="smooth" />
        </Chart>
      </Canvas>
    </div>
  );
}
