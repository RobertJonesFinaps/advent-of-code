import { Range } from "./models";

/**
 *
 * @param ranges a sorted list (by start) of ranges
 * @returns a range array
 */
export function reduceRangeOverlap(ranges: Range[]): Range[] {
  const reducedRanges = [];
  // ranges are sorted by starts
  let currentIndex = 0;

  while (currentIndex < ranges.length) {
    const currentRange: Range = ranges[currentIndex];

    const indexOfRangesWithSameStarts = updateSameStarts(
      ranges,
      currentRange,
      currentIndex
    );

    const indexOfRangesWithSomeOverlap = updateOverlaps(
      ranges,
      currentRange,
      indexOfRangesWithSameStarts
    );

    const indexOfOneAway: number = updateOneAwayFromEnd(
      ranges,
      currentRange,
      indexOfRangesWithSomeOverlap
    );

    reducedRanges.push(currentRange);
    currentIndex = indexOfOneAway + 1;
  }

  return reducedRanges;
}

/**
 * This function merges all the ranges with the same starting value as the current range
 *
 * @param ranges the full range array
 * @param currentRange the one we are trying to reduce into
 * @param startingIndex where in the array we are
 * @returns number of indexes incremented
 */
function updateSameStarts(
  ranges: Range[],
  currentRange: Range,
  startingIndex: number
): number {
  let numberOfRangesWithStartsSameAsCurrent: number = startingIndex;
  while (
    numberOfRangesWithStartsSameAsCurrent + 1 < ranges.length &&
    ranges[numberOfRangesWithStartsSameAsCurrent + 1].start ===
      currentRange.start
  ) {
    currentRange.end = Math.max(
      Math.max(
        ranges[numberOfRangesWithStartsSameAsCurrent + 1].end,
        currentRange.end
      )
    );
    numberOfRangesWithStartsSameAsCurrent++;
  }

  return numberOfRangesWithStartsSameAsCurrent;
}

/**
 * This function merges all the ranges where the current range's end is greater than the following ranges ends
 *
 * @param ranges the full range array
 * @param currentRange the one we are trying to reduce into
 * @param startingIndex where in the array we are
 * @returns number of indexes incremented
 */
function updateOverlaps(
  ranges: Range[],
  currentRange: Range,
  startingIndex: number
): number {
  let indexOfOverlap: number = startingIndex;
  while (
    indexOfOverlap + 1 < ranges.length &&
    ranges[indexOfOverlap + 1].start <= currentRange.end
  ) {
    currentRange.end = Math.max(
      ranges[indexOfOverlap + 1].end,
      currentRange.end
    );
    indexOfOverlap++;
  }
  return indexOfOverlap;
}

/**
 * This function merges all the ranges where the current range's end is one off than the following ranges start
 * that is there is no natural number between (n).end and (n+1).start
 *
 * @param ranges the full range array
 * @param currentRange the one we are trying to reduce into
 * @param startingIndex where in the array we are
 * @returns number of indexes incremented
 */
function updateOneAwayFromEnd(
  ranges: Range[],
  currentRange: Range,
  startingIndex: number
): number {
  let indexOfOneAway: number = startingIndex;
  while (
    indexOfOneAway + 1 < ranges.length &&
    ranges[indexOfOneAway + 1].start === currentRange.end + 1
  ) {
    currentRange.end = Math.max(
      ranges[indexOfOneAway + 1].end,
      currentRange.end
    );
    indexOfOneAway++;
  }
  return indexOfOneAway;
}
