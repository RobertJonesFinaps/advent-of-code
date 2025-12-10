import { Quadrants } from "./models";
import { divideIntoQuadrants } from "./divide-into-quadrants";

describe("divideIntoQuadrants", () => {
  it.each<{ inputArray: number[][]; expected: Quadrants }>([
    {
      inputArray: [
        [0, 0],
        [1, 1],
      ],
      expected: {
        bottomLeft: [[0, 0]],
        topLeft: [],
        topRight: [[1, 1]],
        bottomRight: [],
      },
    },
    {
      inputArray: [
        [0, 0],
        [1, 1],
        [0, 1],
        [1, 0],
      ],
      expected: {
        bottomLeft: [[0, 0]],
        topLeft: [[0, 1]],
        topRight: [[1, 1]],
        bottomRight: [[1, 0]],
      },
    },
  ])(
    "it categories the array correctly with input length $inputArray.length",
    ({ inputArray, expected }) => {
      expect(divideIntoQuadrants(inputArray)).toEqual(expected);
    }
  );
});
