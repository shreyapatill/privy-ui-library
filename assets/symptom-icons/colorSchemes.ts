import { colors } from "@/constants/colors";

export const colorSchemes = {
  blushEmpty: {
    fillColor: "transparent",
    strokeColor: colors.neutrals.timberGrey,
    accentColor: colors.primary.paleBlush
  },
  blushFilled: {
    fillColor: colors.primary.blushShell,  // circle fill
    strokeColor: colors.primary.blushShell,
    accentColor: colors.primary.paleBlush
  },
  springEmpty: {
    fillColor: "transparent",
    strokeColor: colors.neutrals.timberGrey,
    accentColor: colors.secondary.coralSpring,
    secondaryAccentColor: colors.secondary.springMelon,
    textColor: colors.neutrals.nightStorm
  },
  springFilled: {
    fillColor: colors.secondary.springMelon,
    strokeColor: colors.secondary.springMelon,
    accentColor: colors.secondary.coralSpring,
    secondaryAccentColor: colors.secondary.springMelon,
    textColor: colors.neutrals.nightStorm
  },  
  fawnEmpty: {
    fillColor: "transparent",
    strokeColor: colors.neutrals.timberGrey,
    accentColor: colors.secondary.ochreFawn,
    secondaryAccentColor: colors.secondary.fawnSun,
    textColor: colors.neutrals.nightStorm
  },
  fawnFilled: {
    fillColor: colors.secondary.fawnSun,
    strokeColor: colors.secondary.fawnSun,
    accentColor: colors.secondary.ochreFawn,
    secondaryAccentColor: colors.secondary.fawnSun,
    textColor: colors.neutrals.nightStorm
  },  
};