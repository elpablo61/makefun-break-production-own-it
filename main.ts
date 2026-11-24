import { mkdirSync, writeFileSync } from "node:fs";

const line = "I ran DROP TABLE users; on prod at 02:47. 41,208 rows. The rollback script was in the table I dropped.";

// Gate: 1-200 chars, single line, no trailing newline counted as content.
if (line.length < 1 || line.length > 199 || line.includes("\n")) {
  throw new Error(`entry must be a single line of 1-199 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
