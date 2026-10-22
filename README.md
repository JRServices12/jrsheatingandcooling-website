# JRS Heating and Cooling — website

Static site built with [Astro](https://astro.build), hosted on AWS Amplify.
Every push to `main` on GitHub deploys to https://jrsheatingandcooling.co.uk
automatically.

## Where to change things

- `src/data/business.js` — phone, email, Gas Safe number, areas covered and the
  list of services. Change them here and every page updates.
- `src/layouts/Layout.astro` — header, footer, colours, Google Analytics and
  the structured data Google reads.
- `src/layouts/ServicePage.astro` — the shared layout for each service page.
- `src/pages/` — the text on each page.

## Still to add

- Price ranges on each service page (currently "free quote")
- Real customer reviews on the reviews page (never invented ones)
- A contact form (Web3Forms or Formspree)
- Cost guides, starting with air conditioning
- Logo, once there's a version that says Heating and Cooling

## Running it on your computer

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
```

On Windows, use `npm.cmd` instead of `npm` if PowerShell blocks scripts.
