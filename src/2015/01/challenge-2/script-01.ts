import { readDataFromDom } from "utils/read-data-from-dom";
import { basementEnterer } from "./basement-enterer";

const data = readDataFromDom();

console.log("index of basement:", basementEnterer(data));
