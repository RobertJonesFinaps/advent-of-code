import { invalidIdFinder } from "./invalid-id-finder";

describe("invalidIdFinder", () => {
  it.each<{ start: number; end: number; expected: number[] }>([
    { start: 0, end: 1, expected: [] },
    { start: 0, end: 11, expected: [11] },
    { start: 0, end: 100, expected: [11, 22, 33, 44, 55, 66, 77, 88, 99] },
    { start: 0, end: 1000, expected: [11, 22, 33, 44, 55, 66, 77, 88, 99] },
    { start: 11, end: 1, expected: [] },
    { start: 11, end: 1000, expected: [11, 22, 33, 44, 55, 66, 77, 88, 99] },
    {
      start: 99,
      end: 2000,
      expected: [
        99, 1010, 1111, 1212, 1313, 1414, 1515, 1616, 1717, 1818, 1919,
      ],
    },
    { start: 11, end: 22, expected: [11, 22] },
    { start: 565653, end: 565659, expected: [] },
    {
      start: 2121212118,
      end: 2121212124,
      expected: [],
    },
    {
      start: 35,
      end: 54,
      expected: [44],
    },
  ])(
    "returns $expected for the range $start - $end ",
    ({ start, end, expected }) => {
      const result = invalidIdFinder({
        start: start.toString(),
        end: end.toString(),
      });
      expect(result).toEqual(expected);
    }
  );
});
