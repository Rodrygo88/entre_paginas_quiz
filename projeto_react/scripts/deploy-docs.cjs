const { cpSync, mkdirSync, rmSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");
const ghpages = require("gh-pages");

const deployDir = join(process.cwd(), ".pages-deploy");
const docsDir = join(deployDir, "docs");

rmSync(deployDir, { recursive: true, force: true });
mkdirSync(docsDir, { recursive: true });
cpSync(join(process.cwd(), "dist"), docsDir, { recursive: true });
writeFileSync(join(docsDir, ".nojekyll"), "");

ghpages.publish(deployDir, (error) => {
  rmSync(deployDir, { recursive: true, force: true });

  if (error) {
    console.error(error);
    process.exitCode = 1;
    return;
  }

  console.log("Published");
});
