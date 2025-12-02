
import { IdRange } from "../models";
import { generalisedInvalidIdFinder } from "./generalised-invalid-id-finder";

/**
 * Take an array of ranges and compute the sum of invalid numbers
 * @param parsedIdRanges type IdRange, complete with start and end values
 * @returns sum of all invalid ids
 */
export function calculateResult(parsedIdRanges: IdRange[]) {
  return parsedIdRanges.reduce(
    (total: number, idRange: IdRange) =>
      total +
      generalisedInvalidIdFinder(idRange).reduce(
        (invalidIdSum: number, id: number) => invalidIdSum + id,
        0
      ),
    0
  );
}
