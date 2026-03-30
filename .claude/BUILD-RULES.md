# Build Rules — Architecture, Deployment, Images

## Astro (non-negotiable)
Static HTML, zero client-side JS on content pages. Fast Core Web Vitals = better ranking. No React/Vue runtime.

## Architecture
- Multi-page site: homepage, industry pages, comparison pages, learn articles, pricing, contact
- Content from `src/site.config.json` (homepage, pricing, FAQ)
- Industry and comparison pages have own content within each `.astro` file
- Layout uses `src/layouts/BaseLayout.astro` with shared header/footer
- Images from R2 via `PUBLIC_R2_BASE`
- Blog/articles: `src/content/learn/` (not `blog/` or `news/`)
- Template cloned from `SuntzuAU/speechrecognitioncloud`

## CSS
Never use `var(--primary)` for background-color on dark sections. Use inline styles with frontmatter JS variables.

## Deployment
Cloudflare Pages. Both apex + www as custom domains.
`PUBLIC_R2_BASE`: `https://pub-c7a09e1ddb7c45e6a38fcdca1e4b6897.r2.dev`

## Images — NEVER Autonomous
3 per post. Show prompts to owner. Wait for approval. Call Worker. Commit together.
```
POST https://master-image-generator.speech-recognition-cloud.workers.dev/generate
{ "prompt": "...", "name": "seo-slug-here", "sitePrefix": "cloudprinting" }
```

## SEO Strategy
cloudprinting.au targets Australian businesses searching for cloud printing and print management.
- Meta titles should be question/answer focused for AI search
- Target long-tail queries: "cloud printing for Australian business", "replace print servers", "Printix vs PaperCut"
- Do NOT target head terms owned by voicerecognition.com.au
- Gateway site: links TO voicerecognition.com.au for purchasing, cross-links other gateway sites for SEO network effect

## ActiveCampaign Form
- Form ID: 295
- `or` UUID: `b5354573-4afb-4035-aa3d-c28c33abacca`
- Phone field: `id="field36" name="field[36]"` with `autocomplete="off"` (NEVER `name="phone"`)
- Button colours: `#EA580C` / `#C2410C` hover

## Gotchas
- No emoji in site.config.json — GitHub API base64 encoding corrupts them
- YAML needs spaces after colons
- push_files cannot touch .github/workflows/ — paste manually via GitHub web editor
- @astrojs/sitemap pinned to exact 3.1.6 (newer versions crash with Astro 4.x)
- GA4: G-5JQ8BG0E6T
- R2 prefix: `cloudprinting/`

## Content Review Workflow
Drafts go via GitHub Pull Requests on a `draft/` branch. Claude opens PR with full content in description. Cloudflare builds preview deployment. Owner reviews via GitHub email notification or web UI. Merge = deploy.
