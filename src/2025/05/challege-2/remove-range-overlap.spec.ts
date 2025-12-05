import { reduceRangeOverlap } from "./remove-range-overlap";

describe("removeRangeOverlap", () => {
  it("parses test correctly", () => {
    const testArray = [
      { start: 3, end: 5 },
      { start: 3, end: 5 },
      { start: 3, end: 5 },
      { start: 3, end: 5 },
      { start: 3, end: 5 },
    ];
    expect(reduceRangeOverlap(testArray)).toEqual([{ start: 3, end: 5 }]);
  });
  it("reduces correctly", () => {
    const testArray = [
      { start: 3, end: 5 },
      { start: 6, end: 7 },
    ];
    expect(reduceRangeOverlap(testArray)).toEqual([{ start: 3, end: 7 }]);
  });
  it("fills overlap correctly", () => {
    const testArray = [
      { start: 3, end: 5 },
      { start: 4, end: 7 },
    ];
    expect(reduceRangeOverlap(testArray)).toEqual([{ start: 3, end: 7 }]);
  });

  it.each([
    {
      testArray: [
        { start: 3, end: 10 },
        { start: 3, end: 6 },
        { start: 4, end: 7 },
      ],
    },

    {
      testArray: [
        { start: 3, end: 5 },
        { start: 3, end: 10 },
        { start: 4, end: 7 },
      ],
    },
    {
      testArray: [
        { start: 3, end: 5 },
        { start: 3, end: 6 },
        { start: 4, end: 10 },
      ],
    },
    {
      testArray: [
        { start: 3, end: 5 },
        { start: 4, end: 10 },
        { start: 5, end: 8 },
      ],
    },
  ])("fills overlap", ({ testArray }) => {
    expect(reduceRangeOverlap(testArray)).toEqual([{ start: 3, end: 10 }]);
  });

  it("runs on this array", () => {
    const testArray = [
      { start: 3, end: 5 },
      { start: 3, end: 10 },
      { start: 4, end: 7 },
    ];
    expect(reduceRangeOverlap(testArray)).toEqual([{ start: 3, end: 10 }]);
  });

  it("can handle multiple separate cases with one merge by end", () => {
    const testArray = [
      { start: 3, end: 5 },
      { start: 8, end: 9 },
      { start: 11, end: 12 },
      { start: 13, end: 14 },
    ];
    expect(reduceRangeOverlap(testArray)).toEqual([
      { start: 3, end: 5 },
      { start: 8, end: 9 },
      { start: 11, end: 14 },
    ]);
  });

  it("can handle multiple separate", () => {
    const testArray = [
      { start: 3, end: 5 },
      { start: 8, end: 9 },
      { start: 11, end: 12 },
      { start: 15, end: 16 },
      { start: 15, end: 16 },
      { start: 15, end: 16 },
      { start: 15, end: 16 },
    ];
    expect(reduceRangeOverlap(testArray)).toEqual([
      { start: 3, end: 5 },
      { start: 8, end: 9 },
      { start: 11, end: 12 },
      { start: 15, end: 16 },
    ]);
  });

  it("has multiple chains", () => {
    const testArray = [
      { start: 3, end: 5 },
      { start: 3, end: 6 },
      { start: 6, end: 7 },
      { start: 7, end: 16 },
    ];
    expect(reduceRangeOverlap(testArray)).toEqual([{ start: 3, end: 16 }]);
  });

  it("does the real sized data too", () => {
    const data = [
      { start: 169486974574545, end: 170251643963353 },
      {
        start: 350457710225863,
        end: 350888576149828,
      },
      {
        start: 412668022187283,
        end: 420338049796469,
      },
      {
        start: 83592398782322,
        end: 86848354888786,
      },
    ].sort((a, b) => a.start - b.start);
    expect(reduceRangeOverlap(data)).toEqual([
      {
        end: 86848354888786,
        start: 83592398782322,
      },
      {
        end: 170251643963353,
        start: 169486974574545,
      },
      {
        end: 350888576149828,
        start: 350457710225863,
      },
      {
        end: 420338049796469,
        start: 412668022187283,
      },
    ]);
  });
});
