function safeRotationClickCounter() {
    const dataString = (document.getElementsByTagName("pre")[0]?.firstChild).data;
    const dataArray = dataString.split("\n");
    let numberOfZeroClicks = 0;
    dataArray.reduce((previousPosition, currentInput) => {
        if (!currentInput)
            return previousPosition;
        const direction = currentInput.charAt(0);
        const rotation = parseInt(currentInput.slice(1));
        const numberOfFullRevolutions = Math.floor(rotation / 100);
        const partialRotation = rotation % 100;
        if (direction === "L") {
            numberOfZeroClicks +=
                numberOfFullRevolutions +
                    (previousPosition && previousPosition <= partialRotation ? 1 : 0);
            return (((previousPosition - rotation) % 100) + 100) % 100;
        }
        else if (direction === "R") {
            numberOfZeroClicks +=
                numberOfFullRevolutions +
                    (previousPosition + partialRotation > 99 ? 1 : 0);
            return (previousPosition + rotation) % 100;
        }
        else {
            throw Error("Why did you let this happen?");
        }
    }, 50);
    return numberOfZeroClicks;
}
console.log("number of times passed 0: ", safeRotationClickCounter());
