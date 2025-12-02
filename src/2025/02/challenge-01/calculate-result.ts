import { invalidIdFinder } from "./invalid-id-finder";
import { IdRange } from "../models";

/**
 * Take an array of ranges and compute the sum of invalid numbers
 * @param parsedIdRanges type IdRange, complete with start and end values
 * @returns sum of all invalid ids
 */
export function calculateResult(parsedIdRanges: IdRange[]) {
  return parsedIdRanges.reduce(
    (total: number, idRange: IdRange) =>
      total +
      invalidIdFinder(idRange).reduce(
        (invalidIdSum: number, id: number) => invalidIdSum + id,
        0
      ),
    0
  );
}
