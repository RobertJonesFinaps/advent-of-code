import { performanceCheck } from "utils/performance-check";
import { safeRotationClickCounter } from "./safe-rotation-click-counter";
import { readDataFromDom } from "utils/read-data-from-dom";

const dataString: string = readDataFromDom();
const dataArray: string[] = dataString.split("\n");

console.log("number of times passed 0: ", safeRotationClickCounter(dataArray));

console.log(
  "Time in ms: ",
  performanceCheck(() => safeRotationClickCounter(dataArray))
);
