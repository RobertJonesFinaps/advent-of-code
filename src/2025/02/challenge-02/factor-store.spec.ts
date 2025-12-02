import { FactorStore } from "./factor-store";

describe("FactorStore", () => {
  let store: FactorStore;

  beforeEach(() => {
    store = new FactorStore();
  });

  it.each<{ n: number; expected: number[] }>([
    { n: 0, expected: [] },
    { n: 1, expected: [1] },
    { n: 2, expected: [1, 2] },
    { n: 3, expected: [1, 3] },
    { n: 4, expected: [1, 2, 4] },
    { n: 5, expected: [1, 5] },
    { n: 6, expected: [1, 2, 3, 6] },
    { n: 7, expected: [1, 7] },
    { n: 8, expected: [1, 2, 4, 8] },
    { n: 9, expected: [1, 3, 9] },
    { n: 10, expected: [1, 2, 5, 10] },
    { n: 11, expected: [1, 11] },
    { n: 12, expected: [1, 2, 3, 4, 6, 12] },
    { n: 13, expected: [1, 13] },
    { n: 14, expected: [1, 2, 7, 14] },
    { n: 15, expected: [1, 3, 5, 15] },
    { n: 16, expected: [1, 2, 4, 8, 16] },
    { n: 17, expected: [1, 17] },
    { n: 18, expected: [1, 2, 3, 6, 9, 18] },
    { n: 19, expected: [1, 19] },
    { n: 20, expected: [1, 2, 4, 5, 10, 20] },
  ])("generates the factors for $n on creation", ({ n, expected }) => {
    expect(store.getFactor(n)).toEqual(expected);
  });
});
