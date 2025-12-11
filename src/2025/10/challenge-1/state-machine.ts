import { bitwiseOperationXOR } from "../../../utils/bitwise-operation-xor";
import { MachineLightsConfig } from "../models";

/**
 * An implementation of a statemachine where each state is represented by a number
 * operations are performed in a bitwise XOR pattern
 * returns number of iterations needed to find the target from a given config
 * @param machineLightConfig MachineLightConfig
 * @returns number of iterations until target is found
 */
export function stateMachine(machineLightConfig: MachineLightsConfig) {
  const statesToCheck = [0]; // always start at 0

  const visitedStates: number[] = [];

  let iteration = 0;
  while (iteration < 1000) {
    iteration++;

    const nextRoundOfStatesToCheck: number[] = [];
    for (let operation of machineLightConfig.operations) {
      for (let state of statesToCheck) {
        const result = bitwiseOperationXOR(operation, state);
        if (result === machineLightConfig.target) {
          return iteration;
        } else if (
          !visitedStates.includes(result) &&
          !nextRoundOfStatesToCheck.includes(result)
        ) {
          nextRoundOfStatesToCheck.push(result);
        }
      }
    }

    statesToCheck.splice(0, statesToCheck.length, ...nextRoundOfStatesToCheck);
    nextRoundOfStatesToCheck.splice(0, statesToCheck.length);
  }
  throw "No path to target found";
}
