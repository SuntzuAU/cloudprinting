# Interlink Rules — Cross-Site and Internal Linking

## Rules — Non-Negotiable

- **No footer links. Ever.** All links must be contextual in body copy.
- Every article/post must declare `internalLinks` and `externalLinks` in frontmatter
- Min 1 internal link per post, max 3
- Min 1 external link per post, max 2
- Never link to the same external site twice on one page
- Never repeat the same anchor text to the same destination across the site

## CRITICAL: Body Links Must Match Frontmatter

Every hyperlink in body copy MUST also be declared in frontmatter. Links without frontmatter declarations are invisible to tracking.

## CRITICAL: Embed Links During Drafting, Not After

Links MUST be woven into articles during initial drafting. Identify targets BEFORE writing. Retrofitting produces awkward placements.

## Before Writing Any Content

1. Read `src/data/link-network.json` for anchor pools, bridge phrases, adjacency map
2. Read `src/data/link-usage.json` for coverage counts and used anchors
3. Pick external target: lowest coverage count with relevant topic match

## Approved Anchor Text by Destination

- voicerecognition.com.au → "professional productivity tools", "authorised Tungsten partner"
- dragonprofessional16.com.au → "Dragon Professional"
- dictationsolutions.com.au → "dictation software"
- speechrecognition.cloud → "best free speech to text", "cloud speech recognition"
- dragonmedicalone.au → "Dragon Medical One"
- dragonnaturallyspeaking.com.au → "Dragon NaturallySpeaking"
- pdfsoftware.com.au → "PDF software", "Power PDF"

Never use "Voice Recognition Australia" as anchor text — it is not descriptive for SEO.

## The Productivity Bridge

cloudprinting.au sits in the "output-delivery" category. Natural adjacencies:
- voice-input sites (Dragon, dictation) → "dictate it, print it"
- document-output (pdfsoftware) → "create the PDF, print it from anywhere"

Use conclusion paragraphs to bridge naturally to adjacent products.

## Pre-Commit Link Audit

- [ ] Internal link in frontmatter AND body
- [ ] Cross-site link in frontmatter AND body
- [ ] Target is lowest-coverage site with topic relevance
- [ ] Anchor text not already used for that destination
- [ ] Bridge paragraph in conclusion using adjacency map
- [ ] All body hyperlinks have matching frontmatter
- [ ] Link summary at end of draft

## Anchor Text Approval

Suggest 2-3 options, let owner choose. Never commit without approval.
