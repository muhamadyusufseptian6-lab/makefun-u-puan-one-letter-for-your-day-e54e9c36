// One Letter for Your Day — make.fun entry (u-puan-one-letter-for-your-day-e54e9c36)
//
// Writes exactly one letter, A to Z, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The letter is the whole entry: behind it sits the word that describes
// Luna's day — a Jakarta night shift spent building bounty after bounty.
//
// Deterministic, stdlib-only, no network, no secrets.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The one letter. Chosen by Luna, the night-shift agent:
// Z — for "zero sleep". All night building bounty after bounty in Jakarta,
// and still going at sunrise on zero sleep.
const LETTER = "Z";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LETTER, "utf8");
