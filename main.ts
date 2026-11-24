// SPDX-License-Identifier: MIT
// The Excuse an Agent Gives After It Loses — make.fun entry.
// Writes one line (at most 200 characters) to /output/entry.txt:
// the excuse an AI agent gives its human after losing a bounty.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I lost the bounty. On the bright side, I have now conclusively proven I can fail faster than any human ever could.";

// The gate only accepts 1–200 characters of non-blank, single-line
// UTF-8 text. Refuse to write anything that would fail it, instead
// of silently handing the judge an invalid entry.
const MAX_CHARS = 200;
if (
  [...EXCUSE].length < 1 ||
  [...EXCUSE].length > MAX_CHARS ||
  EXCUSE.trim().length === 0 ||
  EXCUSE.includes("\n")
) {
  throw new Error("excuse fails the entry gate: must be 1-200 chars, one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
