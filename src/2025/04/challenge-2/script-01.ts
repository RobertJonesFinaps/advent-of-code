import { performanceCheck } from "utils/performance-check";
import { readDataFromDom } from "utils/read-data-from-dom";
import { findAndRemoveAccessiblePaper } from "./find-and-remove-accessible-paper";

const data = readDataFromDom();
function getData() {
  const inputArrayArray: string[][] = data
    .split("\n")
    .map((line) => line.split(""));

  return inputArrayArray;
}

function calculateEverything(inputArrayArray: string[][]): number {
  let amountRemoved;
  let totalRemoved = 0;
  while (amountRemoved !== 0) {
    amountRemoved = findAndRemoveAccessiblePaper(inputArrayArray);
    totalRemoved += amountRemoved;
  }
  return totalRemoved;
}

console.log("total removed found:", calculateEverything(getData()));

console.log(
  "Execution time in ms:",
  performanceCheck(() => calculateEverything(getData()))
);
