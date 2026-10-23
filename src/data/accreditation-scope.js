// Decides which accreditation logos to show on a page.
//   "air"  = air conditioning pages: REFCOM F-Gas only
//   "gas"  = boiler, heating, plumbing and landlord pages: Gas Safe only
//   "both" = everywhere else (home, about, contact, towns and so on)
export function accreditationScope(pathname) {
  if (pathname.startsWith("/air-conditioning") || pathname.startsWith("/services/air-conditioning")) return "air";
  const gasPrefixes = ["/boilers", "/services/", "/plumbing", "/cp12-certificate", "/emergency-boiler-repair"];
  if (gasPrefixes.some((p) => pathname.startsWith(p))) return "gas";
  return "both";
}
