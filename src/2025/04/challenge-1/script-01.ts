import { readDataFromDom } from "utils/read-data-from-dom";
import { findAccessiblePaper } from "./find-accessible-paper";
import { performanceCheck } from "utils/performance-check";

const data = readDataFromDom();

const inputArrayArray: string[][] = data
  .split("\n")
  .map((line) => line.split(""));

console.log("total accessible found:", findAccessiblePaper(inputArrayArray));

console.log(
  "Execution time in ms:",
  performanceCheck(() => findAccessiblePaper(inputArrayArray))
);
