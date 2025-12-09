export function parenthesisParser(input: string): number {
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "(") {
      floor++;
    } else {
      floor--;
    }
  }
  return floor;
}
