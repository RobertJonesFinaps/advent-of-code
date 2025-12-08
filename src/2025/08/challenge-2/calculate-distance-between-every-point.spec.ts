import { DistanceBetweenPointsXY } from "../models";
import { calculateDistanceBetweenEveryPoint } from "./calculate-distance-between-every-point";

describe("calculateDistanceBetweenEveryPoint", () => {
  it("returns the distance between two points", () => {
    const input = [
      [0, 0, 0],
      [1, 1, 1],
    ];
    const result = calculateDistanceBetweenEveryPoint(input);
    const expected: DistanceBetweenPointsXY[] = [
      {
        x: 0,
        y: 1,
        distance: 3,
      },
    ];
    expect(result).toEqual(expected);
  });
  it("returns the distances between three points and sorts ascending", () => {
    const input = [
      [0, 0, 0],
      [1, 1, 1],
      [-1, -1, -1],
    ];
    const result = calculateDistanceBetweenEveryPoint(input);
    const expected: DistanceBetweenPointsXY[] = [
      {
        x: 0,
        y: 1,
        distance: 3,
      },
      {
        x: 0,
        y: 2,
        distance: 3,
      },
      {
        x: 1,
        y: 2,
        distance: 12,
      },
    ];
    expect(result).toEqual(expected);
  });
});
