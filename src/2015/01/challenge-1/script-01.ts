import { readDataFromDom } from "utils/read-data-from-dom";
import { parenthesisParser } from "./parenthesis-parser";

const data = readDataFromDom();

console.log("floor:", parenthesisParser(data));
