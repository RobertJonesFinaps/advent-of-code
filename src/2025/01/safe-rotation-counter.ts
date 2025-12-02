/** Day 1 challenge 1 part 1
 * Safe starting at 50
 * Rotation data Marked with L or R and a number
 *
 * Count number of rotations that end up landing on 0
 * */
export function safeRotationCounter(dataArray: string[]): number {
  let numberOfZeroHits = 0;
  dataArray.reduce((previousPosition: number, currentInput: string) => {
    if (!currentInput) return previousPosition;

    const direction = currentInput.charAt(0);
    const rotation = parseInt(currentInput.slice(1));

    let currentPosition: number;
    if (direction === "L") {
      currentPosition = (previousPosition - rotation) % 100; // this can be negative, see script 2 for fix
    } else if (direction === "R") {
      currentPosition = (previousPosition + rotation) % 100;
    } else {
      throw Error("Why did you let this happen?");
    }
    if (!currentPosition) numberOfZeroHits++;

    return currentPosition;
  }, 50);

  return numberOfZeroHits;
}
