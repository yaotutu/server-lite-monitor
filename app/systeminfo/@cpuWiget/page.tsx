"use client";
import React, { useEffect, useRef, useState } from "react";

import { getCpuCurrentLoad } from "../../lib/systeminfo";
import { useInterval } from "@/app/lib/hooks";

export default function Page() {
  const [currentCpuLoad, setCurrentCpuLoad] = useState(0);

  useInterval(() => {
    getCpuCurrentLoad().then((res) => {
      setCurrentCpuLoad(res);
    });
  }, 1000);

  return (
    <div>
      <ul>
        <li>当前负载:{currentCpuLoad}</li>
      </ul>
    </div>
  );
}
