interface getCurrentCpuLoad {
  (): {
    currentLoad: number | string;
    cpus: [
      {
        load: number | string;
      },
    ];
  };
}
