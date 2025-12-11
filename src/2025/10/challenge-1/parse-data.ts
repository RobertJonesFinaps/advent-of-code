import { MachineLightsConfig } from "../models";

export function parseData(inputString: string): MachineLightsConfig[] {
  const rows = inputString.split("\n").filter(Boolean);

  const machineLightsConfigs: MachineLightsConfig[] = [];
  for (let i = 0; i < rows.length; i++) {
    const row: string = rows[i];
    const contents: string[] = row.split(" ");
    const targetAsString: string = contents[0].slice(1, contents[0].length - 1);
    const target: number = parseInt(
      targetAsString
        .split("")
        .map((character) => (character === "." ? "0" : "1"))
        .join(""),
      2
    );
    const operationsAsStringsArray: string[] = contents.slice(
      1,
      contents.length - 1
    );

    const operations: number[] = operationsAsStringsArray
      .map((operationAsStringWithParenthesis: string) =>
        operationAsStringWithParenthesis.slice(
          1,
          operationAsStringWithParenthesis.length - 1
        )
      )
      .map((operationListAsString) =>
        convertPositionalArguementToNumber(
          targetAsString.length,
          operationListAsString
            .split(",")
            .map((operation) => parseInt(operation))
        )
      );

    machineLightsConfigs.push({
      target,
      operations,
      space: Math.pow(2, targetAsString.length),
    });
  }
  return machineLightsConfigs;
}

function convertPositionalArguementToNumber(
  numberOfDigits: number,
  positions: number[]
): number {
  let binaryString = "0".repeat(numberOfDigits);
  for (let position of positions) {
    binaryString =
      binaryString.slice(0, position) + "1" + binaryString.slice(position + 1);
  }
  return parseInt(binaryString, 2);
}
