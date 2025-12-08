import { readDataFromDom } from "utils/read-data-from-dom";

import { DistanceBetweenPointsXY } from "../models";
import { calculateDistanceBetweenEveryPoint } from "./calculate-distance-between-every-point";
import { lastCircuitToConnectFinder } from "./last-circuit-to-connect-finder";
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

function calculateLastConnectionXCoordProduct(data: number[][]): number {
  const connections: DistanceBetweenPointsXY[] =
    calculateDistanceBetweenEveryPoint(data);
  const lastConnection: DistanceBetweenPointsXY = lastCircuitToConnectFinder(
    connections,
    data.length
  );
  const pointAXCoord = data[lastConnection.x][0];
  const pointBXCoord = data[lastConnection.y][0];
  return pointAXCoord * pointBXCoord;
}

const data = getData();

console.log(calculateLastConnectionXCoordProduct(data));

console.log(
  "Execution time in ms:",
  performanceCheck(() => calculateLastConnectionXCoordProduct(data), 100)
);
