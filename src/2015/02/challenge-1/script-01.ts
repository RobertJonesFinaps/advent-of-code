import { readDataFromDom } from "utils/read-data-from-dom";
import { presentWrappingPaperCalculator } from "./present-wrapping-paper-calculator";

function parseData(): number[][] {
  const data = readDataFromDom();

  return data
    .split("\n")
    .filter(Boolean)
    .map((rowAsString: string) =>
      rowAsString.split("x").map((num) => parseInt(num))
    );
}

function sumOfPresentAreas(data: number[][]): number {
  return data
    .flatMap((present: number[]) => presentWrappingPaperCalculator(present))
    .reduce((total: number, currentArea: number) => total + currentArea, 0);
}

const data: number[][] = parseData();

console.log("sum of areas:", sumOfPresentAreas(data));
