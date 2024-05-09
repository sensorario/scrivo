"use server";

import { exec } from "child_process";
import fs from "fs";
const readline = require("readline");

const draft = "./markdown/bozza";
const prelatex = "./markdown/bozza.tex";

export const salvaBozza = async ({ testo }: { testo: string }) => {
  fs.writeFile(draft, testo, {}, () => {});
};

export const leggiBozza = async () => {
  await fs.access(draft, fs.constants.F_OK, () => {});
  return fs.promises.readFile(draft);
};

export const converti = async () => {
  try {
    const fileStream = fs.createReadStream(draft);
    const writeStream = fs.createWriteStream(prelatex);

    const readInterface = readline.createInterface({
      input: fileStream,
      output: process.stdout,
      console: false,
    });

    writeStream.write("\\documentclass{article}\n");
    writeStream.write("\\title{React, TypeScript and Next.js}\n");
    writeStream.write("\\author{Il tuo nome}\n");
    writeStream.write("\\date{\\today}\n");
    writeStream.write("\\begin{document}\n");
    writeStream.write("\\maketitle\n");

    readInterface.on("line", (line) => {
      const modifiedLine = line.replace(
        /##/g,
        "\\fontsize{80mm}{96mm}\\selectfont"
      );
      writeStream.write("\\paragraph{" + modifiedLine + "}\n");
    });

    readInterface.on("close", () => {
      writeStream.write("\\end{document}\n");
      writeStream.end();
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
