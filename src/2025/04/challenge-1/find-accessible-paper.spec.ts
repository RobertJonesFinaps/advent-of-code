import { findAccessiblePaper } from "./find-accessible-paper";

describe("findAccessiblePaper", () => {
  it("finds 13 in test string", () => {
    const testString =
      "..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@."
        .split("\n")
        .map((line) => line.split(""));

    expect(findAccessiblePaper(testString)).toEqual(13);
  });
});
