// src/utils/performance-check.ts
function performanceCheck(functionToTest) {
  const time0 = performance.now();
  functionToTest();
  const time1 = performance.now();
  return time1 - time0;
}

// src/2025/01/safe-rotation-counter.ts
function safeRotationCounter(dataArray2) {
  let numberOfZeroHits = 0;
  dataArray2.reduce((previousPosition, currentInput) => {
    if (!currentInput) return previousPosition;
    const direction = currentInput.charAt(0);
    const rotation = parseInt(currentInput.slice(1));
    let currentPosition;
    if (direction === "L") {
      currentPosition = (previousPosition - rotation) % 100;
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

// src/utils/read-data-from-dom.ts
function readDataFromDom() {
  return (document.getElementsByTagName("pre")[0]?.firstChild).data;
}

// src/2025/01/script-01.ts
var dataString = readDataFromDom();
var dataArray = dataString.split("\n");
console.log("number of times on 0: ", safeRotationCounter(dataArray));
console.log(
  "Time in ms: ",
  performanceCheck(() => safeRotationCounter(dataArray))
);
//# sourceMappingURL=script-01.js.map
