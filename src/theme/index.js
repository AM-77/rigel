export const colors = {
  main: '#119955',
  black: '#000000',
  white: '#ffffff',
  grey: '#efefef',
  darkgrey: '#666666',
  dark: '#212121',
  light: '#f1f2f3',
  shadow: 'rgba(0, 0, 0, 0.2)',
  lightershadow: 'rgba(0, 0, 0, 0.1)',

  // light theme
  primary: '#fefefe',
  secondary: '#212121',
  lightWrap: '#f1f2f3',

  // dark theme
  darkPrimary: '#212121',
  darkSecondary: '#fefefe',
  darkWrap: '#191919',
};

export const lightTheme = {
  main: colors.main,
  dark: colors.dark,
  light: colors.light,
  grey: colors.grey,
  darkgrey: colors.darkgrey,
  primary: colors.primary,
  secondary: colors.secondary,
  body: colors.primary,
  text: colors.secondary,
  shadow: colors.shadow,
  lightershadow: colors.lightershadow,
  wrap: colors.lightWrap,
};

export const darkTheme = {
  main: colors.main,
  dark: colors.dark,
  light: colors.light,
  grey: colors.grey,
  darkgrey: colors.darkgrey,
  primary: colors.darkPrimary,
  secondary: colors.darkSecondary,
  body: colors.darkPrimary,
  text: colors.darkSecondary,
  shadow: colors.shadow,
  lightershadow: colors.lightershadow,
  wrap: colors.darkWrap,
};

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
  desktopL: `(max-width: ${sizes.desktop})`,
};
