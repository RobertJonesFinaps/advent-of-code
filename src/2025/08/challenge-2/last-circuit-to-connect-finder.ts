import { DistanceBetweenPointsXY } from "../models";

/**
 * function which cycles through the boxes and returns the connection which completes the full circuit
 * @param connections array of connections between boxes
 * @param totalBoxes total number of boxes in the set
 * @returns object that causes the set size to match the total
 */
export function lastCircuitToConnectFinder(
  connections: DistanceBetweenPointsXY[],
  totalBoxes: number
): DistanceBetweenPointsXY {
  const circuitTracker: Set<number>[] = [];

  for (let connection of connections) {
    let setAddedTo: number | null = null;

    const setsToRemove: number[] = [];

    for (let i = 0; i < circuitTracker.length; i++) {
      const currentSet: Set<number> = circuitTracker[i];

      const hasI: boolean = currentSet.has(connection.x);
      const hasJ: boolean = currentSet.has(connection.y);

      if ((hasI || hasJ) && setAddedTo !== null) {
        const unionOfCircuits = new Set(
          [...circuitTracker[setAddedTo]].concat([...currentSet])
        ); // union of two in first instance
        if (shouldCircuitBreak(unionOfCircuits, totalBoxes)) {
          return connection;
        }

        circuitTracker[setAddedTo] = unionOfCircuits;
        setsToRemove.push(i);
      } else if (hasI) {
        currentSet.add(connection.y);

        setAddedTo = i;
      } else if (hasJ) {
        currentSet.add(connection.x);
        setAddedTo = i;
      }
      if (shouldCircuitBreak(currentSet, totalBoxes)) {
        return connection;
      }
    }

    if (setAddedTo === null) {
      circuitTracker.push(new Set([connection.x, connection.y]));
    }
    if (setsToRemove.length) {
      circuitTracker.reduceRight((_, _elem, index) => {
        if (setsToRemove.includes(index)) {
          circuitTracker.splice(index, 1);
        }
        return null;
      }, null);
    }
  }

  throw "Error: no full combo found";
}

function shouldCircuitBreak(set: Set<number>, total: number) {
  return set.size === total;
}
