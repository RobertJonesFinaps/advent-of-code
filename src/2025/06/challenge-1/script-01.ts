import { performanceCheck } from "utils/performance-check";
import { readDataFromDom } from "utils/read-data-from-dom";


/**
 * squid maths is very vertical separated by spaces
 * plan is just regex character strings and convert to numbers
 * @param data the full string from the input
 * @returns the total sum
 */
function parseProblem(data: string) {
  const rows: string[] = data.split("\n");

  const numberOfRows: number = rows.length;
  const operationsRow: string = rows[numberOfRows - 2]; // guessing that last is empty

  const regExp: RegExp = new RegExp(/\S+/g);

  const operations = operationsRow.match(regExp);
  if (!operations) {
    return;
  }
  const numberOfColumns: number = operations.length;
  const reducerArray: number[] = operations.map((operation: string) =>
    operation === "*" ? 1 : 0
  );
  for (let i = 0; i < numberOfColumns; i++) {
    
    for (let rowIndex = numberOfRows - 3; rowIndex >= 0; rowIndex--) {
      const currentRow: string[] | null = rows[rowIndex].match(regExp);

      if (!currentRow) {
        return;
      }
      if (operations[i] === "*") {
        reducerArray[i] *= parseInt(currentRow[i]);
      } else {
        reducerArray[i] += parseInt(currentRow[i]);
      }
    }
  }
  return reducerArray.reduce((total, current) => total + current, 0);
}

const dataString = readDataFromDom();
console.log("solve everything:", parseProblem(dataString));

console.log(
  "Execution time in ms:",
  performanceCheck(() => parseProblem(dataString))
);
