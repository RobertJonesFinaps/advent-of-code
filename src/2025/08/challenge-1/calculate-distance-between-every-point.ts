import { euclideanDistance } from "../../../utils/euclidean-distance";

export function calculateDistanceBetweenEveryPoint(
  points: number[][]
): number[][] {
  const accum = [];
  let i = 0;
  while (i < points.length - 1) {
    let j = 1;
    const indexAccum = [];
    while (i + j < points.length) {
      indexAccum.push(euclideanDistance(points[i], points[i + j], 3));
      j++;
    }
    accum.push(indexAccum);
    i++;
  }

  return accum;
}
