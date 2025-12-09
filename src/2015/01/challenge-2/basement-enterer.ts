export function basementEnterer(input: string): number {
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "(") {
      floor++;
    } else {
      floor--;
    }
    if (floor < 0) {
      return i + 1;
    }
  }
  throw Error("Not found");
}
