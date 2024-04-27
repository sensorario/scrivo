"use server";

import fs, { access } from "fs";

const draft = "./markdown/bozza";

export const salvaBozza = async ({ testo }: { testo: string }) => {
  fs.writeFile(draft, testo, {}, () => {});
};

export const leggiBozza = async () => {
  await fs.access(draft, fs.constants.F_OK, () => {});
  return fs.promises.readFile(draft);
};
