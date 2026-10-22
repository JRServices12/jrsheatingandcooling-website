// Prices used by the online quote tool (/quote/).
// Each price is either one number (e.g. 100) or a range [from, to] (e.g. [1800, 2400]).
// Leave a price as null and the tool says "I'll confirm the price after seeing your photos" instead.
// All prices are rough guides only. Customers are told the final price is confirmed first.
// Not VAT registered, so no VAT is added. Prices checked and agreed by Jordan, 22 October 2026.

export const quotePrices = {
  // Boiler servicing
  boilerService: 100,               // standard annual boiler service
  landlordCertWithService: 155,    // boiler service + landlord gas safety certificate together

  // Boiler repairs
  repairCallout: 85,              // call-out / diagnosis (shown as "from £X, plus any parts")

  // Landlord gas safety certificates
  landlordCert: 75,               // certificate for one gas appliance (usually the boiler)
  landlordExtraAppliance: 20,     // each extra appliance (gas hob, oven, fire)

  // New boilers (fitted price, including the boiler)
  combiSwap: [2200, 3000],                  // combi replaced with a new combi, same place
  conversionToCombi: [3500, 4800],          // tanks/cylinder system changed to a combi
  systemSwap: [2500, 3600],                 // system or conventional boiler replaced like for like (keeping the cylinder)
  boilerMoveExtra: [500, 1200],            // extra for moving the boiler to a new place

  // Power flushing, by number of radiators
  powerFlush: { upTo6: [400, 450], upTo10: [450, 550], upTo15: [550, 680], over15: [680, 880] },

  // Radiators (price per radiator / per valve)
  radiatorReplace: [200, 350],            // swap an existing radiator for a new one
  radiatorNew: [400, 600],                // add a new radiator onto the system
  radiatorMove: [200, 400],               // move a radiator to a different spot
  trvValve: [40, 60],                   // fit a thermostatic radiator valve

  // Underfloor heating (wet), by room size
  underfloor: { small: [1200, 1900], medium: [1900, 3200], large: [3200, 5500] },  // up to 10 m², 10–20 m², 20–40 m²

  // Air conditioning (single split per room)
  ac1Room: [2000, 2800],
  ac2Rooms: [3500, 4800],
  ac3Rooms: [4500, 6000],
  acLargeRoomExtra: [300, 600],           // extra for a bigger unit in a large room or open-plan space
};
