import { readDataFromDom } from "utils/read-data-from-dom";
import { calculateBeamSplits } from "./calculate-beam-splits";
import { performanceCheck } from "utils/performance-check";

function getData(): string[] {
  const dataString = readDataFromDom();
  const rows = dataString.split("\n").filter(Boolean);
  return rows;
}

const rows = getData();
const numberOfSplits = calculateBeamSplits(rows);

console.log(numberOfSplits);

console.log(
  "Execution time in ms:",
  performanceCheck(() => calculateBeamSplits(rows))
);
