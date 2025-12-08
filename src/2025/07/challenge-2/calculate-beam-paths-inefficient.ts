import { NodePathInfo } from "./models";

// THIS HAS BUG
// It technically works.. but saves every individual path instead of aggregating them
export function calculateBeamPathsInefficient(rows: string[]): number {
  const indicesOfBeam: NodePathInfo[] = [
    { index: rows[0].indexOf("S"), pathNumberToNode: 1 },
  ];
  const indicesOfSplitBeam: NodePathInfo[] = [];

  let i = 1;
  while (i < rows.length) {
    const currentRow = rows[i];
    for (let beam of indicesOfBeam) {
      const symbolBelowBeam: string = currentRow[beam.index];

      if (symbolBelowBeam === "^") {
        const isRecombinationBeam = indicesOfSplitBeam.find(
          (beam) => beam.index === beam.index - 1 // HERE is the bug
        );
        if (isRecombinationBeam) {
          isRecombinationBeam.pathNumberToNode++;
        } else {
          indicesOfSplitBeam.push({
            index: beam.index - 1,
            pathNumberToNode: beam.pathNumberToNode,
          });
        }
        indicesOfSplitBeam.push({
          index: beam.index + 1,
          pathNumberToNode: beam.pathNumberToNode,
        });
      } else {
        indicesOfSplitBeam.push(beam);
      }
    }
    indicesOfBeam.splice(0, indicesOfBeam.length, ...indicesOfSplitBeam);

    if (i !== rows.length - 1) {
      indicesOfSplitBeam.splice(0, indicesOfSplitBeam.length);
    }

    i++;
  }

  return indicesOfSplitBeam.reduce(
    (total, beam) => total + beam.pathNumberToNode,
    0
  );
}
