import { DistanceBetweenPointsXY } from "../models";
import { lastCircuitToConnectFinder } from "./last-circuit-to-connect-finder";

describe("lastCircuitToConnectFinder", () => {
  it("gives the input which completes the circuit in double case", () => {
    const input: DistanceBetweenPointsXY[] = [
      {
        x: 0,
        y: 1,
        distance: expect.any(Number),
      },
      {
        x: 1,
        y: 2,
        distance: expect.any(Number),
      },
    ];
    expect(lastCircuitToConnectFinder(input, 3)).toEqual(input[1]);
  });
});
