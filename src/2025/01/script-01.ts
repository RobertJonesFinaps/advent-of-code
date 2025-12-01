import { performanceCheck } from "utils/performance-check";
import { safeRotationCounter } from "./safe-rotation-counter";

console.log("number of times on 0: ", safeRotationCounter());

console.log("Time in ms: ", performanceCheck(safeRotationCounter));
