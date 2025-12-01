import { performanceCheck } from "utils/performance-check";
import { safeRotationClickCounter } from "./safe-rotation-click-counter";

console.log("number of times passed 0: ", safeRotationClickCounter());

console.log("Time in ms: ", performanceCheck(safeRotationClickCounter));
