import { euclideanDistance } from "../../../utils/euclidean-distance";
import { DistanceBetweenPointsXY } from "../models";

export function calculateDistanceBetweenEveryPoint(
  points: number[][]
): DistanceBetweenPointsXY[] {
  const accum: DistanceBetweenPointsXY[] = [];
  let i = 0;
  while (i < points.length - 1) {
    let j = i + 1;
    while (j < points.length) {
      accum.push({
        x: i,
        y: j,
        distance: euclideanDistance(points[i], points[j], 3),
      });

      j++;
    }
    i++;
  }

  return accum.sort((a, b) => a.distance - b.distance);
}
