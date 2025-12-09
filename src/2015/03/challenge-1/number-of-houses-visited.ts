/**
 * returns number of unique houses visited
 * @param input string consisting of ^>v<
 */
export function numberOfHousesVisited(input: string): number {
  let houseVisit: string[] = ["0,0"];
  let currentHouse: { x: number; y: number } = { x: 0, y: 0 };
  for (let i = 0; i < input.length; i++) {
    const currentInstruction = input[i];
    if (currentInstruction === "^") {
      currentHouse.y++;
    } else if (currentInstruction === ">") {
      currentHouse.x++;
    } else if (currentInstruction === "v") {
      currentHouse.y--;
    } else {
      currentHouse.x--;
    }

    houseVisit.push(`${currentHouse.x},${currentHouse.y}`);
  }

  return new Set(houseVisit).size;
}
