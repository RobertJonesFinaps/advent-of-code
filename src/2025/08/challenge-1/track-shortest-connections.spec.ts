import { trackShortestConnections } from "./track-shortest-connections";

describe("trackCircuits", () => {
  const input = [
    [162, 817, 812],
    [57, 618, 57],
    [906, 360, 560],
    [592, 479, 940],
    [352, 342, 300],
    [466, 668, 158],
    [542, 29, 236],
    [431, 825, 988],
    [739, 650, 466],
    [52, 470, 668],
    [216, 146, 977],
    [819, 987, 18],
    [117, 168, 530],
    [805, 96, 715],
    [346, 949, 466],
    [970, 615, 88],
    [941, 993, 340],
    [862, 61, 35],
    [984, 92, 344],
    [425, 690, 689],
  ];

  it("returns the two points with the shortest distance", () => {
    const result = trackShortestConnections(input, 1);
    expect(result).toEqual([
      {
        x: 0,
        y: 19,
        distance: expect.any(Number),
      },
    ]);
  });

  it("returns the expected output from the second example", () => {
    const result = trackShortestConnections(input, 2);
    expect(result).toEqual([
      {
        x: 0,
        y: 19,
        distance: expect.any(Number),
      },
      {
        x: 0,
        y: 7,
        distance: expect.any(Number),
      },
    ]);
  });
  it("returns the expected output from the third example", () => {
    const result = trackShortestConnections(input, 3);
    expect(result).toEqual([
      {
        x: 0,
        y: 19,
        distance: expect.any(Number),
      },
      {
        x: 0,
        y: 7,
        distance: expect.any(Number),
      },
      {
        x: 2,
        y: 13,
        distance: expect.any(Number),
      },
    ]);
  });
  it("returns the expected output from the fourth example", () => {
    // Note this may be irrelevant as the phrase is "nothing happens"
    // The 4th is already connected via 0
    const result = trackShortestConnections(input, 4);
    expect(result).toEqual([
      {
        x: 0,
        y: 19,
        distance: expect.any(Number),
      },
      {
        x: 0,
        y: 7,
        distance: expect.any(Number),
      },
      {
        x: 2,
        y: 13,
        distance: expect.any(Number),
      },
      {
        x: 7,
        y: 19,
        distance: expect.any(Number),
      },
    ]);
  });
});
