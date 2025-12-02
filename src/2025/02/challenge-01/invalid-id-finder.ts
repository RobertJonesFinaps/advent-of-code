import { bitWiseIsEven } from "../../../utils/bit-wise-is-even";
import { IdRange } from "../models";

/**
 * Function to find the ids composed of two repeated numbers in a given range
 * So 123123 is invalid but 111 is not.
 * 
 * Main observations are that only even length numbers can be considered.
 * 
 * @param idRange an object with a start and end property
 * @returns an array of invalid ids
 */
export function invalidIdFinder(idRange: IdRange): number[] {
  const startLength = idRange.start.length;
  const endLength = idRange.end.length;

  const start = bitWiseIsEven(startLength)
    ? parseInt(idRange.start)
    : Math.pow(10, startLength);

  const end = bitWiseIsEven(endLength)
    ? parseInt(idRange.end)
    : Math.pow(10, endLength - 1);

  if (start > end) return [];

  const invalidIdArray: number[] = [];

  const startAsString: string = start.toString();
  let startingCharacters: string = startAsString.slice(
    0,
    startAsString.length / 2
  );

  const numberFormedByStartingCharacters: number = parseInt(
    startingCharacters + startingCharacters
  );
  let currentNumber: number = numberFormedByStartingCharacters;
  if (numberFormedByStartingCharacters < start) {
    startingCharacters = (parseInt(startingCharacters) + 1).toString();
    currentNumber = parseInt(startingCharacters + startingCharacters);
  }

  while (currentNumber <= end) {
    invalidIdArray.push(currentNumber);
    startingCharacters = (parseInt(startingCharacters) + 1).toString();
    currentNumber = parseInt(startingCharacters + startingCharacters);
  }
  return invalidIdArray;
}