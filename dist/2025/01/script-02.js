// src/utils/performance-check.ts
function performanceCheck(functionToTest, iterations = 1e3) {
  const time0 = performance.now();
  for (let i = 0; i < iterations; i++) {
    functionToTest();
  }
  const time1 = performance.now();
  return (time1 - time0) / iterations;
}

// src/2025/01/safe-rotation-click-counter.ts
function safeRotationClickCounter(dataArray2) {
  let numberOfZeroClicks = 0;
  dataArray2.reduce((previousPosition, currentInput) => {
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

// src/utils/read-data-from-dom.ts
function readDataFromDom() {
  return (document.getElementsByTagName("pre")[0]?.firstChild).data;
}

// src/2025/01/script-02.ts
var dataString = readDataFromDom();
var dataArray = dataString.split("\n");
console.log("number of times passed 0: ", safeRotationClickCounter(dataArray));
console.log(
  "Time in ms: ",
  performanceCheck(() => safeRotationClickCounter(dataArray))
);
//# sourceMappingURL=script-02.js.map
