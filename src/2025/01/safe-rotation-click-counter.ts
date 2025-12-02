/** Day 1 challenge 1 part 2
 * Safe starting at 50
 * Rotation data Marked with L or R and a number
 *
 * Count number of rotations that end up passing 0
 * */
export function safeRotationClickCounter(dataArray: string[]): number {
  let numberOfZeroClicks = 0;
  dataArray.reduce((previousPosition: number, currentInput: string) => {
    if (!currentInput) return previousPosition;

    const direction: string = currentInput.charAt(0);
    const rotation: number = parseInt(currentInput.slice(1));

    const numberOfFullRevolutions: number = Math.floor(rotation / 100);
    const partialRotation: number = rotation % 100;

    if (direction === "L") {
      numberOfZeroClicks +=
        numberOfFullRevolutions +
        (previousPosition && previousPosition <= partialRotation ? 1 : 0);

      return (((previousPosition - rotation) % 100) + 100) % 100; // funky double modulo to force positive result
    } else if (direction === "R") {
      numberOfZeroClicks +=
        numberOfFullRevolutions +
        (previousPosition + partialRotation > 99 ? 1 : 0);
      return (previousPosition + rotation) % 100;
    } else {
      throw Error("Why did you let this happen?");
    }
  }, 50);

  return numberOfZeroClicks;
}
