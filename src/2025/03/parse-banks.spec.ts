import { parseBanks } from "./parse-banks";

describe("parseBanks", () => {
  it("splits the string into an array of strings", () => {
    const inputString =
      "987654321111111\n811111111111119\n234234234234278\n818181911112111\n";

    const result: string[] = parseBanks(inputString);

    expect(result).toEqual([
      "987654321111111",
      "811111111111119",
      "234234234234278",
      "818181911112111",
    ]);
  });
});
