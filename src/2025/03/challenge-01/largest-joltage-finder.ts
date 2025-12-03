/**
 * Searches a string to find the largest two digit number as read from left to right
 *
 * @param bank a string composed of many numeric characters
 * @returns a two digit number
 */
export function largestJoltageFinder(bank: string): number {
  const bankLength = bank.length;
  let largest = "";
  let secondLargest = "";
  for (let i = 0; i < bankLength; i++) {
    const character = bank.charAt(i);
    if (character > largest && i !== bankLength - 1) {
      largest = character;
      secondLargest = "";
    } else if (character > secondLargest) {
      secondLargest = character;
    }
  }

  return parseInt(`${largest}${secondLargest}`);
}
