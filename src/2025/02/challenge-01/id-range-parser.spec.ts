import { idRangeParser } from "./id-range-parser";
import { IdRange } from "../models";

describe("idRangeParser", () => {
  const idString = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

  const expected: IdRange[] = [
    { start: "11", end: "22" },
    { start: "95", end: "115" },
    { start: "998", end: "1012" },
    { start: "1188511880", end: "1188511890" },
    { start: "222220", end: "222224" },
    { start: "1698522", end: "1698528" },
    { start: "446443", end: "446449" },
    { start: "38593856", end: "38593862" },
    { start: "565653", end: "565659" },
    { start: "824824821", end: "824824827" },
    { start: "2121212118", end: "2121212124" },
  ];

  it("parses the string into an array of ranges", () => {
    expect(idRangeParser(idString)).toEqual(expected);
  });
});
