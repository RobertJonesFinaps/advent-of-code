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
console.log("number of times on 0: ", safeRotationCounter());
