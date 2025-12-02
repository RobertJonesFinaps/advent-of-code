import { performanceCheck } from "utils/performance-check";
import { readDataFromDom } from "utils/read-data-from-dom";
import { calculateResult } from "./calculate-result";
import { idRangeParser } from "./id-range-parser";
import { IdRange } from "../models";

const inputString: string = readDataFromDom();
const parsedIdRanges: IdRange[] = idRangeParser(inputString);

console.log("total is:", calculateResult(parsedIdRanges));

console.log(
  "Execution time in ms:",
  performanceCheck(() => calculateResult(parsedIdRanges))
);
