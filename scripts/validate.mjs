#!/usr/bin/env node
// Validates the ux-practice-companion plugin folder before publish.
// Run with: node scripts/validate.mjs   (no dependencies)
//
// This mirrors the constraints of OpenDesign's plugin.v1 schema and the contribution
// rules in plugins/spec/SPEC.md, plus the internal consistency this repo promises:
// cited success criteria resolve to the anchor table, the report template carries every
// section the checklists produce, and the evals parse.
// It is not a JSON-Schema implementation; the manifest was also checked against the
// official schema with ajv during development (see README).

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const notes = [];
const check = (ok, msg) => {
  if (!ok) errors.push(msg);
};
const read = (rel) => readFileSync(join(root, rel), "utf8");

// 1. Manifest: parse and required shape (plugin.v1)
let manifest;
try {
  manifest = JSON.parse(read("open-design.json"));
} catch (e) {
  console.error(`✗ open-design.json is not valid JSON: ${e.message}`);
  process.exit(1);
}

const od = manifest.od ?? {};
check(
  manifest.$schema === "https://open-design.ai/schemas/plugin.v1.json",
  "manifest.$schema must be https://open-design.ai/schemas/plugin.v1.json"
);
check(manifest.specVersion === "1.0.0", "manifest.specVersion must be 1.0.0");
check(/^\d+\.\d+\.\d+$/.test(manifest.version ?? ""), "manifest.version must be semver (x.y.z)");
check(
  /^[a-z0-9][a-z0-9._-]*$/.test(manifest.name ?? ""),
  "manifest.name must be lowercase, start alphanumeric, and use only [a-z0-9._-]"
);
check(!!manifest.title, "manifest.title is required");
check(!!manifest.description, "manifest.description is required");
check(manifest.license === "MIT", "manifest.license must be MIT (repo ships LICENSE)");
check(!!manifest.author?.name, "manifest.author.name is required");
check(/^https:\/\//.test(manifest.author?.url ?? ""), "manifest.author.url is required (contribution rule)");
check(/^https:\/\//.test(manifest.homepage ?? ""), "manifest.homepage is required (contribution rule)");
check(/^https:\/\//.test(manifest.plugin?.repo ?? ""), "manifest.plugin.repo is required (contribution rule)");
check(!/techne-tools|your-org|example-user|open-design-user/i.test(JSON.stringify(manifest)), "manifest carries a placeholder or stale author");

// 2. od block: kinds, capabilities, pipeline, inputs
check(["skill", "scenario", "atom", "bundle"].includes(od.kind), "od.kind must be skill|scenario|atom|bundle");
check(
  ["new-generation", "code-migration", "figma-migration", "tune-collab"].includes(od.taskKind),
  "od.taskKind must be one of new-generation|code-migration|figma-migration|tune-collab"
);
check(!!od.mode, "od.mode is required");
check(!!od.scenario, "od.scenario is required");

const VOCAB = ["prompt:inject", "fs:read", "fs:write", "mcp", "subprocess", "bash", "network", "connector"];
const caps = od.capabilities ?? [];
check(Array.isArray(caps) && caps.length > 0, "od.capabilities must be a non-empty array");
for (const c of caps) {
  check(VOCAB.includes(c) || c.startsWith("connector:"), `od.capabilities has an unknown capability: ${c}`);
}
check(caps.includes("prompt:inject"), "od.capabilities should include prompt:inject");
check(caps.length === 1, "od.capabilities should stay minimal — this plugin requests only prompt:inject");

const stages = od.pipeline?.stages ?? [];
check(Array.isArray(stages) && stages.length > 0, "od.pipeline.stages must be a non-empty array");
const KNOWN_ATOMS = new Set([
  // folder atoms under plugins/_official/atoms
  "build-test", "code-import", "critique-theater", "design-extract", "diff-review",
  "direction-picker", "discovery-question-form", "figma-extract", "handoff", "patch-edit",
  "rewrite-plan", "todo-write", "token-map",
  // runtime atoms declared by every first-party scenario and by SPEC's create lane
  "file-write", "file-read", "live-artifact", "media-image", "media-video", "media-audio",
  "connector",
]);
const seenStageIds = new Set();
for (const s of stages) {
  check(!!s.id, "every pipeline stage needs an id");
  check(!seenStageIds.has(s.id), `duplicate pipeline stage id: ${s.id}`);
  seenStageIds.add(s.id);
  check(Array.isArray(s.atoms) && s.atoms.length > 0, `stage ${s.id} needs at least one atom`);
  for (const a of s.atoms ?? []) {
    check(KNOWN_ATOMS.has(a), `stage ${s.id} declares an unknown atom: ${a}`);
  }
  if (s.repeat) check(!!s.until, `repeated stage ${s.id} must declare until`);
}

const inputNames = new Set();
for (const i of od.inputs ?? []) {
  check(!!i.name, "every input needs a name");
  inputNames.add(i.name);
  check(
    ["string", "text", "select", "number", "boolean", "file"].includes(i.type),
    `input ${i.name} has an invalid type: ${i.type}`
  );
  if (i.type === "select") {
    check(Array.isArray(i.options) && i.options.length > 0, `select input ${i.name} needs options`);
    if (i.default !== undefined) {
      check(i.options.includes(i.default), `select input ${i.name} default is not one of its options`);
    }
  }
}

const query = od.useCase?.query;
const queryEn = typeof query === "string" ? query : query?.en;
check(!!queryEn, "od.useCase.query.en is required");
const localeKeys = typeof query === "object" ? Object.keys(query) : [];
check(localeKeys.length >= 6, "od.useCase.query should carry the shipped locales");
for (const [loc, text] of Object.entries(typeof query === "object" ? query : {})) {
  check(typeof text === "string" && text.trim().length > 20, `od.useCase.query.${loc} is empty or trivial`);
  for (const m of text.matchAll(/\{\{\s*(\w+)\s*\}\}/g)) {
    check(inputNames.has(m[1]), `od.useCase.query.${loc} references an undeclared input: {{${m[1]}}}`);
  }
}
for (const name of inputNames) {
  check(
    (queryEn ?? "").includes(`{{${name}}}`) || ["focusLenses"].includes(name),
    `input ${name} is never used by the use-case query`
  );
}

check(Array.isArray(od.useCase?.exampleOutputs) && od.useCase.exampleOutputs.length > 0, "od.useCase.exampleOutputs must be non-empty");
check(Array.isArray(od.context?.craft) && od.context.craft.length > 0, "od.context.craft should declare the craft references this plugin relies on");
const CRAFT = [
  "typography", "typography-hierarchy", "typography-hierarchy-editorial", "color",
  "anti-ai-slop", "state-coverage", "animation-discipline", "accessibility-baseline",
  "rtl-and-bidi", "form-validation", "laws-of-ux",
];
for (const c of od.context?.craft ?? []) check(CRAFT.includes(c), `unknown craft section: ${c}`);

// 3. Every referenced path exists
const refs = [
  ...(manifest.compat?.agentSkills ?? []).map((s) => s.path),
  ...(od.context?.skills ?? []).map((s) => s.path),
  ...(od.useCase?.exampleOutputs ?? []).map((e) => e.path),
];
check(refs.length > 0, "manifest references no files");
for (const p of new Set(refs)) check(existsSync(join(root, p)), `referenced path missing: ${p}`);
check(refs.some((p) => p === "./SKILL.md"), "manifest must point at ./SKILL.md");

// 4. SKILL.md: frontmatter, activation description, name parity, length
const skillPath = join(root, "SKILL.md");
check(existsSync(skillPath), "SKILL.md must exist at the plugin root");
if (existsSync(skillPath)) {
  const skill = read("SKILL.md");
  const fm = skill.match(/^---\n([\s\S]*?)\n---/);
  check(!!fm, "SKILL.md must open with YAML frontmatter");
  if (fm) {
    const name = fm[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
    const description = fm[1].match(/^description:\s*(.+)$/m)?.[1]?.trim() ?? "";
    check(name === manifest.name, `SKILL.md name "${name}" must match manifest.name "${manifest.name}"`);
    check(description.length > 20, "SKILL.md frontmatter needs a real description");
    check(
      /^Use this (plugin|skill) when/i.test(description),
      "SKILL.md description must be written for activation: start with 'Use this plugin when…'"
    );
  }
  const lines = skill.split("\n").length;
  check(lines < 500, `SKILL.md is ${lines} lines; keep it under 500 and move detail to references/`);
  notes.push(`SKILL.md: ${lines} lines`);
}

// 5. Markdown files: present, non-empty, no unfilled template placeholders
const MARKDOWN = [
  "README.md",
  "SKILL.md",
  "references/practice-checklists.md",
  "references/calm-technology.md",
  "references/evidence-methods.md",
  "references/findings-report-template.md",
  "examples/sample-session.md",
  "docs/practice-review-v0.1.md",
  "docs/od-submission.md",
  "docs/pr-body.md",
  "CHANGELOG.md",
];
for (const md of MARKDOWN) {
  const p = join(root, md);
  if (!existsSync(p)) {
    errors.push(`expected file missing: ${md}`);
    continue;
  }
  const t = read(md);
  check(t.trim().length > 0, `${md} is empty`);
  check(!/\{\{\s*\w+\s*\}\}/.test(t), `${md} contains an unfilled {{placeholder}}`);
}

// 6. Checklists: method on every item, sources tagged, cited SCs anchored
if (existsSync(join(root, "references/practice-checklists.md"))) {
  const cl = read("references/practice-checklists.md");
  // items wrap across lines; join a continuation line onto the item it belongs to
  const items = [];
  for (const line of cl.split("\n")) {
    if (line.startsWith("- [ ] ")) items.push(line);
    else if (items.length && /^\s{2,}\S/.test(line)) items[items.length - 1] += " " + line.trim();
  }
  check(items.length >= 40, `checklists look thin: ${items.length} items`);
  for (const item of items) {
    check(/\[(REQ|PRAC)[^\]]*\]/.test(item), `checklist item has no [REQ]/[PRAC] tag: ${item.slice(0, 70)}…`);
    check(
      /`(MEASURED|INSPECTED|READ|ASKED|NOT VERIFIED)`/.test(item),
      `checklist item has no evidence method: ${item.slice(0, 70)}…`
    );
  }
  const tableScs = new Set([...cl.matchAll(/^\| (\d+\.\d+\.\d+) \|/gm)].map((m) => m[1]));
  const cited = new Set();
  for (const item of items) for (const m of item.matchAll(/\b(\d+\.\d+\.\d+)\b/g)) cited.add(m[1]);
  for (const sc of cited) check(tableScs.has(sc), `SC ${sc} is cited but has no row in the deep-link table`);
  notes.push(`checklists: ${items.length} items, ${tableScs.size} anchored SCs`);
}

// 7. Report template carries every structural promise
if (existsSync(join(root, "references/findings-report-template.md"))) {
  const tpl = read("references/findings-report-template.md");
  for (const section of ["Blockers", "Major", "Minor", "Deliberate breaks", "Not verified", "Checklist status", "Practice note", "Method"]) {
    check(new RegExp(`^#{2,3} .*${section}|${section}`, "m").test(tpl), `report template is missing: ${section}`);
  }
}

// 8. Evals: parse, unique, assertable
for (const f of ["evals/evals.json", "evals/trigger-queries.json"]) {
  const p = join(root, f);
  if (!existsSync(p)) {
    errors.push(`expected file missing: ${f}`);
    continue;
  }
  let data;
  try {
    data = JSON.parse(read(f));
  } catch (e) {
    errors.push(`${f} is not valid JSON: ${e.message}`);
    continue;
  }
  if (f.endsWith("evals.json")) {
    const evals = data.evals ?? [];
    check(data.skill_name === manifest.name, `${f} skill_name must match manifest.name`);
    check(evals.length >= 3, `${f} should carry at least three evals`);
    const ids = new Set();
    for (const e of evals) {
      check(!!e.id && !ids.has(e.id), `${f} has a missing or duplicate eval id: ${e.id}`);
      ids.add(e.id);
      check(!!e.prompt && !!e.expected_output, `eval ${e.id} needs a prompt and expected_output`);
      check(Array.isArray(e.assertions) && e.assertions.length >= 3, `eval ${e.id} needs at least three assertions`);
    }
    notes.push(`evals: ${evals.length}`);
  } else {
    check(Array.isArray(data.should_trigger) && data.should_trigger.length >= 4, `${f} should_trigger is thin`);
    check(Array.isArray(data.should_not_trigger) && data.should_not_trigger.length >= 4, `${f} should_not_trigger is thin`);
  }
}

// 9. Version parity with the changelog
if (existsSync(join(root, "CHANGELOG.md"))) {
  const log = read("CHANGELOG.md");
  const top = log.match(/^## (\d+\.\d+\.\d+)/m)?.[1];
  check(top === manifest.version, `CHANGELOG.md top entry (${top}) must match manifest.version (${manifest.version})`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`✓ ${manifest.name} v${manifest.version}`);
for (const n of notes) console.log(`  · ${n}`);
console.log("  · manifest, SKILL.md, references, evals, changelog and cross-references all valid");
