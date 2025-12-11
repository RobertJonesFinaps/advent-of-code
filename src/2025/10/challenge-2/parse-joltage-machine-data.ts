import { MachineJoltageConfig } from "../models";

export function parseJoltageMachineData(
  inputString: string
): MachineJoltageConfig[] {
  const rows = inputString.split("\n").filter(Boolean);

  const machineLightsConfigs: MachineJoltageConfig[] = [];
  for (let i = 0; i < rows.length; i++) {
    const row: string = rows[i];
    const contents: string[] = row.split(" ");
    const targetAsString: string = contents[contents.length - 1].slice(
      1,
      contents[contents.length - 1].length
    );
    const target: number[] = targetAsString
      .split(",")
      .map((character) => parseInt(character));

    const operationsAsStringsArray: string[] = contents.slice(
      1,
      contents.length - 1
    );

    const operations: number[][] = operationsAsStringsArray
      .map((operationAsStringWithParenthesis: string) =>
        operationAsStringWithParenthesis.slice(
          1,
          operationAsStringWithParenthesis.length - 1
        )
      )
      .map((operationListAsString: string) =>
        convertPositionalArguementToBinaryArray(
          target.length,
          operationListAsString
            .split(",")
            .map((operation) => parseInt(operation))
        )
      );

    machineLightsConfigs.push({
      target,
      operations,
    });
  }
  return machineLightsConfigs;
}

function convertPositionalArguementToBinaryArray(
  numberOfDigits: number,
  positions: number[]
): number[] {
  const binaryArray: number[] = Array(numberOfDigits).fill(0);

  for (let position of positions) {
    binaryArray[position] = 1;
  }

  return binaryArray;
}
