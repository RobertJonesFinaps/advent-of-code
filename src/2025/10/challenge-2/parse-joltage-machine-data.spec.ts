import { MachineJoltageConfig, MachineLightsConfig } from "../models";
import { parseJoltageMachineData } from "./parse-joltage-machine-data";

const input = `[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}
[...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {7,5,12,7,2}
[.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {10,11,11,5,10,5}`;

describe("parseJoltageMachineData", () => {
  it("parses the input string into the machine config format", () => {
    const expected: MachineJoltageConfig[] = [
      {
        target: [3, 5, 4, 7],
        operations: [
          [0, 0, 0, 1],
          [0, 1, 0, 1],
          [0, 0, 1, 0],
          [0, 0, 1, 1],
          [1, 0, 1, 0],
          [1, 1, 0, 0],
        ],
      },
      {
        target: [7, 5, 12, 7, 2],
        operations: [
          [1, 0, 1, 1, 1],
          [0, 0, 1, 1, 0],
          [1, 0, 0, 0, 1],
          [1, 1, 1, 0, 0],
          [0, 1, 1, 1, 1],
        ],
      },
      {
        target: [10, 11, 11, 5, 10, 5],
        operations: [
          [1, 1, 1, 1, 1, 0],
          [1, 0, 0, 1, 1, 0],
          [1, 1, 1, 0, 1, 1],
          [0, 1, 1, 0, 0, 0],
        ],
      },
    ];
    expect(parseJoltageMachineData(input)).toEqual(expected);
  });
});
