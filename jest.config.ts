import type { Config } from 'jest'
import { createDefaultEsmPreset, pathsToModuleNameMapper } from 'ts-jest'

const presetConfig = createDefaultEsmPreset({
  //...options

})

export default {
  ...presetConfig,
  
  modulePaths: ["<rootDir>"]
} satisfies Config