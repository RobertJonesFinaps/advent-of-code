import { readDataFromDom } from "utils/read-data-from-dom";
import { trackShortestConnections } from "./track-shortest-connections";
import { DistanceBetweenPointsXY } from "../models";
import { countCircuits } from "./count-circuits";
import { performanceCheck } from "utils/performance-check";

function getData(): number[][] {
  const data = readDataFromDom();

  const rows: number[][] = data
    .split("\n")
    .filter(Boolean)
    .map((row) =>
      row.split(",").map((numberAsString) => parseInt(numberAsString))
    );

  return rows;
}

function calculateTopThreeCircuitSizes(
  data: number[][],
  stoppingPoint: number
): number {
  const shortestConnections: DistanceBetweenPointsXY[] =
    trackShortestConnections(data, stoppingPoint);
  const circuitSizes: number[] = countCircuits(shortestConnections);
  circuitSizes.sort((a, b) => b - a);
  let total = 1;
  for (let i = 0; i < 3; i++) {
    total *= circuitSizes[i];
  }
  return total;
}

const data = getData();

console.log(calculateTopThreeCircuitSizes(data, 1000));

console.log(
  "Execution time in ms:",
  performanceCheck(() => calculateTopThreeCircuitSizes(data, 1000), 100)
);
