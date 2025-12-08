import { euclideanDistance } from "./euclidean-distance";

describe("euclideanDistance", () => {
  it.each<{
    pointA: number[];
    pointB: number[];
    dimensions: number;
    expected: number;
  }>([
    { pointA: [0], pointB: [2], dimensions: 1, expected: 4 },
    { pointA: [0, 0], pointB: [1, 1], dimensions: 2, expected: 2 },
    { pointA: [0, 0, 0], pointB: [1, 1, 1], dimensions: 3, expected: 3 },
    { pointA: [0, 0, 0], pointB: [-1, 1, 1], dimensions: 3, expected: 3 },
    { pointA: [0, 0, 0], pointB: [1, -1, 1], dimensions: 3, expected: 3 },
    { pointA: [0, 0, 0], pointB: [1, 1, -1], dimensions: 3, expected: 3 },
    { pointA: [-1, -1, -1], pointB: [1, 1, 1], dimensions: 3, expected: 12 },
  ])(
    "calculates $pointA to $pointB to be $expected",
    ({ pointA, pointB, dimensions, expected }) => {
      expect(euclideanDistance(pointA, pointB, dimensions)).toEqual(expected);
    }
  );
});
