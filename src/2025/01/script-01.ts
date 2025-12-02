import { performanceCheck } from "utils/performance-check";
import { safeRotationCounter } from "./safe-rotation-counter";
import { readDataFromDom } from "utils/read-data-from-dom";

const dataString: string = readDataFromDom();
const dataArray: string[] = dataString.split("\n");

console.log("number of times on 0: ", safeRotationCounter(dataArray));

console.log(
  "Time in ms: ",
  performanceCheck(() => safeRotationCounter(dataArray))
);
