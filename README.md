# OMERTÀ 2K26 — Reverse Hackathon Website

A production-ready, single-page event site by the **Whitehat Club, Department of Cyber Security, SRM Valliammai Engineering College**. Teams inherit an already-built, deliberately vulnerable system and must find, patch and defend their fixes before a panel of judges — with a cinematic 1970s crime-drama aesthetic (original artwork only, no film content).

## Tech Stack

- Next.js 14 (App Router) · TypeScript · Tailwind CSS
- Framer Motion (scroll reveals, hero animation)
- react-hook-form + zod (client & server validation)
- Google Sheets API (storage via a service account — no database or admin panel)
- nodemailer (Gmail SMTP confirmation emails)
- `@vercel/og` (Open Graph image) · lucide-react icons

## Local Setup

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Production checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Required Environment Variables

See `.env.example`. All values are missing from the repo on purpose — never commit secrets.

| Variable | Purpose |
| --- | --- |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account for Sheets |
| `GOOGLE_PROJECT_ID` | GCP project id |
| `GOOGLE_PRIVATE_KEY` | Service-account PEM key (keep `\n` escapes intact) |
| `GOOGLE_SHEET_ID` | Id from your spreadsheet URL |
| `SMTP_HOST`, `SMTP_PORT` | Gmail SMTP (`smtp.gmail.com`, `465`) |
| `SMTP_USER`, `SMTP_PASS` | Gmail address + app password |
| `MAIL_FROM` | Optional display sender |

### Setting up the spreadsheet

Create a Google Sheet and share it (Editor) with your service-account email. Add this header row to sheet 1, column A1:

```
registrationId | teamName | leaderEmail | leaderPhone | leaderFullName | leaderDepartment | leaderYear | leaderRegisterNumber | member2Name | member2Email | member2Department | member2Year | member3Name | member3Email | member3Department | member3Year | member4Name | member4Email | member4Department | member4Year | track | heardAbout | tshirtSize | submittedAt
```

Duplicates are blocked by reading this sheet before every append (same team name or any member email already present → HTTP 409).

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. On Vercel: **New Project** → import your repo. Framework preset auto-detects Next.js.
3. Add all env vars from `.env.example` in **Settings → Environment Variables**.
4. **Deploy.** That's it — the Open Graph image and favicon build automatically.

## Before You Go Live

> **First, the dates.** The working dates below (event 13 March 2026, deadline 11 March 2026) are already in the past as of today, and the registration form **auto-seals after the deadline** (the button changes to "The book is sealed" and `/api/register` refuses requests). Before you can test the form, point `registrationOpenISO`/`registrationDeadlineISO` at a future date; set them back to your real campaign window before launch.

1. **Edit event facts** in `src/lib/site.ts` (single source of truth):
   - `eventDateLabel` / `eventDateTimeISO` (today the countdown uses 13 March 2026)
   - `registrationDeadlineLabel` / `registrationDeadlineISO`, `registrationOpenISO`
   - `prizes[]` amounts (currently working placeholders)
   - `contact.email`, `contact.instagram`, `contact.linkedin`
   - `tracks[]` — keep one entry to hide the track picker, or add more
   - `schedule[]` times (provisional)
2. Replace the team photos in `public/team/` — use exactly these filenames:

   ```
   public/team/faculty-1.jpg        faculty-2.jpg
   public/team/president.jpg        tech-head.jpg
   public/team/events-head.jpg      marketing-head.jpg
   ```

   Until a photo exists, an initials placeholder avatar is shown automatically. Any format `jpg/jpeg/png/webp` works; names must match.
3. Swap real names into the "Meet the Family" cards in `src/components/FamilySection.tsx` (roles and official titles are already primary; nicknames are flavour).
4. Update `metadataBase` in `src/app/layout.tsx` to your production URL.
5. Proofread dates/times printed on the site against the announcement you send out.

## Notes

- Storage is Google Sheets by design (simplest for a club to maintain). If you ever prefer a database + admin dashboard, swap `src/lib/gsheets.ts` for a Supabase client and add a password-protected `/admin` route — the form and API contract stay the same.
- All prices/dates/names shown are working placeholders where marked in `src/lib/site.ts`; the code ships with zero Lorem Ipsum.
- The design is an original homage to the aesthetic of classic 1970s crime dramas; it is unaffiliated with and unendorsed by any film studio.
## Deployed Preview

The live site is available at https://reversehack-2cw9n6ya.manus.space/. This repository contains the source used for that deployment.

