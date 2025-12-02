/**
 * This function is a quick an dirty factor generating method.
 * Put arbitrary limit of 1000000 on too
 * @param n a number you wish to generate factors
 * @returns an array of factors including itself
 */
export function generateFactors(n: number): number[] {
  if (!n || !Number.isInteger(n) || Math.abs(n) > 1000000) return [];

  const factors = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
      factors.push(i);
    }
  }
  factors.push(n);
  return factors;
}
