import { readDataFromDom } from "utils/read-data-from-dom";
import { ribbonLengthMeasurer } from "./ribbon-length-mesaurer";

function parseData(): number[][] {
  const data = readDataFromDom();

  return data
    .split("\n")
    .filter(Boolean)
    .map((rowAsString: string) =>
      rowAsString.split("x").map((num) => parseInt(num))
    );
}

function sumOfRibbonLengths(data: number[][]): number {
  return data
    .flatMap((present: number[]) => ribbonLengthMeasurer(present))
    .reduce((total: number, ribbonLength: number) => total + ribbonLength, 0);
}

const data: number[][] = parseData();

console.log("sum of areas:", sumOfRibbonLengths(data));
