import { useEffect, useRef } from 'react';

function useInterval(cb:any, delay:number) {
  const intervalRef = useRef();

  useEffect(() => {
    // 清除之前的定时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // 创建新的定时器
    intervalRef.current = window.setInterval(cb, delay);
    // 在组件卸载时清除定时器
    return () => {
      window.clearInterval(intervalRef.current);
    };
  }, [cb, delay]);

  return intervalRef;
}

export { useInterval }
