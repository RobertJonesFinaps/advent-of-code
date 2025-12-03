import { calculateTotalJoltage } from "./calculate-total-joltage";

describe("calculateTotalJoltage", () => {
  it("calculates the total", () => {
    const inputArray = [
      "987654321111111",
      "811111111111119",
      "234234234234278",
      "818181911112111",
    ];
    const expectedOutput = 357;

    expect(calculateTotalJoltage(inputArray)).toEqual(expectedOutput);
  });
});
