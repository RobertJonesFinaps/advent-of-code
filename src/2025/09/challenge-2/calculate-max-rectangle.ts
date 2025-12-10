import { rectangleAreaFromCoords } from "../rectangle-area-from-coords";

/**
 * Basic idea here is that the outliers must form the basis of the max area rectangles.
 * the shape formed is effectively a semi circle. so the the closest point to pi/4 will give
 * max area. As the outliers lie on an internal spike. By the rules they will contribute
 * one corner.
 *
 * Implementation is done by taking the outliers, finding the points vertically below/above
 * and then finding the point horizontal to those points which stay in bounds.
 *
 * @param outlierIds points from which must form the corner of the rectangle
 * @param coords an array of points
 * @returns the area of the biggest rectangle formed by one of the outliers and a point in the coords
 */
export function calculateMaxRectangle(
  outlierIds: number[],
  coords: number[][]
): number {
  let upperOutlier: number[];
  let lowerOutlier: number[];

  if (coords[outlierIds[0]][1] > coords[outlierIds[1]][1]) {
    upperOutlier = coords[outlierIds[0]];
    lowerOutlier = coords[outlierIds[1]];
  } else {
    upperOutlier = coords[outlierIds[1]];
    lowerOutlier = coords[outlierIds[0]];
  }

  const bottomLimit: number = findCoordVerticallyBelow(lowerOutlier, coords);
  const topLimit: number = findCoordVerticallyAbove(upperOutlier, coords);

  const bottomCornerIndex: number = findCoordHoriztonalFromPoint(
    bottomLimit,
    coords
  );
  const topCornerIndex: number = findCoordHoriztonalFromPoint(topLimit, coords);

  return Math.max(
    rectangleAreaFromCoords(lowerOutlier, coords[bottomCornerIndex]),
    rectangleAreaFromCoords(upperOutlier, coords[topCornerIndex])
  );
}

/**
 * finds coordinate above point and to the right
 * @param point x,y
 * @param coords full list
 * @returns index of first coordinate above and right
 */
function findCoordVerticallyAbove(point: number[], coords: number[][]): number {
  // data is wound anticlockwise

  for (let i = 0; i < coords.length; i++) {
    if (coords[i][1] > point[1] && coords[i][0] < point[0]) {
      //above and to right
      return i;
    }
  }
  throw "Not found";
}

/**
 * finds coordinate below point and to the left
 * @param point x,y
 * @param coords full list
 * @returns index of first coordinate below and left
 */
function findCoordVerticallyBelow(point: number[], coords: number[][]): number {
  // data is wound anticlockwise
  for (let i = 0; i < coords.length; i++) {
    if (coords[i][1] < point[1] && coords[i][0] > point[0]) {
      // below and right
      return (i - 1) % coords.length;
    }
  }
  throw "Not found";
}

function findCoordHoriztonalFromPoint(
  pointId: number,
  coords: number[][]
): number {
  // AKA find first y smaller than supplied point
  for (let i = 0; i < coords.length; i++) {
    let currentIndex: number = (i + pointId + 2) % coords.length;

    if (coords[currentIndex][1] <= coords[pointId][1]) {
      return currentIndex;
    }
  }
  throw "Not found";
}
