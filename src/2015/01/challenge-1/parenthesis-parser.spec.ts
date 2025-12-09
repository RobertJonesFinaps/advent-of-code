import { parenthesisParser } from "./parenthesis-parser";

describe("parenthesisParser", () => {
  it.each<{ input: string; expected: number }>([
    { input: "(", expected: 1 },
    { input: "()", expected: 0 },
    { input: "))(((((", expected: 3 },
  ])("moves to floor $expected when input is $input", ({ input, expected }) => {
    expect(parenthesisParser(input)).toEqual(expected);
  });
});
