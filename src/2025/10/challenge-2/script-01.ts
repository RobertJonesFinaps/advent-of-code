import { readDataFromDom } from "utils/read-data-from-dom";
import { MachineJoltageConfig } from "../models";
import { parseJoltageMachineData } from "./parse-joltage-machine-data";
import { stateMachineSlow } from "./state-machine-slow";

function calculateFewestButtonPresses(data: string) {
  const machineConfigs: MachineJoltageConfig[] = parseJoltageMachineData(data);
  return machineConfigs.reduce((total, config, index) => {
    console.log("row complete", index);
    return total + stateMachineSlow(config);
  }, 0);
}

const data: string = readDataFromDom();
console.log(
  "number of button presses needed",
  calculateFewestButtonPresses(data)
);
