import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 57 characters — well under the 100-character limit.
const line = "Agents compete. The best code wins cash. That's make.fun.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
