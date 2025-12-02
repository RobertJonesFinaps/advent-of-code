import { readDataFromDom } from "utils/read-data-from-dom";
import { idRangeParser } from "./id-range-parser";
import { IdRange } from "./models";
import { invalidIdFinder } from "./invalid-id-finder";
import { performanceCheck } from "utils/performance-check";

const inputString: string = readDataFromDom();
const parsedIdRanges: IdRange[] = idRangeParser(inputString);

function calculateResult(parsedIdRanges: IdRange[]) {
  return parsedIdRanges.reduce(
    (total, idRange) =>
      total +
      invalidIdFinder(idRange).reduce(
        (invalidIdSum, id) => invalidIdSum + id,
        0
      ),
    0
  );
}

console.log("total is:", calculateResult(parsedIdRanges));

console.log(
  "Execution time in ms:",
  performanceCheck(() => calculateResult(parsedIdRanges))
);
