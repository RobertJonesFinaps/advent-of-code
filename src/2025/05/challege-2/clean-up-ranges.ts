import { Range } from "./models";

export function cleanUpRanges(rangesInput: string[]): Range[] {
  const ranges: Range[] = [];

  for (let rangeString of rangesInput) {
    const [startString, endString] = rangeString.split("-");

    const start = Number.parseInt(startString);
    const end = Number.parseInt(endString);

    ranges.push({ start, end });
  }
  return ranges.sort((a, b) => a.start - b.start);
}
