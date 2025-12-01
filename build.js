import { build } from "esbuild";
import { glob } from "glob";

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
}).catch(() => process.exit(1));
