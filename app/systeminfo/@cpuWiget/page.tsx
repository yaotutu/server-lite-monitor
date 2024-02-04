"use client";
import { getCpuCurrentLoad } from "@/app/lib/systeminfo/host";
import React, { useEffect, useRef, useState } from "react";
import { ArcGuide, Chart, Interval } from "@antv/f2";
import Canvas from "@antv/f-react";

export default function Page() {
  const intervalRef = useRef<any>(null);
  const [currentCpuLoad, setCurrentCpuLoad] = useState(0);
  const [data, setdata] = useState([{
    x: "1",
    y: 85,
  }])
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
        setdata([{ x: "1", y: res }]);
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
        <Chart
          data={data}
          coord={{
            type: "polar",
            transposed: true,
            innerRadius: 0.8,
          }}
          scale={{
            y: {
              max: 100,
              min: 0,
            },
          }}
        >
          <ArcGuide
            records={[
              {
                x: 0,
                y: 0,
              },
              {
                x: 1,
                y: 99.98,
              },
            ]}
            style={{
              lineWidth: 11,
              stroke: "#ccc",
            }}
          />
          <Interval x="x" y="y" />
        </Chart>
      </Canvas>
    </div>
  );
}
