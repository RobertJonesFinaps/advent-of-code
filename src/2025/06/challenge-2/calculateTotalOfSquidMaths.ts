
/**
 * squid maths is even more vertical
 * plan is just regex the operator string as they are always at the leftmost index
 * 
 * Another solution solved at a lag. with the solution of i-1 being solved on iteration i
 * 
 * @param data the full string from the input
 * @returns the total sum
 */
export function calculateTotalOfSquidMaths(data: string) {
  const rows: string[] = data.split("\n");

  const operations: RegExpStringIterator<RegExpExecArray> = getOperations(rows);

  let runningTotal = 0;
  let prevOperation: string | null = null;
  let prevIndex: number | null = null;
  // plan is update with a lag
  for (const operationMatch of operations) {
    const operation: string = operationMatch[0];
    const leftAlignedIndex: number = operationMatch.index;

    if (prevOperation !== null && prevIndex !== null) {
      const numbersInColumn: string[] = numbersAsDefinedByColumns(
        leftAlignedIndex,
        prevIndex,
        rows
      );

      runningTotal += calculateColumnTotal(numbersInColumn, prevOperation);
    }
    prevOperation = operation;
    prevIndex = leftAlignedIndex;
  }
  if (!prevIndex) {
    return runningTotal;
  }

  const lastIndexOfLongestRow = longestRowLength(rows) + 1;

  const lastColumn = numbersAsDefinedByColumns(
    lastIndexOfLongestRow,
    prevIndex,
    rows
  );

  if (!prevOperation) {
    return runningTotal;
  }

  runningTotal += calculateColumnTotal(lastColumn, prevOperation);

  return runningTotal;
}

function getOperations(rows: string[]): RegExpStringIterator<RegExpExecArray> {
  const numberOfRows: number = rows.length;
  const operationsRow: string = rows[numberOfRows - 2]; // guessing that last is empty

  const regExp: RegExp = new RegExp(/\S+/g);
  return operationsRow.matchAll(regExp);
}

function longestRowLength(rows: string[]): number {
  return rows.reduce((max, row) => Math.max(max, row.length), 0);
}

function calculateColumnTotal(column: string[], operation: string) {
  if (operation === "*") {
    return column.reduce((total, number) => total * parseInt(number.trim()), 1);
  } else {
    return column.reduce((total, number) => total + parseInt(number.trim()), 0);
  }
}

function numbersAsDefinedByColumns(
  index: number,
  prevIndex: number,
  rows: string[]
): string[] {
  const numbersInColumn: string[] = Array(index - prevIndex - 1).fill("");

  for (let rowIndex = 0; rowIndex < rows.length - 2; rowIndex++) {
    const currentRow: string = rows[rowIndex];

    /**This is the region where the characters live */
    const areaOfDigits = currentRow.slice(prevIndex, index - 1);

    // This gathers them into a group
    areaOfDigits
      .split("")
      .forEach((character, i) => (numbersInColumn[i] += character));
  }

  return numbersInColumn;
}
