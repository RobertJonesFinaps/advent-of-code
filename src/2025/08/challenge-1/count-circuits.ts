import { DistanceBetweenPointsXY } from "../models";

export function countCircuits(
  shortestConnections: DistanceBetweenPointsXY[]
): number[] {
  const circuitTracker: Set<number>[] = [];

  for (let connection of shortestConnections) {
    let setAddedTo: number | null = null;

    const setsToRemove: number[] = [];

    for (let i = 0; i < circuitTracker.length; i++) {
      const currentSet: Set<number> = circuitTracker[i];

      const hasI: boolean = currentSet.has(connection.x);
      const hasJ: boolean = currentSet.has(connection.y);

      if ((hasI || hasJ) && setAddedTo !== null) {
        circuitTracker[setAddedTo] = new Set(
          [...circuitTracker[setAddedTo]].concat([...currentSet])
        ); // union of two in first instance
        setsToRemove.push(i);
      } else if (hasI) {
        currentSet.add(connection.y);
        setAddedTo = i;
      } else if (hasJ) {
        currentSet.add(connection.x);
        setAddedTo = i;
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

  return circuitTracker.map((circuits: Set<number>) => circuits.size);
}
