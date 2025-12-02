import { safeRotationCounter } from "./safe-rotation-counter";

describe("safeRotationCounter", () => {
  it("counts 3 stops with test array", () => {
    const array = [
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
    ];

    expect(safeRotationCounter(array)).toEqual(3);
  });
});
