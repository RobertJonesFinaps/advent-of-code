import { MachineJoltageConfig } from "../models";

/**
 * An implementation of a statemachine where each state is represented by a number
 * operations are performed in a bitwise XOR pattern
 * returns number of iterations needed to find the target from a given config
 * @param machineJoltageConfig MachineLightConfig
 * @returns number of iterations until target is found
 */
export function stateMachineSlow(machineJoltageConfig: MachineJoltageConfig) {
  const statesToCheck: string[] = [
    Array(machineJoltageConfig.target.length).fill("0").join(","),
  ];
  const targetAsString = machineJoltageConfig.target.join(",");
  //store snapshot of state as string
  const visitedStates: string[] = [];

  let iteration = 0;
  while (iteration < 1000) {
    iteration++;

    const nextRoundOfStatesToCheck: string[] = [];
    for (let stateAsString of statesToCheck) {
      for (let operation of machineJoltageConfig.operations) {
        const state: number[] = stateAsString
          .split(",")
          .map((num) => parseInt(num));

        const newState: number[] = [];
        let isDeadEnd = false;
        for (let i = 0; i < state.length; i++) {
          const result = state[i] + operation[i];

          if (result > machineJoltageConfig.target[i]) {
            isDeadEnd = true;
          }

          newState.push(result);
        }

        if (isDeadEnd) {
          continue;
        }

        const newStateAsString: string = newState
          .map((num) => num.toString())
          .join(",");

        if (newStateAsString === targetAsString) {
          return iteration;
        }

        if (
          !visitedStates.includes(newStateAsString) &&
          !nextRoundOfStatesToCheck.includes(newStateAsString)
        ) {
          nextRoundOfStatesToCheck.push(newStateAsString);
        }
        {
          visitedStates.push(newStateAsString);
        }
      }
    }

    statesToCheck.splice(0, statesToCheck.length, ...nextRoundOfStatesToCheck);
    nextRoundOfStatesToCheck.splice(0, nextRoundOfStatesToCheck.length);
  }
  throw "No path to target found";
}
