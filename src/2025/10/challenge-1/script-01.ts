import { readDataFromDom } from "utils/read-data-from-dom";
import { MachineLightsConfig } from "../models";
import { parseData } from "./parse-data";
import { stateMachine } from "./state-machine";

function calculateFewestButtonPresses(data: string) {
  const machineConfigs: MachineLightsConfig[] = parseData(data);
  return machineConfigs.reduce(
    (total, config) => total + stateMachine(config),
    0
  );
}

const data: string = readDataFromDom();
console.log(
  "number of button presses needed",
  calculateFewestButtonPresses(data)
);
