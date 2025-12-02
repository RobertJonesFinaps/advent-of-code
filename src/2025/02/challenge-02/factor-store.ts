import { generateFactors } from "../../../utils/generate-factors";
import { FactorsOfNumbers } from "../models/factors-of-numbers.interface";

export class FactorStore {
  private factors: FactorsOfNumbers = {};
  constructor() {
    for (let i = 1; i < 20; i++) this.factors[i] = generateFactors(i);
  }

  getFactor(n: number): number[] {
    if (!Number.isInteger(n) && n < 1) return [];

    if (this.factors[n]) return this.factors[n];

    this.factors[n] = generateFactors(n);

    return this.factors[n];
  }
}

export const factoreStore = new FactorStore();

