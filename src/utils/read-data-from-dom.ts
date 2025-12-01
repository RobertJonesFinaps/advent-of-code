/**
 * Data seems to be stored in a `pre` tag, this function retrieves the data in one long string.
 *
 * @returns a string representation of the input data
 */
export function readDataFromDom(): string {
  return (document.getElementsByTagName("pre")[0]?.firstChild as any)
    .data as string;
}