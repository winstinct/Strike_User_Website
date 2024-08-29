export const isRenderFaqSidebar = (location) => {
  const locationPath = location?.pathname;
  if (
    locationPath == "/deposit" ||
    locationPath == "/wallet/deposit" ||
    locationPath == "/wallet" ||
    locationPath == "/withdraw" ||
    locationPath == "/withdraw-submitted" ||
    locationPath == "/withdraw-requests-history" ||
    locationPath == "/agents" ||
    locationPath == "/agents/agents-history"
  ) {
    return true;
  }
  return false;
};
