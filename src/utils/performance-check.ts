function performanceCheck(functionToTest: () => unknown): void {
  const time0 = performance.now();
  functionToTest();
  const time1 = performance.now();
  console.log(`${time1 - time0} milliseconds.`);
}
