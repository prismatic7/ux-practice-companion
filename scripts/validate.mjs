#!/usr/bin/env node
// Validates the ux-practice-companion plugin folder before publish.
// Run with: node scripts/validate.mjs   (no dependencies)

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const check = (ok, msg) => {
  if (!ok) errors.push(msg);
};

// 1. Manifest: shape and required fields (mirrors the plugin.v1 reference)
let manifest = null;
const manifestPath = join(root, "open-design.json");
try {
  manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
} catch (e) {
  console.error(`✗ open-design.json is not valid JSON: ${e.message}`);
  process.exit(1);
}
const od = manifest.od ?? {};
check(
  manifest.$schema === "https://open-design.ai/schemas/plugin.v1.json",
  "manifest.$schema must be https://open-design.ai/schemas/plugin.v1.json"
);
check(/^\d+\.\d+\.\d+$/.test(manifest.version ?? ""), "manifest.version must be semver (x.y.z)");
check(
  /^[a-z0-9._-]+$/.test(manifest.name ?? ""),
  "manifest.name must use lowercase letters, numbers, dots, dashes, underscores"
);
check(!!manifest.title, "manifest.title is required");
check(!!manifest.description, "manifest.description is required");
check(manifest.license === "MIT", "manifest.license must be MIT (repo ships LICENSE)");
check(!!manifest.author?.name, "manifest.author.name is required");
check(!!od.kind, "od.kind is required");
check(!!od.mode, "od.mode is required");
check(!!od.taskKind, "od.taskKind is required");
check(Array.isArray(od.capabilities) && od.capabilities.length > 0, "od.capabilities must be a non-empty array");
check(
  Array.isArray(od.pipeline?.stages) && od.pipeline.stages.length > 0,
  "od.pipeline.stages must be a non-empty array"
);
check(!!od.useCase?.query?.en, "od.useCase.query.en is required");
check(
  Array.isArray(od.useCase?.exampleOutputs) && od.useCase.exampleOutputs.length > 0,
  "od.useCase.exampleOutputs must be a non-empty array"
);
for (const input of od.inputs ?? []) {
  check(!!input.name && !!input.type, `od.inputs entry needs name and type (${input.name ?? "?"})`);
}

// 2. SKILL.md: frontmatter, and name parity with the manifest
const skillPath = join(root, "SKILL.md");
check(existsSync(skillPath), "SKILL.md must exist at the plugin root");
if (existsSync(skillPath)) {
  const skill = readFileSync(skillPath, "utf8");
  const fm = skill.match(/^---\n([\s\S]*?)\n---/);
  check(!!fm, "SKILL.md must open with YAML frontmatter");
  if (fm) {
    check(/^name:\s*\S/m.test(fm[1]), "SKILL.md frontmatter needs name:");
    check(/^description:\s*\S/m.test(fm[1]), "SKILL.md frontmatter needs description:");
    const skillName = fm[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
    check(
      skillName === manifest.name,
      `SKILL.md name "${skillName}" must match manifest.name "${manifest.name}"`
    );
  }
}

// 3. Every file the manifest references must exist
const refs = [];
for (const s of od.compat?.agentSkills ?? []) refs.push(s.path);
for (const s of od.context?.skills ?? []) refs.push(s.path);
for (const e of od.useCase?.exampleOutputs ?? []) refs.push(e.path);
for (const p of refs) check(existsSync(join(root, p)), `referenced path missing: ${p}`);
check(refs.length > 0, "manifest references no files (expected at least ./SKILL.md)");

// 4. Markdown content: non-empty, no unfilled {{placeholders}}
for (const md of [
  "README.md",
  "SKILL.md",
  "references/practice-checklists.md",
  "references/findings-report-template.md",
  "examples/sample-session.md",
]) {
  const p = join(root, md);
  if (!existsSync(p)) {
    errors.push(`expected file missing: ${md}`);
    continue;
  }
  const t = readFileSync(p, "utf8");
  check(t.trim().length > 0, `${md} is empty`);
  check(!/\{\{\s*\w+\s*\}\}/.test(t), `${md} contains an unfilled {{placeholder}}`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`✓ ${manifest.name} v${manifest.version} — manifest, SKILL.md, references and markdown all valid`);
