# .claude/ -- Mandatory Reading for All Claude Sessions

This folder contains the complete instruction set for building and maintaining cloudprinting.au.

**Read every file in this folder before writing any code or content.**

After reading this folder, also read these data files:
- `src/site.config.json` -- this site's content, colours, products, CTAs
- `src/content/learn/` -- existing learn/article content

## Site type: Reseller product site (SaaS layout)

This is an authorised reseller site for Tungsten Printix cloud print management.
- Multi-page site (homepage, industry pages, comparison pages, pricing, contact, learn/articles)
- Uses `src/layouts/BaseLayout.astro` for shared header/footer
- Each page is a standalone `.astro` file in `src/pages/`
- `site.config.json` drives homepage content, pricing, FAQ
- Industry and comparison pages have their own content within each `.astro` file
- Template cloned from `SuntzuAU/speechrecognitioncloud` -- same layout pattern

## Key details
- Domain: cloudprinting.au
- Product: Tungsten Printix cloud print management
- Reseller: Voice Recognition Australia (authorised Tungsten partner)
- Pricing: AUD inc GST, 1-year annual bands shown, multi-year by quotation
- GA4: G-5JQ8BG0E6T
- R2 public base: https://pub-c7a09e1ddb7c45e6a38fcdca1e4b6897.r2.dev
- siteId: cloudprinting

## Navigation structure
- Features (anchor to homepage section)
- Who it's for (dropdown): Government, Enterprise, Legal, Medical, Education
- Pricing
- Compare (dropdown): vs PaperCut, vs Universal Print, vs Vasion
- Learn
- Contact
- CTA: Start free trial (links to printix.net/printix-trial)

## Rules
- All content must comply with Australian Consumer Law
- Never commit content without owner approval
- Never generate images without owner approval
- Australian spelling throughout
- No footer links -- all cross-site links contextual in body copy
- No emoji or Unicode in site.config.json
- Use push_files for JSON commits, not create_or_update_file
