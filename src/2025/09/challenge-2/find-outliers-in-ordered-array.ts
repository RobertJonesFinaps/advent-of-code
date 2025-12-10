import { getDistanceBetweenGridPoints } from "./get-distance-between-points";

/**
 * finds the top two outliers (by distance) in an array of coordinates
 *
 * Idea is that most neighbours are close to one another, while unusual values
 * will show a spike in distance away from their neighbours
 * @param coords array of coordinates
 * @returns array of ids
 */
export function findOutlierIdsInOrderedArray(coords: number[][]): number[] {
  const distanceBetweenKNN = getDistanceBetweenKNearestNeighbours(coords, 5);

  let maxDistance = 0;
  let secondMax = 0;
  let locations = [0, 0];
  for (let i = 0; i < coords.length; i++) {
    const currentDistance = distanceBetweenKNN[i];
    if (currentDistance > maxDistance) {
      secondMax = maxDistance;
      locations[1] = locations[0];
      locations[0] = i;
      maxDistance = currentDistance;
    } else if (currentDistance > secondMax) {
      secondMax = currentDistance;
      locations[1] = i;
    }
  }

  return locations;
}

function getDistanceBetweenKNearestNeighbours(
  coords: number[][],
  k: number
): number[] {
  const distanceBetweenKNN: number[] = [];
  const startingIndexDeltaNeighboursBelow = -Math.floor(k / 2);
  const endingIndexDeltaNeighboursAbove = Math.floor(k / 2);

  for (let i = 0; i < coords.length; i++) {
    let summedDistance = 0;
    for (
      let j = startingIndexDeltaNeighboursBelow;
      j < endingIndexDeltaNeighboursAbove + 1;
      j++
    ) {
      if (j === 0) {
        continue;
      }
      if (i + j < 0) {
        summedDistance += getDistanceBetweenGridPoints(
          coords[i],
          coords[coords.length + j]
        );
      } else {
        summedDistance += getDistanceBetweenGridPoints(
          coords[i],
          coords[(i + j) % coords.length]
        );
      }
    }
    distanceBetweenKNN.push(summedDistance);
  }
  return distanceBetweenKNN;
}
