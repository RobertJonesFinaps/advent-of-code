/**
 * /**
 * Calculate the square of the distance between two points
 * it is up to the dev to supply the expected number of dimensions to calculate
 * @param pointA an array of the form (x,y,z,...)
 * @param pointB an array of the form (x,y,z,...)
 * @param numberOfDimensions the number of dimensions to use in distance calculation
 */
export function euclideanDistance(
  pointA: number[],
  pointB: number[],
  numberOfDimensions: number
) {
  let distance = 0;
  for (let i = 0; i < numberOfDimensions; i++) {
    distance += Math.pow(pointB[i] - pointA[i], 2);
  }
  return distance;
}
