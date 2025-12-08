import { readDataFromDom } from "utils/read-data-from-dom";
import { calculateBeamPathsInefficient } from "./calculate-beam-paths-inefficient";

function getData(): string[] {
  const dataString = readDataFromDom();
  const rows = dataString.split("\n").filter(Boolean);
  return rows;
}

const rows = getData();
const numberOfSplits = calculateBeamPathsInefficient(rows);

console.log(numberOfSplits);
