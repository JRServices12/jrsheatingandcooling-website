# JR's Heating and Cooling — website

Static site built with [Astro](https://astro.build). Ships zero JavaScript by
default, deploys cleanly to AWS Amplify Hosting, and matches the site
architecture from the setup guide (Section 2): service pages + area pages
that cross-link, a guides/content hub, about, reviews, contact.

## Structure

```
src/pages/index.astro                        Home
src/pages/services/*.astro                    One page per service
src/pages/areas/index.astro                   Placeholder — see note inside
src/pages/guides/index.astro                  Placeholder cost-guide hub
src/pages/about.astro
src/pages/reviews.astro
src/pages/contact.astro
src/layouts/Layout.astro                      Shared header/footer, click-to-call
```

## What still needs filling in

Every `[placeholder like this]` in the pages needs a real value before this
goes live — service list, towns actually covered, phone number, email,
address (if any), Gas Safe/trade registration number, and real testimonials
(never invent fake reviews or fake job photos). Search the project for `[` to
find them all quickly.

## Local development

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
```

## Deployment

This repo is meant to be connected directly to **AWS Amplify Hosting**
(Amplify console → Create app → connect this GitHub repo). Amplify builds
and deploys automatically on every push to `main` — no separate GitHub
Actions workflow file is needed for this stack.
