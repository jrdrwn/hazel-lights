import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

const STATUS_OPEN = "you closed the lid mid-sentence. ";
const STATUS_MIDDLE = "the last word you typed ";
const STATUS_CLOSE = "was 'tomorrow'.";

const ENTRY = STATUS_OPEN + STATUS_MIDDLE + STATUS_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
