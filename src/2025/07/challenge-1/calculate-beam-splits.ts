export function calculateBeamSplits(rows: string[]): number {
  const indicesOfBeam: number[] = [rows[0].indexOf("S")];
  const indicesOfSplitBeam: Set<number> = new Set();

  let i = 1;
  let numberOfSplits = 0;
  while (i < rows.length) {
    const currentRow = rows[i];
    for (let beamIndex of indicesOfBeam) {
      const symbolBelowBeam: string = currentRow[beamIndex];

      if (symbolBelowBeam === "^") {
        numberOfSplits++;
        indicesOfSplitBeam.add(beamIndex - 1);
        indicesOfSplitBeam.add(beamIndex + 1);
      } else {
        indicesOfSplitBeam.add(beamIndex);
      }
    }
    indicesOfBeam.splice(0, indicesOfBeam.length, ...indicesOfSplitBeam);
    indicesOfSplitBeam.clear();

    i++;
  }

  return numberOfSplits;
}
