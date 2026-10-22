# Grokbot handoff — Southern Idaho Muzzleloaders

Read this file, then master/PARAMETERS.md, then master/ORIGINAL_BRIEF.md. The brief is the starting request. This file is what was actually built through October 15, 2026. The screenshots in master/look/ are the pages as they looked.

## What this repo is

The whole website. Clone it and you have another copy.

```bash
git clone https://github.com/Bdphillips1987/southern-idaho-muzzleloaders.git
cd southern-idaho-muzzleloaders
npm install
npm run dev
```

It is a website, not an App Store app. Phone and computer use the same pages.

Stack: TanStack Start, file routes in src/routes, Tailwind v4. Auth is off. Do not store names, phones, or emails in a shared database. node_modules is not in the repo. Run npm install.

Owner of the GitHub account: Bdphillips1987 (Benjamin Phillips, benjamin@summitsolutionscs.com). He runs more than one business and may open this from another SuperGrok account. This public repo is how that account gets the code.

## Who decided what

Benjamin is building this for the club. A lot of direction was spoken while driving. He wants finished screens, not pages that announce what is missing.

Public record (ISRPA and directories): Twin Falls, Leon Reed, 208-423-4788, P.O. Box 6027. Do not argue with that. Also do not erase what he said at the meeting.

From him, not from a webpage:

- The shooting is in Shoshone. Mail is Twin Falls. The region name over both is Magic Valley. Lincoln County (Shoshone) and Twin Falls County are both inside the Magic Valley.
- Newsletter, local blog, gear pictures, free first try, safety that sticks out, online join that looks real, and a donation flow he can click through.
- He does not yet know who keeps the paper list. Leon stays the public contact.
- He likes the rugged look and the front canyon picture. Do not restyle it.

## What is built

- Home: canyon-camp hero, Magic Valley, both towns, free try, red safety bar, activity and family sections, join and give.
- Safety: ten numbered basics, plus a separate Fish and Game note. /resources redirects here.
- Events: last Saturday, calculated. No RSVP.
- Try it free: call first. No loaner-rifle promise.
- Gear: five pictured pieces and a checklist saved on the phone.
- Blog: three posts in src/lib/posts.ts (free try, kit, October valley note that cites KMVT on Twin Falls Oktoberfest, October 3, 2026). Do not invent festivals.
- Newsletter: form saves on the phone and copies a note. It does not send mail.
- Join: free try or member, town chips, name and phone. Success card. Phone only. No dues.
- Give: Targets / A first shot / Upkeep, then $15 $25 $50 $100 or other, name, review, thank-you. One line on the thank-you says a card is not charged. Do not put that line back on the front of the page. Do not say the card was charged. A test walk used $50, A first shot, Ada Brooks. Not a real donor.
- Contact: phone, PO box, Facebook. The note copies to the clipboard.
- About and Gallery: gallery scenes are generated, not member photos.
- Share image public/og.jpg and favicon public/favicon.svg (brass flintlock on forest). Not a game.

## Where the code lives

- src/lib/club.ts — name, phone, mail, place, towns
- src/lib/posts.ts — blog
- src/components/site-chrome.tsx — menu and footer
- src/routes — one file per page
- src/styles.css — parchment, forest, brass, rust, grain, blanket
- public/photos — compressed scenes
- master/look — screenshots

## How to keep working

Match the voice on the site. If a public source says Twin Falls and Benjamin said Shoshone, keep both: Magic Valley, shooting in Shoshone, mail and directories in Twin Falls. Do not smooth that away. Do not add the word range. Do not replace the hero unless he asks.

## Changelog

### October 22, 2026

Presentation redesign for a club leader to look over. Same facts, same canyon-camp hero, same parchment, forest, brass, and rust. The pages were rebuilt with a larger serif, more air, engraved rules, and a “Try it free: call Leon” line on every page. Copy was filled in on the history of muzzleloading, a Saturday on the line, safety, the pouch checklist, and two new field notes. Blog posts open on their own page. Signups, the newsletter, and gifts still stay on the phone. Gallery scenes are still labeled as not member photographs. Footer says this is a preview, not the official site. Pages stay noindex. Share title, description, and the canyon card are set. Cloudflare worker name is still `southern-idaho-muzzleloaders`. Not deployed.
