import { generalisedLargestJoltageFinder } from "./generalised-largest-joltage-finder";

describe("generalisedLargestJoltageFinder", () => {
  it.each<{ input: string; expected: number }>([
    { input: "987654321111111", expected: 98 },
    { input: "811111111111119", expected: 89 },
    { input: "234234234234278", expected: 78 },
    { input: "818181911112111", expected: 92 },
  ])(
    "finds $expected when input is: $input and length is 2",
    ({ input, expected }) => {
      expect(generalisedLargestJoltageFinder(input, 2)).toEqual(expected);
    }
  );
  it.each<{ input: string; expected: number }>([
    { input: "987654321111111", expected: 987 },
    { input: "811111111111119", expected: 819 },
    { input: "234234234234278", expected: 478 },
    { input: "818181911112111", expected: 921 },
  ])(
    "finds $expected when input is: $input and length is 3",
    ({ input, expected }) => {
      expect(generalisedLargestJoltageFinder(input, 3)).toEqual(expected);
    }
  );
  it.each<{ input: string; expected: number }>([
    { input: "987654321111111", expected: 9876 },
    { input: "811111111111119", expected: 8119 },
    { input: "234234234234278", expected: 4478 },
    { input: "818181911112111", expected: 9211 },
  ])(
    "finds $expected when input is: $input and length is 4",
    ({ input, expected }) => {
      expect(generalisedLargestJoltageFinder(input, 4)).toEqual(expected);
    }
  );
  it.each<{ input: string; expected: number }>([
    { input: "987654321111111", expected: 987654321111 },
    { input: "811111111111119", expected: 811111111119 },
    { input: "234234234234278", expected: 434234234278 },
    { input: "818181911112111", expected: 888911112111 },
  ])(
    "finds $expected when input is: $input and length is 12",
    ({ input, expected }) => {
      expect(generalisedLargestJoltageFinder(input, 12)).toEqual(expected);
    }
  );
});
