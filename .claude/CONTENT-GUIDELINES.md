# Content Guidelines — Legal Compliance and Voice

Applies to all content on cloudprinting.au.

## Australian Consumer Law (ACL) Compliance

- All content must comply with Australian Consumer Law
- No misleading or deceptive statements
- All factual claims must be reasonably supportable
- If a claim cannot be verified, mark it with `[VERIFY]` — never present it as fact
- When discussing pricing, features, or capabilities, language must reflect that information may change

## Pricing Rules

- All pricing in AUD inc GST
- All pricing claims require **two independent, publicly available sources**, cited explicitly in the draft
- All pricing must include a publication or verification date
- Indicate that pricing may change
- Standard disclaimer: "Pricing accurate at time of publication. Software vendors may change pricing without notice. Verify current pricing directly with the vendor before making purchasing decisions."

## Competitor Comparisons

- Competitors may be named in factual comparisons
- Focus on features, licensing models, workflows, or documented differences
- No defamatory, insulting, or disparaging language
- No absolute superiority claims — use conditional language
- CRITICAL: PaperCut Hive is cloud-native (as of 2026) — never misrepresent it as lacking cloud capability
- Good: "Some organisations may prefer Printix because it eliminates on-premise print servers entirely."
- Bad: "Printix is better than PaperCut."

## Evidence and Statistics

- Never invent statistics, research findings, survey results, quotes, testimonials, or case studies
- If a statistic is used, cite a credible source
- If source cannot be confirmed, mark with `[VERIFY SOURCE]`

## Authority Language

All authority claims about VRA and Russell Bewsell must come from `src/data/link-network.json` -> `authority` block. Never improvise credentials.

## Voice and Tone

Authoritative, friendly, direct, honest. Australian spelling throughout.

**Avoid:** best, ultimate, guaranteed, revolutionary, perfect, proven, world-class, supercharge, game-changing

**Prefer:** may help, can assist, commonly used for, designed to support, often chosen for, practical, straightforward, reliable

## Content Approval Workflow

1. Owner instructs Claude to draft content
2. Claude drafts in chat — does NOT commit
3. Claude flags any `[VERIFY]` items
4. Claude suggests anchor text options — owner chooses
5. Owner reviews and approves
6. Owner says "commit it"
7. Claude generates images (with owner approval) then commits article + images together
8. Cloudflare deploys automatically

**Claude must NEVER:**
- Commit content without explicit owner approval
- Delete files without explicit owner confirmation
- Modify pricing without owner-verified sources
- Generate images autonomously
- Invent statistics, quotes, or testimonials
