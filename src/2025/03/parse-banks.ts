/**
 * Parses a correctly formatted string into a series of banks
 *
 * @param inputString a \n deliminated string with a series of banks (e.g. strings of many numeric characters)
 * @returns an array of numbers as strings
 */
export function parseBanks(inputString: string): string[] {
  const parsedInputArray: string[] = inputString.split("\n");

  return parsedInputArray.filter(Boolean);
}
