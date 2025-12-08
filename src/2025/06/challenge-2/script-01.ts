import { performanceCheck } from "utils/performance-check";
import { readDataFromDom } from "utils/read-data-from-dom";
import { calculateTotalOfSquidMaths } from "./calculateTotalOfSquidMaths";

const dataString = readDataFromDom();
console.log("solve everything:", calculateTotalOfSquidMaths(dataString));
console.log(
  "Execution time in ms:",
  performanceCheck(() => calculateTotalOfSquidMaths(dataString))
);
