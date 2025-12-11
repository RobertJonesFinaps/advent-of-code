import { MachineJoltageConfig } from "../models";
import { stateMachineSlow } from "./state-machine-slow";

describe("stateMachineSlow", () => {
  it.each<{ input: MachineJoltageConfig; expected: number }>([
    {
      input: {
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
      expected: 10,
    },
    {
      input: {
        target: [7, 5, 12, 7, 2],
        operations: [
          [1, 0, 1, 1, 1],
          [0, 0, 1, 1, 0],
          [1, 0, 0, 0, 1],
          [1, 1, 1, 0, 0],
          [0, 1, 1, 1, 1],
        ],
      },
      expected: 12,
    },
    {
      input: {
        target: [10, 11, 11, 5, 10, 5],
        operations: [
          [1, 1, 1, 1, 1, 0],
          [1, 0, 0, 1, 1, 0],
          [1, 1, 1, 0, 1, 1],
          [0, 1, 1, 0, 0, 0],
        ],
      },
      expected: 11,
    },
  ])(
    "calculates the number of iterations to be $expected when $input.target",
    ({ input, expected }) => {
      expect(stateMachineSlow(input)).toEqual(expected);
    }
  );
});
