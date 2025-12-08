import { performanceCheck } from "utils/performance-check";
import { readDataFromDom } from "utils/read-data-from-dom";
import { calculateBeamPaths } from "./calculate-beam-paths";

function getData(): string[] {
  const dataString = readDataFromDom();
  const rows = dataString.split("\n").filter(Boolean);
  return rows;
}

const rows = getData();
const numberOfPaths = calculateBeamPaths(rows);

console.log(numberOfPaths);

console.log(
  "Execution time in ms:",
  performanceCheck(() => calculateBeamPaths(rows))
);
