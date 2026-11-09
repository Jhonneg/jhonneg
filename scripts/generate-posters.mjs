// Run manually when project demo videos change: node scripts/generate-posters.mjs
import { readFile, mkdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";

const projects = await readFile(new URL("../constants/projects.ts", import.meta.url), "utf8");
const entries = [...projects.matchAll(/name: "([^"]+)"[\s\S]*?mediaUrl:\s*"([^"]+)"/g)];
const directory = new URL("../public/posters/", import.meta.url);
await mkdir(directory, { recursive: true });

for (const [, name, url] of entries) {
  const filename = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}.webp`;
  const target = new URL(filename, directory);
  const result = spawnSync(
    "ffmpeg",
    [
      "-hide_banner", "-loglevel", "error", "-ss", "1", "-i", url.trim(),
      "-frames:v", "1", "-vf", "scale=640:-2", "-q:v", "75", "-y", target.pathname,
    ],
    { stdio: "inherit" },
  );
  if (result.status !== 0) throw new Error(`Could not generate poster for ${name}`);
  console.log(`Generated ${filename}`);
}
