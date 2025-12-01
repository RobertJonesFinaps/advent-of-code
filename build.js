import { build } from "esbuild";
import { glob } from "glob";
import { makeTemplate } from "./build-template-input.js";

// find all script.ts files in each subfolder
const scriptFiles = glob.sync("src/**/script-*.ts");
build({
  entryPoints: scriptFiles,
  outbase: "src",
  outdir: "dist",
  bundle: true,
  format: "esm",
  platform: "browser",
  sourcemap: true,
  target: "es2020",
})
  .then(() => scriptFiles.forEach((file) => makeTemplate(file)))
  .catch(() => process.exit(1));
