import { ribbonLengthMeasurer } from "./ribbon-length-mesaurer";

describe("ribbonLengthMeasurer", () => {
  it.each<{ input: number[]; expected: number }>([
    { input: [1, 1, 1], expected: 5 },
    { input: [2, 3, 4], expected: 34 },
    { input: [1, 1, 10], expected: 14 },
  ])("length of bow needed for $input is $expected", ({ input, expected }) => {
    expect(ribbonLengthMeasurer(input)).toEqual(expected);
  });
});
