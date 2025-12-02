import { IdRange } from "../models";

/**
 * Parses a correctly formatted string into a series of ranges
 *
 * @param inputString a comma deliminated string with a series of ranges e.g. AA-BB,XX-YY
 * @returns an array of IdRanges with start and end values
 */
export function idRangeParser(inputString: string): IdRange[] {
  const parsedInputArray: string[] = inputString.split(",");

  return parsedInputArray.map((rangeAsString) => {
    const [start, end] = rangeAsString.split("-");
    return {
      start,
      end,
    };
  });
}
