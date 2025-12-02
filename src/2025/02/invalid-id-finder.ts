import { bitWiseIsEven } from "../../utils/bit-wise-is-even";
import { IdRange } from "./models";

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