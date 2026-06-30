# Cric Champs League Landing Page

Static landing page for the early `goccl.org` launch.

## Current deployment

- GitHub: `https://github.com/mxbollu/goccl-landing`
- Cloudflare Pages project: `goccl-landing`
- Custom domain: `https://goccl.org`
- Cloudflare Pages URL: `https://goccl-landing.pages.dev`

## Included Figma screen groups

- `71:2` — Public home
- `81:2` — Matches and recap
- `151:2` — Teams and rosters
- `106:2` — Media gallery
- `109:166` — Sponsors, announcements, and about

## Cloudflare Pages settings

- Framework preset: `None`
- Build command: leave empty
- Root directory: `landing`
- Build output directory: `/`

For direct upload with Wrangler:

```bash
wrangler pages deploy landing --project-name goccl-landing
```
