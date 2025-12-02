/**
 * Function which makes use of the fact that if the last bit is 1 then the number is odd.
 * Note this function is technically unsafe for large numbers > 2^32
 *
 * @param num a number
 * @returns boolean
 */
export function bitWiseIsEven(num: number): boolean {
  return Number.isInteger(num) && (num & 1) === 0;
}
