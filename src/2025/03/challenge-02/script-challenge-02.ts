import { readDataFromDom } from "utils/read-data-from-dom";
import { parseBanks } from "../parse-banks";

import { performanceCheck } from "utils/performance-check";
import { calculateTotalJoltage } from "./calculate-total-joltage";

const inputString: string = readDataFromDom();
const parsedBankData: string[] = parseBanks(inputString);

console.log("total joltage:", calculateTotalJoltage(parsedBankData));

console.log(
  "Execution time in ms:",
  performanceCheck(() => calculateTotalJoltage(parsedBankData))
);
