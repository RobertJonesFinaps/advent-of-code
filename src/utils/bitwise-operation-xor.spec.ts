import { bitwiseOperationXOR } from "./bitwise-operation-xor";

describe("bitwiseOperationXOR", () => {
  it.each<{ first: number; second: number; expected: number }>([
    { first: 0, second: 0, expected: 0 },
    { first: 0, second: 1, expected: 1 },
    { first: 1, second: 0, expected: 1 },
    { first: 1, second: 1, expected: 0 },
    { first: 7, second: 1, expected: 6 },
    { first: 5, second: 1, expected: 4 },
  ])(
    "returns $expected for $first ^ $second",
    ({ first, second, expected }) => {
      expect(bitwiseOperationXOR(first, second)).toEqual(expected);
    }
  );
});
