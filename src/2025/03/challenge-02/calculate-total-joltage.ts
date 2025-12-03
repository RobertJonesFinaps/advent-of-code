import { generalisedLargestJoltageFinder } from "./generalised-largest-joltage-finder";

/**
 * Take an array of ranges and compute the sum of invalid numbers
 * @param parsedIdRanges type IdRange, complete with start and end values
 * @returns sum of all invalid ids
 */
export function calculateTotalJoltage(bankData: string[]) {
  return bankData.reduce(
    (total: number, bank: string) =>
      total + generalisedLargestJoltageFinder(bank, 12),
    0
  );
}
