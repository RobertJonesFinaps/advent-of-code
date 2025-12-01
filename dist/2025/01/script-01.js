"use strict";
/** Day 1 challenge 1 part 1
 * Safe starting at 50
 * Rotation data Marked with L or R and a number
 *
 * Count number of rotations that end up landing on 0
 * */
function safeRotationCounter() {
    const dataString = (document.getElementsByTagName("pre")[0]?.firstChild).data;
    const dataArray = dataString.split("\n");
    let numberOfZeroHits = 0;
    dataArray.reduce((previousPosition, currentInput) => {
        if (!currentInput)
            return previousPosition;
        const direction = currentInput.charAt(0);
        const rotation = parseInt(currentInput.slice(1));
        let currentPosition;
        if (direction === "L") {
            currentPosition = (previousPosition - rotation) % 100;
        }
        else if (direction === "R") {
            currentPosition = (previousPosition + rotation) % 100;
        }
        else {
            throw Error("Why did you let this happen?");
        }
        if (!currentPosition)
            numberOfZeroHits++;
        return currentPosition;
    }, 50);
    return numberOfZeroHits;
}
const time0 = performance.now();
safeRotationCounter();
const time1 = performance.now();
console.log(`${time1 - time0} milliseconds.`);
