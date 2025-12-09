import { presentWrappingPaperCalculator } from "./present-wrapping-paper-calculator";

describe("presentWrappingPaperCalculator", () => {
  it.each<{ input: number[]; expected: number }>([
    { input: [1, 1, 1], expected: 7 },
    { input: [2,3,4], expected: 58 },
    { input: [1, 1, 10], expected: 43 },
  ])("area for $input is $expected", ({ input, expected }) => {
    expect(presentWrappingPaperCalculator(input)).toEqual(expected);
  });
});
