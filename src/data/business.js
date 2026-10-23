// One place for the business details used across the whole site.
// Change something here and it updates on every page.
export const business = {
  name: "JRS Heating and Cooling",
  phone: "07961 281049",
  phoneHref: "tel:+447961281049",
  whatsapp: "447961281049",         // WhatsApp Business (eSIM), international format, no + or spaces
  whatsappDisplay: "07961 281049",
  email: "jrsheatingandcoolinguk@gmail.com",
  yearsExperience: "10",
  region: "South East London & North Kent",
  base: "South East London",
  reach: "including Dartford and Gravesend",
  url: "https://jrsheatingandcooling.co.uk",
  hours: "Monday to Friday, 8am to 5pm",
  // Google Business Profile link, and the link that opens the "write a review" box.
  googleUrl: "https://g.page/r/CXTaVJ-gDNE6EBM",
  googleReviewUrl: "https://g.page/r/CXTaVJ-gDNE6EBM/review",
  hoursShort: "Mon–Fri 8am–5pm",
  // Contact form: free Web3Forms access key, made at https://web3forms.com with the work email.
  // It's safe to keep here (it can only send messages to that inbox). Leave blank to hide the form.
  formKey: "9096182a-817a-4a00-a1c6-c7ad1943c9dd",
  // Breakdowns are covered outside normal hours too.
  breakdowns: "evenings and weekends too",
  // Boiler makes Jordan installs and services (names only, no brand logos).
  brands: ["Worcester Bosch", "Vaillant", "Ideal", "Glow-worm"],
  // Air conditioning makes Jordan installs.
  acBrands: ["Daikin"],
  // Areas covered, grouped by region. Add or remove towns here.
  areaGroups: [
    {
      name: "South East London",
      county: "London",
      towns: ["Greenwich", "Woolwich", "Plumstead", "Charlton", "Blackheath", "Eltham", "Lewisham", "Catford", "Lee", "Abbey Wood", "Thamesmead", "Erith", "Welling", "Bexleyheath", "Sidcup", "Chislehurst", "Bromley", "Orpington"],
    },
    {
      name: "Dartford & North Kent",
      county: "Kent",
      towns: ["Dartford", "Crayford", "Greenhithe", "Swanscombe", "Swanley", "Gravesend", "Northfleet"],
    },
  ],
};

// Every town in one list (South East London first).
business.areas = business.areaGroups.flatMap((g) => g.towns);

export const services = [
  {
    slug: "boiler-repair-servicing",
    quoteJob: "service",
    boiler: true,
    title: "Boiler repair and servicing",
    short: "Annual boiler services from £100, and repairs to get your heating and hot water back on.",
  },
  {
    slug: "landlord-gas-safety-certificates",
    quoteJob: "landlord",
    title: "Landlord gas safety certificates",
    short: "Annual gas safety checks and CP12 certificates for rented properties.",
  },
  {
    slug: "boiler-installation",
    quoteJob: "boiler",
    boiler: true,
    title: "Boiler installation",
    short: "New combi, system and conventional boilers fitted neatly and properly.",
  },
  {
    slug: "power-flushing",
    quoteJob: "flush",
    boiler: true,
    title: "Power flushing",
    short: "Clears sludge and debris from your heating system so radiators heat up properly again.",
  },
  {
    slug: "radiators-central-heating",
    quoteJob: "rads",
    title: "Radiators and central heating",
    short: "New and replacement radiators, valves, moving radiators and central heating repairs.",
  },
  {
    slug: "plumbing",
    href: "/plumbing/",
    title: "Plumbing repairs",
    short: "Leaks, burst or dripping pipes, taps, radiator valves and blockages, sorted tidily by a Gas Safe registered engineer.",
  },
  {
    slug: "underfloor-heating",
    quoteJob: "ufh",
    title: "Underfloor heating",
    short: "Wet underfloor heating connected to your boiler, ideal for kitchens, extensions and bathrooms.",
  },
  {
    slug: "air-conditioning-installation",
    quoteJob: "ac",
    href: "/air-conditioning/",
    title: "Air conditioning installation",
    short: "Wall-mounted air conditioning for homes, to keep rooms cool in summer.",
  },
];

// Where each service links to (air con has its own standalone page).
export const serviceHref = (s) => s.href || `/services/${s.slug}/`;

// A selection of genuine reviews, copied word for word from the Checkatrade profile
// (https://www.checkatrade.com/trades/jrsservices1079543), when trading as JRS Services.
// Scores are out of 10. Only add real reviews here.
export const reviews = [
  {"area": "DA16", "date": "21 February 2024", "score": "10", "job": "Replacement Boiler Install", "text": "Jordan did an absolutely fantastic job. We had to have our old tank in the loft removed and replaced the boiler with a new combi. They also cleaned the central heating system and installed a new kitchen tap and water softener. He provided great advice beforehand, regarding the size of boiler to go for, the expected amount of time for the work. Quote was detailed showing all the costs for materials and labour. During the job I was kept informed on progress daily and with regards to any issues. Now we have unlimited hot water! Very happy, great job."},
  {"area": "SE7", "date": "13 December 2023", "score": "10", "job": "Gas Boiler (kitchen): replace fan + service + clean", "text": "From now on JRS will be our preferred first contact for all things relating to plumbing/boiler/pipes/radiators etc. JRS is (1) a true professional; (2) a very good explainer and communicator of all things technical; (3) a super tidy/reliable/punctual/efficient polite worker!! We cannot recommend JRS highly enough! 10 out of 10 --> JOB WELL DONE!"},
  {"area": "SE18", "date": "9 November 2023", "score": "10", "job": "Boiler repair and service.", "text": "Jordan was excellent! He came and diagnosed the issue really quickly and was straight to work. Boiler was fixed in under an hour. Would definitely hire again and have already recommended to a friend. Also showed me the importance of having your boiler serviced."},
  {"area": "SE18", "date": "3 August 2024", "score": "10", "job": "Boiler emergency", "text": "Efficient and reliable. Jordan was recommended to us, and we were very grateful for his speedy, knowledgeable service. We would call him again."},
  {"area": "SE18", "date": "6 March 2024", "score": "10", "job": "Boiler Service and other plumbing maintenance", "text": "Jordan is very diligent and thorough. Compared to other Plumbers he was very polite and did not make a mess in the house. His prices are also very reasonable. I would highly recommend him."},
  {"area": "SE18", "date": "20 November 2023", "score": "10", "job": "Boiler servicing", "text": "Jordan did a great job and was really good to deal with. Clear communication, arrived at agreed time, sorted out the boiler promptly. Would definitely recommend Jordan to anyone looking for a reliable plumber."},
  {"area": "SE18", "date": "5 April 2024", "score": "10", "job": "Moving and fitting of radiators", "text": "Jordan was quick to respond and was very helpful in determining the best way to do things. He is polite, friendly, courteous and tidy. I would highly recommend him."},
  {"area": "DA5", "date": "2 June 2024", "score": "10", "job": "Fixing a small gas leak", "text": "Jordan came round within 24hrs of posting a request on checkatrade. He tested for the leak, nipped up the offending joint and confirmed the leak was gone. Prompt service and good communication. Would definitely use again."},
  {"area": "SE3", "date": "6 March 2024", "score": "10", "job": "Gas certificate", "text": "- Really quick turn around - Very courteous"},
  {"area": "SE18", "date": "18 October 2023", "score": "10", "job": "Multiple plumbing jobs , new radiator , leaks and blockages", "text": "I’m very happy with his work . He was punctual , pleasant and worked quietly and tidied up after . I would give an extra star for his diligence and advice concerning another matter that I had not been aware of . I feel I got great value for my money . Well done"},
  {"area": "DA1", "date": "15 November 2024", "score": "10", "job": "Unblock kitchen sink", "text": "Excellent service. Excellent contact. Would extremely recommend. I am DA1 area."},
  {"area": "DA1", "date": "11 November 2024", "score": "10", "job": "Shower head fitting", "text": "professionally done. will recommend to friends and family"},
  {"area": "DA1", "date": "30 September 2024", "score": "10", "job": "Serious leak under kitchen flooring.", "text": "Jordan arrived at the arranged time and got straight to work. It didn’t take long to identify the cause and was able to rectify the problem. He was courteous, polite and deserves this review."},
];
export const reviewSource = {
  name: "Checkatrade",
  url: "https://www.checkatrade.com/trades/jrsservices1079543",
  total: 59,
  perfect: 53,
};

// Job photos (taken by Jordan, from the Checkatrade albums). Files live in public/images/work/.
// Each photo has a full-size file and a "-sm" thumbnail.
export const photos = [
  { file: "boiler-install-1", category: "Boilers", caption: "New boiler with neat copper pipework" },
  { file: "boiler-install-cupboard", category: "Boilers", caption: "Boiler fitted inside a kitchen cupboard" },
  { file: "boiler-install-2", category: "Boilers", caption: "Boiler installation" },
  { file: "boiler-install-loft", category: "Boilers", caption: "Loft boiler installation" },
  { file: "boiler-install-3", category: "Boilers", caption: "Boiler and pipework, finished and tidy" },
  { file: "boiler-install-kitchen", category: "Boilers", caption: "Kitchen boiler installation" },
  { file: "boiler-install-4", category: "Boilers", caption: "Boiler with expansion vessel" },
  { file: "boiler-install-5", category: "Boilers", caption: "Wall-hung boiler installation" },
  { file: "boiler-install-6", category: "Boilers", caption: "Boiler installation" },
  { file: "cast-iron-radiator", category: "Radiators", caption: "Cast iron radiator" },
  { file: "radiators-fitted", category: "Radiators", caption: "Radiators fitted under bay windows" },
  { file: "radiator-valve", category: "Radiators", caption: "Thermostatic radiator valve" },
  { file: "bathroom-freestanding-bath", category: "Bathrooms", caption: "Freestanding bath" },
  { file: "shower-room", category: "Bathrooms", caption: "Shower room" },
  { file: "walk-in-shower", category: "Bathrooms", caption: "Walk-in shower" },
  { file: "belfast-sink", category: "Kitchens", caption: "Belfast sink and tap" },
  { file: "kitchen-tap", category: "Kitchens", caption: "Kitchen sink and tap" },
];
