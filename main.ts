// Make the Judge Laugh in One Line — entry program.
// Writes exactly one funny line (88 chars, within the 1-200 gate) to entry.txt.
// Gate check: single line, no trailing newline, UTF-8, 1-200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  'My phone autocorrected "I love you" to "I live you," which is technically more accurate.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
