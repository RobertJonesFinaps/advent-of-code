/**
 * get the manhattan distance
 * @param pointA x,y
 * @param pointB x,y
 * @returns manhattan distance
 */
export function getDistanceBetweenGridPoints(
  pointA: number[],
  pointB: number[]
): number {
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}
