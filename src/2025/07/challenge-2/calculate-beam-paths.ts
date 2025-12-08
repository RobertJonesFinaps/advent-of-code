import { NodePathInfo } from "./models";

/**
 * paths are simply the sum of the paths from the row above.
 * plan is to go row by row storing when the beam splits.
 * When a recombination happens, the sum of the paths from both sides gets added
 * 
 * @param rows a string array with a series of `.`s and `^`s.
 * @returns total number of paths the beam can take
 */
export function calculateBeamPaths(rows: string[]): number {
  const indicesOfBeam: NodePathInfo[] = [
    { index: rows[0].indexOf("S"), pathNumberToNode: 1 },
  ];
  const indicesOfSplitBeam: NodePathInfo[] = [];

  let i = 2;
  while (i < rows.length) {
    const currentRow: string = rows[i];
    for (let beam of indicesOfBeam) {
      const symbolBelowBeam: string = currentRow[beam.index];

      if (symbolBelowBeam === "^") {
        const isRecombinationBeam = indicesOfSplitBeam.find(
          (splitBeam) => splitBeam.index === beam.index - 1
        );

        if (isRecombinationBeam) {
          isRecombinationBeam.pathNumberToNode += beam.pathNumberToNode;
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

    if (i < rows.length - 2) {
      indicesOfSplitBeam.splice(0, indicesOfSplitBeam.length);
    }

    i += 2; // can increment by two as every second line is just dots
  }

  return indicesOfSplitBeam.reduce(
    (total, beam) => total + beam.pathNumberToNode,
    0
  );
}
