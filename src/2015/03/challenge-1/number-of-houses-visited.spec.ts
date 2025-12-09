import { numberOfHousesVisited } from "./number-of-houses-visited";

describe("numberOfHousesVisited", () => {
  it.each<{ input: string; expected: number }>([
    { input: ">", expected: 2 },
    { input: "^>v<", expected: 4 },
    { input: "^v^v^v^v^v", expected: 2 },
  ])("area for $input is $expected", ({ input, expected }) => {
    expect(numberOfHousesVisited(input)).toEqual(expected);
  });
});
