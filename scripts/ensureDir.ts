import { ensureDir } from "../deps.ts";

for (const arg of Deno.args) {
  await ensureDir(arg);
}