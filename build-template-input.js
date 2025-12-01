import fs from "fs";
import path from "path";

export function makeTemplate(filePath) {
  const dirPath = path.dirname(filePath);

  if (!fs.existsSync(`${dirPath}/index.html`)) {
    console.warn(
      "Skipping html generation for",
      filePath,
      "No index file found!"
    );
    return;
  }

  const scriptToAdd = path.basename(filePath, ".ts").concat(".js");
  const indexFileName = scriptToAdd
    .replace("script", "index")
    .replace(".js", ".html");
  const distPath = `${dirPath.replace("src/", "dist/")}/${indexFileName}`;

  let html = fs.readFileSync(`${dirPath}/index.html`, "utf-8");

  html = html.replace(
    "</body>",
    `  <script src="${scriptToAdd}"></script>\n</body>`
  );

  fs.writeFileSync(distPath, html, "utf-8");
}
