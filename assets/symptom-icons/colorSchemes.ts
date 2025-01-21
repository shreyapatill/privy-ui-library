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
};