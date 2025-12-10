import { Quadrants } from "./models";

export function divideIntoQuadrants(fullDataArray: number[][]): Quadrants {
  const topLeft: number[][] = [];
  const topRight: number[][] = [];
  const bottomLeft: number[][] = [];
  const bottomRight: number[][] = [];

  const [sumX, sumY] = fullDataArray.reduce(
    (totals: number[], data: number[]) => [
      totals[0] + data[0],
      totals[1] + data[1],
    ],
    [0, 0]
  );
  const meanX: number = sumX / fullDataArray.length;
  const meanY: number = sumY / fullDataArray.length;

  for (let i = 0; i < fullDataArray.length; i++) {
    const currentPoint: number[] = fullDataArray[i];

    if (currentPoint[0] <= meanX && currentPoint[1] <= meanY) {
      bottomLeft.push(currentPoint);
    } else if (currentPoint[0] <= meanX && currentPoint[1] > meanY) {
      topLeft.push(currentPoint);
    } else if (currentPoint[0] > meanX && currentPoint[1] <= meanY) {
      bottomRight.push(currentPoint);
    } else if (currentPoint[0] > meanX && currentPoint[1] > meanY) {
      topRight.push(currentPoint);
    }
  }

  return { topLeft, topRight, bottomRight, bottomLeft };
}
