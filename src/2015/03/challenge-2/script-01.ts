import { readDataFromDom } from "utils/read-data-from-dom";
import { numberOfHousesVisited } from "./number-of-houses-visited";

function parseData(): string {
  const data = readDataFromDom();

  return data;
}

const data: string = parseData();

console.log("sum of areas:", numberOfHousesVisited(data));
