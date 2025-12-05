import { cleanUpRanges } from "./clean-up-ranges";
import { reduceRangeOverlap } from "./remove-range-overlap";

export function calculateFreshness(data: string[]) {
  const ranges = reduceRangeOverlap(cleanUpRanges(data));

  return ranges.reduce(
    (numberOfIds, range) => numberOfIds + (1 + range.end - range.start),
    0
  );
}
