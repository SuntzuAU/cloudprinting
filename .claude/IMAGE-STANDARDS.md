# Image Standards — Sizes, Naming, Prompts, Manifest Schema

All images on cloudprinting.au must follow these standards.

## Standard Image Slots and Sizes

| Slot | Dimensions | Aspect Ratio | CSS Treatment |
|---|---|---|---|
| `hero` | 1200 x 675 | 16:9 | `aspect-ratio:16/9; object-fit:cover` |
| `about-banner` | 1200 x 675 | 16:9 | `.card-img` with `aspect-ratio:16/9` |
| `feature-*` | 800 x 450 | 16:9 | `.card-img` with `aspect-ratio:16/9` |
| `benefits-banner` | 1200 x 400 | 3:1 | `.img-break` with `height:220px` |
| `workflow-banner` | 1200 x 400 | 3:1 | `.img-break` |
| `cta-banner` | 1200 x 400 | 3:1 | `.img-break` styled inline |
| Blog `heroImage` | 1200 x 675 | 16:9 | Full-width with `object-fit:cover` |
| Blog `breakImage1` | 1200 x 400 | 3:1 | Cinematic strip in article body |
| Blog `breakImage2` | 1200 x 400 | 3:1 | Cinematic strip in article body |

## Key Rules

- **16:9** = people, workspaces, product interfaces
- **3:1** = wide cinematic strips, subject centred vertically
- **Always specify aspect ratio in Gemini prompt**
- **Never generate square or portrait images**

## SEO Naming

Format: `cloudprinting/{yyyy}/{mm}/{dd}/{seo-slug}-{short-uuid}.{ext}`

Slug rules:
- Lowercase, hyphens only, max 60 characters
- Keywords first, stop words removed
- Slug-first then unique suffix (not UUID-first)

## Alt Text

- Every image must have descriptive alt text
- Alt text drafted alongside image prompts, approved by owner
- Stored in image-manifest.json, read at build time by Astro
- No runtime JavaScript for image rendering

## Blog Images

Use frontmatter fields (`heroImage`, `breakImage1`, `breakImage2`), NEVER hardcoded R2 URLs in body copy.
