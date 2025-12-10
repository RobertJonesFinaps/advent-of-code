import { readDataFromDom } from "utils/read-data-from-dom";
import { findOutlierIdsInOrderedArray } from "./find-outliers-in-ordered-array";
import { calculateMaxRectangle } from "./calculate-max-rectangle";
import { performanceCheck } from "utils/performance-check";

function getData(): number[][] {
  const data = readDataFromDom();
  return data
    .split("\n")
    .filter(Boolean)
    .map((row) => row.split(",").map((num) => parseInt(num)));
}

function doTheThing(data: number[][]): number {
  const outliers: number[] = findOutlierIdsInOrderedArray(data);

  const result: number = calculateMaxRectangle(outliers, data);
  return result;
}

const data: number[][] = getData();

console.log(doTheThing(data));

console.log(
  "Execution time in ms:",
  performanceCheck(() => doTheThing(data), 1000)
);
