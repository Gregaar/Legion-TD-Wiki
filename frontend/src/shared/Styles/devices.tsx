const size = {
  mobileS: {
    min: "320px",
    max: "374px",
  },
  mobileM: {
    min: "375px",
    max: "424px",
  },
  mobileL: {
    min: "425px",
    max: "767px",
  },
  tablet: {
    min: "768px",
    max: "1023px",
  },
  laptop: {
    min: "1024px",
    max: "1439px",
  },
  laptopL: {
    min: "1440px",
    max: "1919px",
  },
};

export default {
  mobileS: `(min-width: ${size.mobileS.min}) and (max-width: ${size.mobileS.max})`,
  mobileM: `(min-width: ${size.mobileM.min}) and (max-width: ${size.mobileM.max})`,
  mobileL: `(min-width: ${size.mobileL.min}) and (max-width: ${size.mobileL.max})`,
  tablet: `(min-width: ${size.tablet.min}) and (max-width: ${size.tablet.max})`,
  laptop: `(min-width: ${size.laptop.min}) and (max-width: ${size.laptop.max})`,
  laptopL: `(min-width: ${size.laptopL.min}) and (max-width: ${size.laptopL.max})`,
};
