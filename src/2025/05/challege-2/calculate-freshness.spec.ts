import { calculateFreshness } from "./calculate-freshness";

describe("calculateFreshness", () => {
  it("calculates a total", () => {
    const inputArray = ["3-5", "10-14", "16-20", "12-18"];

    expect(calculateFreshness(inputArray)).toEqual(14);
  });
  it("calculates a total", () => {
    const inputArray = ["3-20", "10-14", "16-20", "12-18"];

    expect(calculateFreshness(inputArray)).toEqual(18);
  });
  it("calculates a total", () => {
    const inputArray = ["3-5", "10-14", "16-20", "21-30"];

    expect(calculateFreshness(inputArray)).toEqual(23);
  });
});
