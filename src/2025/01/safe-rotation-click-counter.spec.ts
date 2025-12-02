import { safeRotationClickCounter } from "./safe-rotation-click-counter";

describe("safeRotationClickCounter", () => {
  it("counts 6 passes in test array", () => {
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

    expect(safeRotationClickCounter(array)).toEqual(6);
  });
});
