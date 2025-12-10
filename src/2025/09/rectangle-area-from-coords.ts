export function rectangleAreaFromCoords(
  pointA: number[],
  pointB: number[]
): number {
  return (
    (Math.abs(pointB[0] - pointA[0]) + 1) *
    (Math.abs(pointB[1] - pointA[1]) + 1)
  );
}
