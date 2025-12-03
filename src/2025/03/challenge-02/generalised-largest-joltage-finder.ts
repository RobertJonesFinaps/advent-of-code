/**
 * Searches a string to find the largest n digit number (combination length) as read from left to right
 *
 * @param bank a string composed of many numeric characters
 * @param combinationLength length of number to be found
 * @returns a number with a <combinationLength> worth of digits
 */
export function generalisedLargestJoltageFinder(
  bank: string,
  combinationLength: number
): number {
  const bankLength: number = bank.length;
  const largestCharactersArray: string[] = Array.from(
    "".repeat(combinationLength)
  ); // fill from end

  for (let i = 0; i < bankLength; i++) {
    const character: string = bank.charAt(i);

    for (
      let j = Math.max(0, i + combinationLength - bankLength);
      j < combinationLength;
      j++
    ) {
      const currentLargestCharacter: string = largestCharactersArray[j];

      if (character <= currentLargestCharacter) {
        continue;
      }

      largestCharactersArray.splice(j, 1, character);
      largestCharactersArray.fill("", j + 1);

      break;
    }
  }

  return parseInt(
    `${largestCharactersArray.slice(0, combinationLength).join("")}`
  );
}
