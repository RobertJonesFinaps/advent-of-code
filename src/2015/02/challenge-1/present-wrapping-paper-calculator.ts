export function presentWrappingPaperCalculator(dimensions: number[]): number {
  let areaOfSmallestSide: number = Number.POSITIVE_INFINITY;
  let area: number = 0;
  for (let ii = 0; ii < dimensions.length; ii++) {
    for (let jj = ii + 1; jj < dimensions.length; jj++) {
      const areaOfSide: number = dimensions[ii] * dimensions[jj];
      if (areaOfSmallestSide > areaOfSide) {
        areaOfSmallestSide = areaOfSide;
      }
      area += 2 * dimensions[ii] * dimensions[jj];
    }
  }
  return area + areaOfSmallestSide;
}
