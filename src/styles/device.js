const size = {
  mobile: "320px",
  preMobileTablet: "479px",
  mobileTablet: "480px",
  preTablet: "767px",
  tablet: "768px",
  preLaptop: "1279px",
  laptop: "1280px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  preMobileTablet: `(max-width: ${size.preMobileTablet})`,
  mobileTablet: `(min-width: ${size.mobileTablet})`,
  preTablet: `(max-width: ${size.preTablet})`,
  tablet: `(min-width: ${size.tablet})`,
  preLaptop: `(max-width: ${size.preLaptop})`,
  laptop: `(min-width: ${size.laptop})`,
};
