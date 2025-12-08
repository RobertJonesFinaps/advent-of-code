import { countCircuits } from "./count-circuits";
import { DistanceBetweenPointsXY } from "../models";

describe("countCircuits", () => {
  it("adds a connection to a set and returns the number of junctions", () => {
    const input: DistanceBetweenPointsXY = {
      x: 0,
      y: 19,
      distance: expect.any(Number),
    };
    expect(countCircuits([input])).toEqual([2]);
  });
  it("adds a connection to a set and returns the number of junctions", () => {
    const input: DistanceBetweenPointsXY[] = [
      {
        x: 0,
        y: 19,
        distance: expect.any(Number),
      },
      {
        x: 1,
        y: 2,
        distance: expect.any(Number),
      },
    ];
    expect(countCircuits(input)).toEqual([2, 2]);
  });
  it("handles overlap by merging circuits", () => {
    const input: DistanceBetweenPointsXY[] = [
      {
        x: 0,
        y: 19,
        distance: expect.any(Number),
      },
      {
        x: 0,
        y: 2,
        distance: expect.any(Number),
      },
    ];
    expect(countCircuits(input)).toEqual([3]);
  });
  it("handles both overlap and separate by merging circuits", () => {
    const input: DistanceBetweenPointsXY[] = [
      {
        x: 0,
        y: 19,
        distance: expect.any(Number),
      },
      {
        x: 0,
        y: 2,
        distance: expect.any(Number),
      },
      {
        x: 1,
        y: 3,
        distance: expect.any(Number),
      },
    ];
    expect(countCircuits(input)).toEqual([3, 2]);
  });
});
