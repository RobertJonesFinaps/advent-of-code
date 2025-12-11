import { MachineLightsConfig } from "../models";
import { parseData } from "./parse-data";

const input = `[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}
[...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {7,5,12,7,2}
[.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {10,11,11,5,10,5}`;

describe("parseData", () => {
  it("parses the input string into the machine config format", () => {
    const expected: MachineLightsConfig[] = [
      { target: 6, operations: [1, 5, 2, 3, 10, 12], space: 16 },
      { target: 2, operations: [23, 6, 17, 28, 15], space: 32 },
      { target: 29, operations: [62, 38, 59, 24], space: 64 },
    ];
    expect(parseData(input)).toEqual(expected);
  });
});
