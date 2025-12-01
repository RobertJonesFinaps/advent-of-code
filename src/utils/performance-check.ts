/**
 * This is intended to be used as a standardised speed test for javascript functions.
 * It uses the performance API which gives a high precision processing time.
 * Note that due to some browser behaviours, and protection against cross-origin scripting, 
 * it may be limited to a precision of miliseconds.
 *
 * @param functionToTest a function you wish to test
 * @returns time in miliseconds for that function to execute
 */
export function performanceCheck(functionToTest: () => unknown): number {
  const time0 = performance.now();
  functionToTest();
  const time1 = performance.now();
  return time1 - time0;
}
