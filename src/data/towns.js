// One entry per town page (/areas/<slug>/). The page template is src/pages/areas/[town].astro.
// Keep each entry genuinely local: real places nearby, the sort of homes there, and only
// reviews that were really left by customers close by. Do not copy one entry to make another.
// To add a town: add an entry here, add its name to the area list in business.js if it isn't there,
// and it gets its own page automatically.
//
// reviewAreas: postcode districts of real reviews (from business.js) to show on the page, nearest first.
// postcodes: shown on the page so people searching by postcode find it.

export const towns = [
  {
    slug: "bromley",
    name: "Bromley",
    county: "London",
    postcodes: ["BR1", "BR2"],
    nearby: ["Bickley", "Shortlands", "Plaistow", "Hayes", "Bromley Common"],
    intro:
      "Boiler servicing, repairs and new boilers in Bromley, Bickley, Shortlands and the streets around them, plus landlord gas safety certificates and home air conditioning. We're Gas Safe registered and F-Gas certified, and every job gets a free written quote first.",
    homes: [
      "A lot of homes around Bromley are Victorian and Edwardian houses near the town centre, with 1930s semis further out and flats and newer developments in between. That mix means we see a bit of everything: older houses still running on a hot water cylinder and loft tank, newer flats with a combi boiler in a kitchen cupboard, and everything in between.",
      "If your house still has a tank in the loft and a cylinder in the airing cupboard, changing to a combi can free up that space and give you hot water on demand. We'll look at your water pressure and the size of the house first and tell you honestly whether a combi is the right choice, or whether you'd be better off keeping a system boiler.",
    ],
    landlords:
      "Bromley has plenty of rented flats and houses, and landlords here need a gas safety certificate every 12 months. We do the check, give you the CP12 and remind you before the next one is due, and we can book several properties together.",
    aircon:
      "Bromley's older houses often have no cooling at all, and loft bedrooms and south-facing extensions can get uncomfortable in summer. We fit wall-mounted air conditioning for single rooms or several rooms, and as an F-Gas certified company we can do the whole job ourselves.",
    reviewAreas: ["SE3", "SE18", "DA5", "DA16"],
    faqs: [
      ["Do you cover Bromley for boiler services?", "Yes. Bromley is one of our main areas, a short drive from our South East London base. Call us or use the quick price tool and we'll give you a date."],
      ["Can you fit a new boiler in a Bromley Victorian or Edwardian house?", "Yes. Older houses often have a cylinder and loft tank, and we can replace the boiler like for like or convert to a combi where it makes sense. You get a written quote before any work starts."],
      ["Do you do landlord gas safety certificates in Bromley?", "Yes, for houses and flats across Bromley, Bickley, Shortlands and nearby. The certificate for one appliance is £75, or £155 together with a boiler service."],
    ],
  },
  {
    slug: "sidcup",
    name: "Sidcup",
    county: "London",
    postcodes: ["DA14", "DA15"],
    nearby: ["Blackfen", "Lamorbey", "Foots Cray", "Albany Park", "Old Bexley"],
    intro:
      "Boiler servicing, repairs and new boilers in Sidcup, Blackfen, Lamorbey and the streets around them, plus landlord gas safety certificates and home air conditioning. Gas Safe registered, F-Gas certified, and every job gets a free written quote first.",
    homes: [
      "Sidcup is mostly a 1930s suburb, so a lot of the homes here are interwar semi-detached and terraced houses. Many of those still have their original layout, with the boiler in the kitchen or an airing cupboard, a tank in the loft and radiators that have been added to over the years.",
      "After decades the pipework in these houses is often full of sludge, which is why radiators go cold at the bottom or the boiler works harder than it should. A power flush and a new boiler together can make a big difference, and we'll tell you honestly whether the existing radiators are worth keeping.",
    ],
    landlords:
      "There are plenty of rented houses and flats around Sidcup. We do the CP12 gas safety check, give you the certificate and remind you before the next one is due, and we can book several properties together.",
    aircon:
      "Interwar houses weren't built with summer heat in mind, and loft conversions and rear extensions can get very warm. We fit wall-mounted air conditioning for one room or several, and as an F-Gas certified company we handle the whole installation.",
    reviewAreas: ["DA16", "DA5", "SE18"],
    faqs: [
      ["Do you cover Sidcup for boiler services?", "Yes. Sidcup, Blackfen and Lamorbey are all in our area. Call us or use the quick price tool and we'll give you a date."],
      ["My Sidcup house has a loft tank and hot water cylinder. Can I change to a combi?", "Often, yes, depending on your water pressure and how many bathrooms you have. We'll check and tell you honestly whether a combi or a system boiler suits you better, in a written quote."],
      ["Do you fit air conditioning in Sidcup?", "Yes. Prices start at around £2,000 to £2,800 for one room, fitted. We're F-Gas certified and give you a free written quote first."],
    ],
  },
  {
    slug: "bexleyheath",
    name: "Bexleyheath",
    county: "London",
    postcodes: ["DA6", "DA7"],
    nearby: ["Barnehurst", "Upton", "Danson", "Crook Log", "Welling"],
    intro:
      "Boiler servicing, repairs and new boilers in Bexleyheath, Barnehurst, Upton and the streets around them, plus landlord gas safety certificates and home air conditioning. Gas Safe registered, F-Gas certified, and every job gets a free written quote first.",
    homes: [
      "Bexleyheath and Barnehurst have a lot of interwar and post-war family houses, plus terraces and a good number of flats near the town centre. Many of these homes have had their boiler replaced once or twice already, sometimes with the pipework left as it was.",
      "That's where a boiler change can go wrong, because an old, dirty system can damage a new boiler. We always clean the system as part of a boiler replacement, and where radiators are cold or slow to heat a power flush often sorts it out.",
    ],
    landlords:
      "Bexleyheath has a busy rental market. We do the CP12 gas safety check, give you the certificate and remind you before it expires, and if you have more than one property we can book them together.",
    aircon:
      "Extensions, conservatories and loft rooms in Bexleyheath's family homes tend to get the hottest. We fit wall-mounted air conditioning for single rooms and multi-room systems, and we're F-Gas certified.",
    reviewAreas: ["DA16", "DA5", "SE18"],
    faqs: [
      ["Do you cover Bexleyheath and Barnehurst?", "Yes, both are in our area, along with Upton, Danson and Welling. Call us for a date or use the quick price tool."],
      ["Can you power flush a Bexleyheath home with cold radiators?", `Yes. A power flush for up to 6 radiators is £400 to £450, and larger systems are priced by the number of radiators. We'll confirm the price before we start.`],
      ["Do you do landlord gas safety certificates in Bexleyheath?", "Yes. A certificate for one appliance is £75, or £155 together with a boiler service. We remind you before it runs out."],
    ],
  },
  {
    slug: "bexley",
    name: "Bexley",
    county: "London",
    postcodes: ["DA5"],
    nearby: ["Old Bexley", "Albany Park", "Blendon", "Bexley Village"],
    intro:
      "Boiler servicing, repairs and new boilers in Bexley, Old Bexley and Albany Park, plus landlord gas safety certificates and home air conditioning. Gas Safe registered, F-Gas certified, and every job gets a free written quote first.",
    homes: [
      "Old Bexley has a mix of larger older houses, interwar semis and detached homes, often with several bathrooms and plenty of radiators. Bigger houses like these need a boiler sized properly for the number of bathrooms and radiators, not just swapped like for like.",
      "We'll look at the whole system before quoting, so you get the right boiler for the house, whether that's a combi, a system boiler or keeping an existing cylinder. If something small goes wrong, such as a gas smell or a weeping joint, we can find and fix it quickly.",
    ],
    landlords:
      "Bexley has plenty of rented houses and flats, and landlords need a gas safety certificate every 12 months. We do the check, issue the CP12 and remind you before the next one is due.",
    aircon:
      "Bigger houses often mean a few rooms that stay warm in summer. We fit air conditioning for one room or several, as an F-Gas certified company, with tidy pipe runs.",
    reviewAreas: ["DA5", "DA16", "SE18"],
    faqs: [
      ["Do you cover Bexley and Old Bexley?", "Yes. Bexley, Old Bexley, Albany Park and Blendon are all in our area. Call us or use the quick price tool."],
      ["What if I smell gas or think there's a gas leak?", "Call the National Gas Emergency Service on 0800 111 999 straight away. Once the gas is safe, we can find and repair the fault."],
      ["Can you fit a new boiler in a larger Bexley house?", "Yes. We size the boiler to the number of bathrooms and radiators, and give you a written quote before any work starts."],
    ],
  },
  {
    slug: "dartford",
    name: "Dartford",
    county: "Kent",
    postcodes: ["DA1", "DA2"],
    nearby: ["Wilmington", "Temple Hill", "Crayford", "Greenhithe", "Stone"],
    intro:
      "Boiler servicing, repairs and new boilers in Dartford, Wilmington and Crayford, plus landlord gas safety certificates and home air conditioning. Gas Safe registered, F-Gas certified, and every job gets a free written quote first.",
    homes: [
      "Dartford has Victorian and Edwardian terraces near the town centre, interwar and post-war estates further out, and a lot of newer flats and houses built in recent years. Each needs something different: older terraces often need system work, while newer flats need a quick, tidy service.",
      "For homes with a boiler more than about 10 to 12 years old, a service is a good time to find out how much life it has left, and we'll tell you honestly when a repair makes sense and when a new boiler would save you money.",
    ],
    landlords:
      "With so many flats and rented homes in and around Dartford, landlord gas safety certificates are one of the jobs we do most. The CP12 for one appliance is £75, and we remind you before the next one is due.",
    aircon:
      "Newer flats and extensions around Dartford can get hot and stuffy in summer. We fit wall-mounted air conditioning for single rooms and multi-room systems, and we're F-Gas certified.",
    reviewAreas: ["DA1", "DA5", "DA16"],
    faqs: [
      ["Do you cover Dartford for boiler servicing and repairs?", "Yes. Dartford, Wilmington, Crayford, Greenhithe and Stone are all in our area. Call us for a date or use the quick price tool."],
      ["Do you do landlord certificates for flats in Dartford?", "Yes. A certificate for one appliance is £75, or £155 with a boiler service, and we can book several properties together."],
      ["How much is a boiler repair in Dartford?", "The call-out to find the fault is from £85 plus parts. We explain the fault and price the repair before we start."],
    ],
  },
  {
    slug: "gravesend",
    name: "Gravesend",
    county: "Kent",
    postcodes: ["DA11", "DA12"],
    nearby: ["Northfleet", "Singlewell", "Istead Rise", "Chalk", "Wrotham Road"],
    intro:
      "Boiler servicing, repairs and new boilers in Gravesend, Northfleet and the villages around them, plus landlord gas safety certificates and home air conditioning. Gas Safe registered, F-Gas certified, and every job gets a free written quote first.",
    homes: [
      "Gravesend has Victorian terraces and period homes close to the centre and riverside, with estates and villages like Istead Rise further out. Older homes often have older boilers and pipework, and a service is the best way to catch problems before they leave you without heating.",
      "We cover Gravesend and Northfleet as part of our North Kent area, so you get the same Gas Safe registered engineer, written quote and tidy work as our customers closer to London.",
    ],
    landlords:
      "Gravesend has a lot of rented homes, and landlords need a gas safety certificate each year. We do the CP12 check from £75, issue the certificate and remind you before it expires.",
    aircon:
      "We fit wall-mounted air conditioning for bedrooms, home offices and extensions around Gravesend, as an F-Gas certified company.",
    reviewAreas: ["DA1", "DA5", "DA16"],
    faqs: [
      ["Do you cover Gravesend and Northfleet?", "Yes. Gravesend, Northfleet, Singlewell and Istead Rise are all in our North Kent area. Call us or use the quick price tool."],
      ["Do you charge extra to come out to Gravesend?", "No hidden charges. We quote the full price in writing before any work starts, and we'll tell you if there's anything extra."],
      ["How much is a boiler service in Gravesend?", "A standard annual gas boiler service is £100. With a landlord gas safety certificate at the same visit it's £155."],
    ],
  },
  {
    slug: "eltham",
    name: "Eltham",
    county: "London",
    postcodes: ["SE9"],
    nearby: ["New Eltham", "Well Hall", "Mottingham", "Kidbrooke", "Shooters Hill"],
    intro:
      "Boiler servicing, repairs and new boilers in Eltham, New Eltham, Well Hall and Mottingham, plus landlord gas safety certificates and home air conditioning. Gas Safe registered, F-Gas certified, and every job gets a free written quote first.",
    homes: [
      "Eltham has a lot of 1930s houses, Victorian terraces and the older cottage-style homes around Well Hall. These tend to have boilers tucked away in kitchen cupboards or airing cupboards, and plenty of period details we're careful to protect while we work.",
      "We work tidily and clear up after ourselves, which is the thing our customers mention most. If you've had a mess left in your home before, that's a good reason to choose us.",
    ],
    landlords:
      "Eltham has plenty of rented houses and flats. We do the CP12 gas safety check, give you the certificate and remind you before the next one is due, and we can book several properties together.",
    aircon:
      "Older Eltham houses and loft rooms can get warm in summer. We fit wall-mounted air conditioning, with neat pipe runs, and we're F-Gas certified.",
    reviewAreas: ["SE18", "SE3", "SE7"],
    faqs: [
      ["Do you cover Eltham and New Eltham?", "Yes. Eltham, New Eltham, Well Hall and Mottingham are all close to our South East London base. Call us for a date or use the quick price tool."],
      ["Do you work in a tidy way in period homes?", "Yes. We lay protection down, work carefully and clear up when we're finished. Tidy work is what customers mention most in our reviews."],
      ["How much is a boiler service in Eltham?", "A standard annual gas boiler service is £100, with no VAT to add."],
    ],
  },
  {
    slug: "blackheath",
    name: "Blackheath",
    county: "London",
    postcodes: ["SE3"],
    nearby: ["Westcombe Park", "Kidbrooke", "Lee Green", "Greenwich", "Charlton"],
    intro:
      "Boiler servicing, repairs and new boilers in Blackheath, Westcombe Park and Kidbrooke, plus landlord gas safety certificates and home air conditioning. Gas Safe registered, F-Gas certified, and every job gets a free written quote first.",
    homes: [
      "Blackheath has Georgian and Victorian houses, period flats and homes in conservation areas, where the work has to be done carefully and look right afterwards. Many of these homes have boilers in cupboards or kitchens with pipework that has been altered over many years.",
      "We pay attention to the details: tidy pipework, clean finishes and a clear explanation of what we've done. For larger jobs we can send photo reports as the work goes on, so you can see what's been done even when you're out.",
    ],
    landlords:
      "Blackheath has a lot of rented flats and houses. The CP12 for one appliance is £75, we issue the certificate on the day, and we remind you before the next one is due.",
    aircon:
      "Period homes and conservation areas have their own rules for outdoor units. We'll look at where the unit can go, tell you what to check with the council, and fit the system neatly. We're F-Gas certified.",
    reviewAreas: ["SE3", "SE7", "SE18"],
    faqs: [
      ["Do you cover Blackheath and Westcombe Park?", "Yes. Blackheath, Westcombe Park, Kidbrooke and Lee Green are all close to our base. Call us or use the quick price tool."],
      ["Do you do work in period homes?", "Yes. We work carefully in period and conservation area homes, and tell you in advance how we'll route pipework so it looks right afterwards."],
      ["Do you do landlord gas safety certificates in Blackheath?", "Yes. A certificate for one appliance is £75, and we can book several properties together."],
    ],
  },
  {
    slug: "chislehurst",
    name: "Chislehurst",
    county: "London",
    postcodes: ["BR7"],
    nearby: ["Elmstead", "Sundridge", "Mottingham", "Bickley"],
    intro:
      "Boiler servicing, repairs and new boilers in Chislehurst, Elmstead and the roads around them, plus landlord gas safety certificates and home air conditioning. Gas Safe registered, F-Gas certified, and every job gets a free written quote first.",
    homes: [
      "Chislehurst has larger detached and semi-detached houses, many with several bathrooms, extensions and mature gardens. Bigger homes need a boiler chosen for the whole house, and often benefit from a system boiler or a boiler fitted with multiple heating zones.",
      "If you're adding an extension or renovating, we can fit radiators or underfloor heating and connect it to the boiler, and give you a written quote for the whole job.",
    ],
    landlords:
      "Chislehurst has a number of rented houses and flats. We do the CP12 gas safety check, issue the certificate and remind you before the next one is due.",
    aircon:
      "Larger houses and extensions can be hard to keep cool. We fit single-room and multi-room air conditioning, as an F-Gas certified company, with tidy pipe runs.",
    reviewAreas: ["SE3", "DA5", "DA16"],
    faqs: [
      ["Do you cover Chislehurst and Elmstead?", "Yes. Chislehurst and the roads around it are in our area. Call us for a date or use the quick price tool."],
      ["Can you fit underfloor heating in an extension?", "Yes. We fit wet underfloor heating connected to your boiler. Prices start from £1,200 for rooms up to 10 square metres, not including the screed or floor."],
      ["Can you fit a new boiler in a bigger house?", "Yes. We size the boiler to the number of bathrooms and radiators, and give you a written quote before any work starts."],
    ],
  },
];

export const townBySlug = (slug) => towns.find((t) => t.slug === slug);
