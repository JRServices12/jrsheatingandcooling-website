// Price breakdowns shown on each service page. Built from quote-prices.js,
// so changing a price there updates the quote tool and the service pages together.
import { quotePrices as P } from "./quote-prices.js";

const gbp = (n) => "£" + Number(n).toLocaleString("en-GB");
const r = (v) => (Array.isArray(v) ? (v[0] === v[1] ? gbp(v[0]) : `${gbp(v[0])} to ${gbp(v[1])}`) : gbp(v));
const low = (v) => (Array.isArray(v) ? v[0] : v);

export const servicePrices = {
  "boiler-repair-servicing": {
    title: "Boiler servicing and repairs",
    headline: gbp(P.boilerService),
    headlineLabel: "Annual boiler service",
    rows: [
      ["Annual gas boiler service", r(P.boilerService)],
      ["Boiler service and landlord gas safety certificate", r(P.landlordCertWithService)],
      ["Boiler repair call-out, to find the fault", `From ${gbp(P.repairCallout)}, plus parts`],
    ],
    note: "Parts and any extra time on a repair are priced before I go ahead.",
  },
  "landlord-gas-safety-certificates": {
    title: "Landlord gas safety certificates",
    headline: gbp(P.landlordCert),
    headlineLabel: "Certificate for one gas appliance",
    rows: [
      ["Gas safety certificate, 1 appliance (usually the boiler)", r(P.landlordCert)],
      ["Each extra gas appliance (hob, oven, fire)", `+${gbp(P.landlordExtraAppliance)}`],
      ["Certificate and boiler service together", r(P.landlordCertWithService)],
    ],
    note: "Got several properties? Ask about booking them together.",
  },
  "boiler-installation": {
    title: "New boilers, fitted",
    headline: `From ${gbp(low(P.combiSwap))}`,
    headlineLabel: "New combi boiler, fitted",
    rows: [
      ["Combi boiler replaced with a new combi", r(P.combiSwap)],
      ["Tanks or cylinder system changed to a combi", r(P.conversionToCombi)],
      ["System or conventional boiler, like for like", r(P.systemSwap)],
      ["Moving the boiler to a new place", `+${r(P.boilerMoveExtra)}`],
    ],
    note: "Prices include the boiler, a system clean and Gas Safe registration. The exact price depends on the boiler you choose.",
  },
  "power-flushing": {
    title: "Power flushing",
    headline: `From ${gbp(low(P.powerFlush.upTo6))}`,
    headlineLabel: "Power flush, up to 6 radiators",
    rows: [
      ["Up to 6 radiators", r(P.powerFlush.upTo6)],
      ["7 to 10 radiators", r(P.powerFlush.upTo10)],
      ["11 to 15 radiators", r(P.powerFlush.upTo15)],
      ["16 or more radiators", `From ${gbp(low(P.powerFlush.over15))}`],
    ],
    note: "Includes the cleaning chemicals and inhibitor to protect the system afterwards.",
  },
  "radiators-central-heating": {
    title: "Radiators and valves",
    headline: `From ${gbp(low(P.radiatorReplace))}`,
    headlineLabel: "Per radiator",
    rows: [
      ["Replace an existing radiator", `${r(P.radiatorReplace)} each`],
      ["Add a new radiator to the system", `${r(P.radiatorNew)} each`],
      ["Move a radiator", `${r(P.radiatorMove)} each`],
      ["Fit a thermostatic radiator valve (TRV)", `${r(P.trvValve)} each`],
    ],
    note: "The price depends on the size and style of radiator. Heating repairs are quoted once I've found the fault.",
  },
  "underfloor-heating": {
    title: "Underfloor heating",
    headline: `From ${gbp(low(P.underfloor.small))}`,
    headlineLabel: "Up to 10 m²",
    rows: [
      ["Up to 10 m², such as a bathroom", r(P.underfloor.small)],
      ["10 to 20 m², such as a kitchen", r(P.underfloor.medium)],
      ["20 to 40 m², such as an extension", r(P.underfloor.large)],
    ],
    note: "Covers the pipework, manifold and controls, connected to your boiler. Screed and floor finishes are not included.",
  },
  "air-conditioning-installation": {
    title: "Air conditioning, supplied and fitted",
    headline: `From ${gbp(low(P.ac1Room))}`,
    headlineLabel: "One room",
    rows: [
      ["1 room", r(P.ac1Room)],
      ["2 rooms", r(P.ac2Rooms)],
      ["3 rooms", r(P.ac3Rooms)],
      ["Large room or open-plan space", `+${r(P.acLargeRoomExtra)} per room`],
    ],
    note: "Includes the indoor and outdoor units, fitting, testing and commissioning.",
  },
};
