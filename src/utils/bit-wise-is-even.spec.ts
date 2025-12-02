import { bitWiseIsEven } from "./bit-wise-is-even";

describe("bitWiseIsEven", () => {
  it.each<{ num: number; expected: boolean }>([
    { num: 0, expected: true },
    { num: 1, expected: false },
    { num: 2, expected: true },
    { num: 1.1, expected: false },
    { num: 1.2, expected: false },
    { num: 0.01, expected: false },
    { num: 0.02, expected: false },
    { num: 4294967296, expected: true }, //2^32
    { num: 4294967297, expected: false }, // 2^32 + 1
    { num: 4294967298, expected: true }, // 2^32 + 1
    { num: Number.MAX_SAFE_INTEGER, expected: false }, // 2^53 - 1
    { num: Number.MAX_SAFE_INTEGER + 2, expected: true }, // 2^53

  ])("it returns $expected for $num", ({ num, expected }) => {
    expect(bitWiseIsEven(num)).toBe(expected);
  });
});
