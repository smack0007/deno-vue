import { ensureDir } from "fs";

for (const arg of Deno.args) {
  await ensureDir(arg);
}