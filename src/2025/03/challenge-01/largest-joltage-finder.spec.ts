import { largestJoltageFinder } from "./largest-joltage-finder";

describe("largestJoltageFinder", () => {
  it.each<{ input: string; expected: number }>([
    { input: "987654321111111", expected: 98 },
    { input: "811111111111119", expected: 89 },
    { input: "234234234234278", expected: 78 },
    { input: "818181911112111", expected: 92 },
  ])("finds $expected when input is: $input", ({ input, expected }) => {
    expect(largestJoltageFinder(input)).toEqual(expected);
  });
});
