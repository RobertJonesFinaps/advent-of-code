import { performanceCheck } from "utils/performance-check";
import { readDataFromDom } from "utils/read-data-from-dom";

interface Range {
  start: number;
  end: number;
}

function getData() {
  const inputString: string = readDataFromDom();
  const parsedData: string[] = inputString.split("\n").slice(0, -1);
  const splitPosition: number = parsedData.findIndex((data) => data === "");
  const rangesInput = parsedData.slice(0, splitPosition);
  const ingredientIds = parsedData.slice(splitPosition + 1);

  return { rangesInput, ingredientIds };
}
function getRangeOverlap(ranges: Range[], testRange: Range): Range[] {
  return ranges.filter((range: Range) => {
    const clearAbove = range.end < testRange.start;
    const clearBelow = range.start > testRange.end;

    return !(clearAbove || clearBelow);
  });
}

function cleanUpRanges(rangesInput: string[]) {
  const ranges: Range[] = [];

  for (let rangeString of rangesInput) {
    const [startString, endString] = rangeString.split("-");

    const start = Number.parseInt(startString);
    const end = Number.parseInt(endString);

    const overlapRanges: Range[] = getRangeOverlap(ranges, { start, end });

    if (overlapRanges.length) {
      overlapRanges.forEach((range: Range) => {
        range.start = Math.min(range.start, start);
        range.end = Math.max(range.end, end);
      });
      overlapRanges.sort((a, b) => a.start - b.start);
    } else {
      ranges.push({ start, end });
      continue;
    }
  }
  return ranges.sort((a, b) => a.start - b.start);
}

function isFresh(ingredientId: number, ranges: Range[]) {
  for (let range of ranges) {
    if (ingredientId < range.start) {
      continue;
    }

    if (ingredientId <= range.end) {
      return true;
    }
  }
  return false;
}

const { rangesInput, ingredientIds } = getData();

function calculate(rangesInput: string[], ingredientIds: string[]) {
  let total = 0;
  for (let ingredientId of ingredientIds) {
    if (isFresh(parseInt(ingredientId), cleanUpRanges(rangesInput))) {
      total++;
    }
  }
  return total;
}
console.log("totalfresh is", calculate(rangesInput, ingredientIds));

console.log(
  "Execution time in ms:",
  performanceCheck(() => calculate(rangesInput, ingredientIds))
);
