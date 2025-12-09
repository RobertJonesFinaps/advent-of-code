export function ribbonLengthMeasurer(dimensions: number[]): number {
  let perimeterOfSmallestSide: number = Number.POSITIVE_INFINITY;
  let area: number = 0;
  for (let ii = 0; ii < dimensions.length; ii++) {
    for (let jj = ii + 1; jj < dimensions.length; jj++) {
      const perimeter: number = 2 * (dimensions[ii] + dimensions[jj]);
      if (perimeterOfSmallestSide > perimeter) {
        perimeterOfSmallestSide = perimeter;
      }
    }
  }
  return (
    perimeterOfSmallestSide +
    dimensions.reduce((volume, dimension) => volume * dimension, 1)
  );
}
