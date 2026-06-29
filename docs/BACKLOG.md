# Cric Champs League — MVP Backlog

## Epic 1 — Project setup
- [ ] Deploy static landing page to Cloudflare Pages or Vercel and point `goccl.org` DNS.
- [ ] Scaffold Next.js TypeScript app.
- [ ] Add Tailwind CSS.
- [ ] Configure lint/typecheck scripts.
- [ ] Connect Supabase client/server helpers.
- [ ] Add environment variable examples.
- [ ] Create base layout and navigation.
- [ ] Deploy initial app to Vercel.

## Epic 2 — Auth and roles
- [ ] Add Supabase Auth.
- [ ] Create profiles table.
- [ ] Create role field: player, team_manager, super_admin.
- [ ] Create protected route helpers.
- [ ] Create admin route guard.
- [ ] Add profile completion flow.

## Epic 3 — Teams and memberships
- [ ] Create teams table and CRUD.
- [ ] Create team_memberships table.
- [ ] Create public team directory.
- [ ] Create team detail page.
- [ ] Add roster display.
- [ ] Add manager-editable team details.

## Epic 4 — Matches and summaries
- [ ] Create seasons, venues, matches tables.
- [ ] Create match summary table.
- [ ] Build super-admin match summary form.
- [ ] Build public match list.
- [ ] Build match detail page.
- [ ] Add CricClubs scorecard link field.
- [ ] Add visibility states: draft, community, public.

## Epic 5 — Community feed
- [ ] Create posts table.
- [ ] Build league community feed.
- [ ] Build team-contextual posts.
- [ ] Build match-contextual posts/discussion.
- [ ] Create comments table and UI.
- [ ] Create reactions table and UI.

## Epic 6 — Media workflow
- [ ] Configure Supabase Storage buckets.
- [ ] Create media_assets table.
- [ ] Add image upload.
- [ ] Add video upload or placeholder support.
- [ ] Attach media to posts/matches/teams.
- [ ] Build public media approval queue.
- [ ] Build public media gallery.

## Epic 7 — Sponsors and announcements
- [ ] Create sponsors table and admin CRUD.
- [ ] Add sponsor placements to home/match/team pages.
- [ ] Create announcements table and admin CRUD.
- [ ] Add public announcement list/detail.
- [ ] Add logged-in announcement feed.

## Epic 8 — Reports and moderation
- [ ] Create reports table.
- [ ] Add report buttons for posts/media/comments/matches.
- [ ] Build super-admin reports queue.
- [ ] Add content removal/unpublish actions.

## Epic 9 — Public polish
- [x] Create static `goccl.org` landing page with Pitch Vignette hero and Figma screen reveal. Note: completed locally in `landing/`, no PR/commit yet.
- [ ] Build polished homepage.
- [ ] Add responsive mobile navigation.
- [ ] Add empty states.
- [ ] Add loading/error states.
- [ ] Add basic SEO metadata.
- [ ] Add sponsor-friendly public design.

## Backlog hygiene
When Codex completes a task, mark it done and add a one-line note with PR/commit reference if available.
