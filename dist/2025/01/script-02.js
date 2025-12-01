// src/utils/performance-check.ts
function performanceCheck(functionToTest) {
  const time0 = performance.now();
  functionToTest();
  const time1 = performance.now();
  return time1 - time0;
}

// src/utils/read-data-from-dom.ts
function readDataFromDom() {
  return (document.getElementsByTagName("pre")[0]?.firstChild).data;
}

// src/2025/01/safe-rotation-click-counter.ts
function safeRotationClickCounter() {
  const dataString = readDataFromDom();
  const dataArray = dataString.split("\n");
  let numberOfZeroClicks = 0;
  dataArray.reduce((previousPosition, currentInput) => {
    if (!currentInput) return previousPosition;
    const direction = currentInput.charAt(0);
    const rotation = parseInt(currentInput.slice(1));
    const numberOfFullRevolutions = Math.floor(rotation / 100);
    const partialRotation = rotation % 100;
    if (direction === "L") {
      numberOfZeroClicks += numberOfFullRevolutions + (previousPosition && previousPosition <= partialRotation ? 1 : 0);
      return ((previousPosition - rotation) % 100 + 100) % 100;
    } else if (direction === "R") {
      numberOfZeroClicks += numberOfFullRevolutions + (previousPosition + partialRotation > 99 ? 1 : 0);
      return (previousPosition + rotation) % 100;
    } else {
      throw Error("Why did you let this happen?");
    }
  }, 50);
  return numberOfZeroClicks;
}

// src/2025/01/script-02.ts
console.log("number of times passed 0: ", safeRotationClickCounter());
console.log("Time in ms: ", performanceCheck(safeRotationClickCounter));
//# sourceMappingURL=script-02.js.map
