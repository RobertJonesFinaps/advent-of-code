import { readDataFromDom } from "utils/read-data-from-dom";
import { Quadrants } from "../models";
import { divideIntoQuadrants } from "../divide-into-quadrants";
import { checkAreaAgainstRectangles } from "./check-area-against-rectangles";
import { performanceCheck } from "utils/performance-check";

function getData(): number[][] {
  const data = readDataFromDom();
  return data
    .split("\n")
    .filter(Boolean)
    .map((row) => row.split(",").map((num) => parseInt(num)));
}

const data = getData();

const quadrants: Quadrants = divideIntoQuadrants(data);

console.log(checkAreaAgainstRectangles(quadrants));

console.log(
  "Execution time in ms:",
  performanceCheck(() => checkAreaAgainstRectangles(quadrants), 1000)
);
