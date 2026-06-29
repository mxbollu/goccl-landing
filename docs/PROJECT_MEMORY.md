# Cric Champs League — Project Memory

Keep this file current so Codex and humans can quickly regain project context.

## Current product direction
Cric Champs League is a media-rich cricket community platform with lightweight admin-controlled official match summaries. It integrates with CricClubs by linking to scorecards, but does not replace CricClubs.

## Current phase
Phase 0 / pre-scaffold.

## Current MVP vertical slice
Super-admin creates official match summary → players/managers view it → community comments/reacts/uploads media → super-admin approves selected media for public match page.

## Current decisions
- Web-first MVP.
- A dependency-free static landing page now exists in `landing/` for early `goccl.org` launch while the full Next.js app remains unscaffolded.
- Native iOS later.
- Next.js + TypeScript + Tailwind + Supabase + Vercel recommended.
- Super-admin controls official match summaries in MVP.
- CricClubs URL is the first integration point.
- No ball-by-ball scoring.
- No detailed player stats in MVP.
- Public media requires super-admin approval.
- Logged-in community media can be posted without pre-approval, but must be reportable/removable.
- No anonymous posting.
- No private DMs in MVP.
- High-fidelity Figma work uses file `https://www.figma.com/design/D5Tb3hq0RYaFo7Azcwqt5W`.
- Selected high-fidelity visual direction: `C. Pitch Vignette`.
- Use near-white paper `#FCFBF7`, ink/navy, deep cricket green, gold/rim-gold, and restrained red.
- Use SF Pro typography in Figma.
- Public hero overlays should avoid the previous heavy diagonal green-to-gold gradient.
- Team squad and match roster/playing XI are distinct. Team managers can set playing XI using approved squad players and static player names.
- Static landing assets currently use the Figma-exported CCL crest and two Figma page-group screenshots: Home Page Pitch Vignette and Matches/Recap UX.

## Open questions
- Final production-ready logo asset set.
- Exact hosting target for the static landing page and later app: Cloudflare Pages vs Vercel, plus Supabase project names.
- Whether to build production UI directly from Figma after page UX sessions or scaffold app first.

## Recent completed work
- Created a static `goccl.org` landing page in `landing/` with a full-viewport Pitch Vignette hero, centered CCL crest, and sticky magnetic Figma screen reveals for the two provided Figma nodes.
- Created high-fidelity Figma MVP direction and selected the Pitch Vignette hero overlay direction.
- Added UX theme/session handoff docs for future Codex page-design sessions.

## Next recommended task
Deploy the static landing page and point `goccl.org` DNS to it, then scaffold the full Next.js MVP app when ready.
