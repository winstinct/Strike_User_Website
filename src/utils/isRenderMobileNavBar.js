export const isRenderMobileNavBar = (location) => {
  const locationPath = location?.pathname;
  if (
    locationPath == "/" ||
    locationPath == "/offers" ||
    locationPath == "/tickets" ||
    locationPath == "/wallet" ||
    locationPath == "/profile" ||
    locationPath == "/profile/location-details" ||
    locationPath == "/profile/contact-details" ||
    locationPath == "/become-public-agent" || 
    locationPath == "/become-public-agent/bank-details-public-agent" || 
    locationPath == "/menu"
  ) {
    return true;
  }
  return false;
};
