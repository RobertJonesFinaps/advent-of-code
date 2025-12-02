import { IdRange } from "../models";
import { factoreStore } from "./factor-store";

/**
 * Function to find the ids composed of two or more repeated numbers in a given range
 * So 123123 is invalid but 111 is.
 *
 * Main observations are that it depends on the length of teh number in question.
 * The number of factors of the length of a number define the search sizes.
 *
 * @param idRange an object with a start and end property
 * @returns an array of invalid ids
 */
export function generalisedInvalidIdFinder(idRange: IdRange): number[] {
  const startLength: number = idRange.start.length;
  const endLength: number = idRange.end.length;
  const rangeStart: number = parseInt(idRange.start);
  const rangeEnd: number = parseInt(idRange.end);

  const invalidArray: number[] = [];
  for (let i = startLength; i <= endLength; i++) {
    const start: number = startLength === i ? rangeStart : Math.pow(10, i - 1);
    const end: number = endLength === i ? rangeEnd : Math.pow(10, i);

    invalidArray.push(...getInvalidIdArray(i, start, end));
  }

  return [...new Set(invalidArray)];
}

function getInvalidIdArray(numberLength: number, start: number, end: number) {
  const factors: number[] = factoreStore.getFactor(numberLength);

  const invalidIdArray: number[] = [];
  factors.forEach((factor: number) => {
    if (factor === 1) {
      return;
    }

    let startingCharacters: string = start
      .toString()
      .slice(0, numberLength / factor);

    const numberFormedByStartingCharacters: number = parseInt(
      startingCharacters.repeat(factor)
    );
    let currentNumber: number = numberFormedByStartingCharacters;
    if (numberFormedByStartingCharacters < start) {
      startingCharacters = (parseInt(startingCharacters) + 1).toString();
      currentNumber = parseInt(startingCharacters.repeat(factor));
    }

    while (currentNumber <= end) {
      invalidIdArray.push(currentNumber);
      startingCharacters = (parseInt(startingCharacters) + 1).toString();
      currentNumber = parseInt(startingCharacters.repeat(factor));
    }
  });

  return invalidIdArray;
}
