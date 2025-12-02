// solution strat
// x: Get number of digits
// calculate factors of x => these are search group sizes
// e.g. 6 digit number has groups of size 3/2/1 available
// 9 digit number can only have 3/1 etc.
// then same as in challenge 1, increment and test in range

import { readDataFromDom } from "utils/read-data-from-dom";
import { idRangeParser } from "../id-range-parser";
import { IdRange } from "../models";
import { calculateResult } from "./calculate-result";
import { performanceCheck } from "../../../utils/performance-check";

const inputString: string = readDataFromDom();
const parsedIdRanges: IdRange[] = idRangeParser(inputString);

console.log("total is:", calculateResult(parsedIdRanges));

console.log(
  "Execution time in ms:",
  performanceCheck(() => calculateResult(parsedIdRanges))
);
