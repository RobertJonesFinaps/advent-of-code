import { MachineLightsConfig } from "../models";
import { stateMachine } from "./state-machine";

describe("stateMachine", () => {
  it.each<{ input: MachineLightsConfig; expected: number }>([
    {
      input: { target: 6, operations: [1, 5, 2, 3, 10, 12], space: 16 },
      expected: 2,
    },
    {
      input: { target: 2, operations: [23, 6, 17, 28, 15], space: 32 },
      expected: 3,
    },
    {
      input: { target: 29, operations: [62, 38, 59, 24], space: 64 },
      expected: 2,
    },
  ])(
    "calculates the number of iterations to be $expected when $input.target",
    ({ input, expected }) => {
      expect(stateMachine(input)).toEqual(expected);
    }
  );
});
