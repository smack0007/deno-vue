import { copy } from "../deps.ts";

await copy(Deno.args[0], Deno.args[1], { overwrite: true });