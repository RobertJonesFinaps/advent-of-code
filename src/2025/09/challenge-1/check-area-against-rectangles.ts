import { Quadrants } from "../models";
import { rectangleAreaFromCoords } from "../rectangle-area-from-coords";

export function checkAreaAgainstRectangles(quadrants: Quadrants) {
  const areaFromTopLeftToBottomRight = checkTwoQuadrants(
    quadrants.topLeft,
    quadrants.bottomRight
  );
  const areaFromTopRightToBottomLeft = checkTwoQuadrants(
    quadrants.topRight,
    quadrants.bottomLeft
  );
  // const areaTop = checkTwoQuadrants(quadrants.topRight, quadrants.topLeft);
  // const areaBottom = checkTwoQuadrants(
  //   quadrants.bottomRight,
  //   quadrants.bottomLeft
  // );
  // const areaLeft = checkTwoQuadrants(quadrants.topLeft, quadrants.bottomLeft);
  // const areaRight = checkTwoQuadrants(
  //   quadrants.topRight,
  //   quadrants.bottomRight
  // );

  return Math.max(
    areaFromTopLeftToBottomRight,
    areaFromTopRightToBottomLeft,
    // areaTop,
    // areaBottom,
    // areaLeft,
    // areaRight
  );
}

function checkTwoQuadrants(
  quadrantOne: number[][],
  quadrantTwo: number[][]
): number {
  let maxArea = 0;
  for (const point1 of quadrantOne) {
    for (const point2 of quadrantTwo) {
      const area = rectangleAreaFromCoords(point1, point2);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }

  return maxArea;
}
