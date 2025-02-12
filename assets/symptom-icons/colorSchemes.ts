import { colors } from "@/constants/colors";

export const colorSchemes = {
  blushEmpty: {
    fillColor: "transparent",
    strokeColor: colors.neutrals.timberGrey,
    accentColor: colors.primary.paleBlush,
  },
  blushFilled: {
    fillColor: colors.primary.blushShell,
    strokeColor: colors.primary.blushShell,
    accentColor: colors.primary.paleBlush,
  },
  springEmpty: {
    fillColor: "transparent",
    strokeColor: colors.neutrals.timberGrey,
    accentColor: colors.secondary.coralSpring,
    secondaryAccentColor: colors.secondary.springMelon,
    textColor: colors.neutrals.nightStorm,
  },
  springFilled: {
    fillColor: colors.secondary.springMelon,
    strokeColor: colors.secondary.springMelon,
    accentColor: colors.secondary.coralSpring,
    secondaryAccentColor: colors.secondary.springMelon,
    textColor: colors.neutrals.nightStorm,
  },
  fawnEmpty: {
    fillColor: "transparent",
    strokeColor: colors.neutrals.timberGrey,
    accentColor: colors.secondary.ochreFawn,
    secondaryAccentColor: colors.secondary.fawnSun,
    textColor: colors.neutrals.nightStorm,
  },
  fawnFilled: {
    fillColor: colors.secondary.fawnSun,
    strokeColor: colors.secondary.fawnSun,
    accentColor: colors.secondary.ochreFawn,
    secondaryAccentColor: colors.secondary.fawnSun,
    textColor: colors.neutrals.nightStorm,
  },
  greenEmpty: {
    fillColor: "transparent",
    strokeColor: colors.neutrals.timberGrey,
    accentColor: colors.tertiary.viridianGreen,
    secondaryAccentColor: colors.tertiary.greenDew,
  },
  greenFilled: {
    fillColor: colors.tertiary.greenDew,
    strokeColor: colors.tertiary.greenDew,
    accentColor: colors.tertiary.viridianGreen,
    secondaryAccentColor: colors.tertiary.greenDew,
    textColor: colors.neutrals.nightStorm,
  },
  tealEmpty: {
    fillColor: "transparent",
    strokeColor: colors.neutrals.timberGrey,
    accentColor: colors.tertiary.lightTeal,
    secondaryAccentColor: colors.tertiary.tealDew,
  },
  tealFilled: {
    fillColor: colors.tertiary.tealDew,
    strokeColor: colors.tertiary.tealDew,
    accentColor: colors.tertiary.lightTeal,
    secondaryAccentColor: colors.tertiary.tealDew,
    textColor: colors.neutrals.nightStorm,
  },
  roseGreyEmpty: {
    fillColor: colors.neutrals.floralWhite,
    strokeColor: colors.neutrals.timberGrey,
    accentColor: colors.neutrals.slateAsh,
    secondaryAccentColor: colors.neutrals.slateAsh,
  },
  roseGreyFilled: {
    fillColor: colors.neutrals.floralWhite,
    strokeColor: colors.primary.duskyRose,
    accentColor: colors.primary.roseTea,
    secondaryAccentColor: colors.primary.duskyRose,
  },
};