export function findAndRemoveAccessiblePaper(
  inputArrayArray: string[][]
): number {
  const gridLength = inputArrayArray[0].length;
  const gridHeight = inputArrayArray.length;

  let prevLineTotals: number[] = Array(gridLength).fill(0); // captures the total contributed by the three neighbours -1,0,+1
  let prevLineFound: number[] = Array(gridLength).fill(Number.NaN); // captures the total for a found @

  let totalAccessible = 0;

  for (let i = 0; i < gridHeight + 1; i++) {
    let prev: number = 0;
    let current: number = 0;
    let next: number = 0;

    for (let j = 0; j < gridLength; j++) {
      if (i === gridHeight) {
        prev = 0;
        current = 0;
        next = 0;
      } else {
        if (j === 0) {
          prev = 0;
          current = +(inputArrayArray[i][j] === "@"); // only need to check self at start
          next = +(inputArrayArray[i][j + 1] === "@"); // always check next
        } else if (j === gridLength - 1) {
          next = 0;
        } else {
          next = +(inputArrayArray[i][j + 1] === "@"); // always check next
        }
      }

      const sum: number = prev + current + next;
      const prevItemFound: number = prevLineFound[j];

      if (prevItemFound >= 0 && prevItemFound + sum < 4) {
        inputArrayArray[i - 1][j] = ".";
        totalAccessible++;
      }

      if (current) {
        prevLineFound[j] = prevLineTotals[j] + prev + next;
      } else {
        prevLineFound[j] = Number.NaN;
      }

      prevLineTotals[j] = sum;

      prev = current;
      current = next;
    }
  }

  return totalAccessible;
}
