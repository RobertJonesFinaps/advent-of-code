import { euclideanDistance } from "../../../utils/euclidean-distance";
import { DistanceBetweenPointsXY } from "../models";

export function trackShortestConnections(
  points: number[][],
  stoppingPoint: number
): DistanceBetweenPointsXY[] {
  const shortestDistanceIndices: DistanceBetweenPointsXY[] = [];

  /** This is a shortcut to the largest distance in the shortestDistanceIndices arra
   * That is, this is the one most likely to be removed */
  let currentLongestShortestConnection = 0;

  let i = 0;
  while (i < points.length - 1) {
    let j = i + 1;

    while (j < points.length) {
      const distance = euclideanDistance(points[i], points[j], 3);

      if (shortestDistanceIndices.length < stoppingPoint) {
        shortestDistanceIndices.push({ x: i, y: j, distance });
        shortestDistanceIndices.sort((a, b) => b.distance - a.distance);
        if (currentLongestShortestConnection < distance) {
          currentLongestShortestConnection = distance;
        }
      } else if (distance < currentLongestShortestConnection) {
        // belongs in array
        shortestDistanceIndices.push({ x: i, y: j, distance });
        shortestDistanceIndices.sort((a, b) => a.distance - b.distance).pop();
        currentLongestShortestConnection =
          shortestDistanceIndices[stoppingPoint - 1].distance;
      }

      j++;
    }

    i++;
  }

  return shortestDistanceIndices;
}
