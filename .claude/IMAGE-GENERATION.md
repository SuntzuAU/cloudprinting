# Image Generation Pipeline (mirror)

> **Mirror of the canonical doc at [SuntzuAU/vra-network-config/IMAGE-GENERATION.md](https://github.com/SuntzuAU/vra-network-config/blob/main/IMAGE-GENERATION.md).**
> If editing, edit the canonical version first, then sync here.

This document describes the VRA gateway network's automated image generation system for blog posts. If you are a Claude session about to write or regenerate images for an article in this repo, **read this first**.

Last synced from canonical: 2026-04-22

---

## Architecture (end-to-end)

```
Article commit with frontmatter imagesPending:true
     --> push triggers Generate On-Demand Post Images workflow
     --> workflow runs generate-images.js post:<filename>.md
     --> POSTs to master-image-generator Cloudflare Worker
     --> Worker calls Gemini 3 Pro Image Preview with prompt + aspectRatio + imageSize
     --> Worker uploads returned image to gateway-images R2 bucket
     --> generate-images.js writes R2 keys back into frontmatter
     --> bot commit with [skip ci] lands the updated article
     --> Cloudflare Pages redeploys with images live
```

---

## Per-article frontmatter

```yaml
heroImage: ""
heroImageAlt: "Short descriptive alt text for the hero"
breakImage1: ""
breakImage1Alt: "Short descriptive alt text for break image 1"
breakImage2: ""
breakImage2Alt: "Short descriptive alt text for break image 2"
imagesPending: true
heroAspectRatio: "16:9"
breakAspectRatio1: "21:9"
breakAspectRatio2: "21:9"
heroPrompt: "One or two sentences describing the hero scene."
breakPrompt1: "Short paragraph for break 1. Must include people prominently."
breakPrompt2: "Short paragraph for break 2. Must include people prominently."
```

**Alternative**: use `heroScene` / `breakScene1` / `breakScene2` with a scene key from `src/image-prompt-library.json`.

---

## Supported aspect ratios (Gemini 3 Pro Image Preview)

`1:1`, `1:4`, `1:8`, `2:3`, `3:2`, `3:4`, `4:1`, `4:3`, `4:5`, `5:4`, `8:1`, `9:16`, `16:9`, `21:9`

**`3:1` is NOT supported. Use `21:9` for cinematic break strips.**

Role defaults:
- `hero`: `16:9`
- `break1` / `break2`: `21:9`
- `feat1` / `feat2`: `16:9`

---

## imageSize (resolution)

Values: `"512"`, `"1K"`, `"2K"`, `"4K"`. Default: `2K`. Per-role frontmatter override: `heroImageSize`, `breakImageSize1`, `breakImageSize2`.

---

## Prompt rules (via shared suffix)

Every prompt gets the `suffix`, `heroSuffix` or `breakSuffix` from `src/image-prompt-library.json` appended. These enforce network-wide:

- Subjects prominently featured, fit Australian adults aged 28-45
- Warm genuine smiles or confident relaxed expressions
- Looking toward camera or mid-conversation
- Professionally dressed and well-groomed
- Equipment: Bluetooth boom headset, compact gooseneck desktop mic, or laptop built-in mic
- No Yeti-style / bulky studio / podcast microphones
- Photorealistic DSLR style, warm lighting, shallow depth of field
- No text overlays, logos, UI mockups, watermarks, stock-photo cliches
- No empty rooms - break images must feature people

Per-article prompts should focus on scene specifics and trust the suffix for global rules.

---

## Workflow guardrails (`.github/workflows/generate-on-demand.yml`)

1. **Path filter**: push to `main` touching `src/content/news/*.md`
2. **Per-article opt-in**: `imagesPending: true` required
3. **Per-run cap**: max 3 flagged articles per push
4. **Concurrency lock**: one run at a time
5. **Daily quota**: max 5 successful runs per 24h
6. **Kill switch**: repo variable `IMAGE_GEN_ENABLED` must equal `"true"`
7. **No self-trigger loop**: bot commits skipped, `[skip ci]` in commit message
8. **Audit log**: `implementations/image-generation.log`

Ceiling: 45 images / 24h worst case.

### Preflight may fail on text-only edits

The daily-quota and kill-switch checks run BEFORE the `imagesPending` scan, so a text-only commit can fail preflight with an email notification even when no images needed regenerating. This is cosmetic - the article content deploys fine. Fix pending.

---

## Per-site setup requirements

1. `generate-images.js` at repo root
2. `.github/workflows/generate-on-demand.yml`
3. `src/content/config.ts` with image frontmatter fields declared
4. `src/pages/news/[slug].astro` renders `heroImage` / `breakImage1` / `breakImage2` (break images injected inline via h2-split script)
5. `src/image-prompt-library.json` (synced from canonical)
6. Optional: repo secret `ADMIN_TOKEN` for Worker auth
7. **Repo variable `IMAGE_GEN_ENABLED` = `"true"`** - must be set
8. Repo variable `R2_PUBLIC_BASE` - e.g. `https://pub-c7a09e1ddb7c45e6a38fcdca1e4b6897.r2.dev`
9. `SITE_ID` in workflow YAML set to the R2 folder prefix for this site

---

## Troubleshooting

**Nothing happened after commit**: check `IMAGE_GEN_ENABLED=true`, daily quota, file path actually matches, not over 3 flagged per push.

**Hero worked but breaks didn't**: unsupported aspect ratio (probably `3:1` instead of `21:9`). Gemini 400s, `generate-images.js` catches and skips.

**Images look plain**: strengthen `src/image-prompt-library.json` suffix fields. Shorter, more concrete prompts beat long prompts with many negatives.

**Images in R2 but not on page**: layout issue. Verify R2 URL loads. Check `[slug].astro` renders break images inline, not at container edges.

**Preflight failed on text-only edit**: known cosmetic issue, ignore the email.

---

## Reference commits (from DNS repo, use as templates for other sites)

- `f7f2615` - `generate-on-demand.yml` with 8 guardrails
- `2943b4c` - people-first prompt library
- `924c444` - aspect ratio 3:1 -> 21:9 fix, imageSize 2K
- `ff1cb18` - inline break images in `[slug].astro` via h2-split
- Worker source: in Cloudflare dashboard for `master-image-generator`, not in git
