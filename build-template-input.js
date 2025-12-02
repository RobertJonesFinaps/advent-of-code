import fs from "fs";
import path from "path";
import { glob } from "glob";

export function makeTemplate(filePath) {
  const dirPath = path.dirname(filePath);
  const templateFiles = glob.sync(`${dirPath}/*.html`);

  if (!templateFiles.length) {
    console.warn(
      "Skipping html generation for",
      filePath,
      "No template found!"
    );
    return;
  }

  templateFiles.forEach((file) => {
    if (!fs.existsSync(file)) {
      console.warn("Skipping html generation for", filePath, "File Error");
      return;
    }

    const scriptToAdd = path.basename(filePath, ".ts").concat(".js");
    const indexFileName = scriptToAdd
      .replace("script", "index")
      .replace(".js", "")
      .concat(path.basename(file).replace("index", ""));
    const distPath = `${path
      .dirname(file)
      .replace("src/", "dist/")}/${indexFileName}`;

    let html = fs.readFileSync(file, "utf-8");

    html = html.replace(
      "</body>",
      `  <script src="${scriptToAdd}"></script>\n</body>`
    );

    fs.writeFileSync(distPath, html, "utf-8");
  });
}
