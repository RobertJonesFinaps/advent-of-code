import { rectangleAreaFromCoords } from "./rectangle-area-from-coords";

describe("rectangleAreaFromCoords", () => {
  it.each<{ pointA: number[]; pointB: number[]; expected: number }>([
    { pointA: [0, 0], pointB: [0, 0], expected: 1 },
    { pointA: [0, 0], pointB: [1, 1], expected: 4 },
    { pointA: [0, 1], pointB: [1, 0], expected: 4 },
    { pointA: [1, 0], pointB: [0, 1], expected: 4 },
    { pointA: [1, 0], pointB: [0, 0], expected: 2 },
    { pointA: [1, 1], pointB: [3, 3], expected: 9 },
    { pointA: [14996, 82873], pointB: [0, 0], expected: 1242861378 },
  ])(
    "calculates the area of rectangle from opposite corners",
    ({ pointA, pointB, expected }) => {
      expect(rectangleAreaFromCoords(pointA, pointB)).toEqual(expected);
    }
  );
});
