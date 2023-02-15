const phoneLimit = 570;
const tabletLimit = 1000;
const desktopLimit = 1200;

export const matchMediaQueryList = {
  mobile: `(max-width: ${phoneLimit}px)`,
  upMobile: `(min-width:${phoneLimit + 1}px)`,
  tablet: `(min-width:${phoneLimit + 1}px) and (max-width: ${tabletLimit}px)`,
  upTablet: `(min-width:${tabletLimit + 1}px)`,
  desktop: `(min-width:${tabletLimit + 1}px) and (max-width: ${desktopLimit}px)`,
  upDesktop: `(min-width:${desktopLimit + 1}px)`,
  large: `(min-width:${desktopLimit + 1}px)`,
};
