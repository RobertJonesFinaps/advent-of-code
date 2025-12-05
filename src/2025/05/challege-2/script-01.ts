import { performanceCheck } from "utils/performance-check";
import { readDataFromDom } from "../../../utils/read-data-from-dom";
import { calculateFreshness } from "./calculate-freshness";

function getData() {
  const inputString: string = readDataFromDom();
  const parsedData: string[] = inputString.split("\n").slice(0, -1);
  const splitPosition: number = parsedData.findIndex((data) => data === "");
  const rangesInput = parsedData.slice(0, splitPosition);

  return rangesInput;
}

const data: string[] = getData();

console.log("Number of fresh:", calculateFreshness(data));

console.log(
  "Execution time in ms:",
  performanceCheck(() => calculateFreshness(getData()))
);
