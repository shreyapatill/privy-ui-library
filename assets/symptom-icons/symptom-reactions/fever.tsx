import React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function Fever({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  secondaryAccentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40" cy="40" r="27.5" fill={accentColor} />
      <Path
        d="M26.7998 37.1917L35.4751 32.3"
        stroke={secondaryAccentColor}
        strokeWidth="1.72857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30.1001 52.2571C30.1001 48.1318 36.72 46.8549 40.03 47.1005C47.9739 47.1002 50.6218 50.7838 49.9598 52.2571"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path
        d="M44.3999 32.3L53.0132 37.3"
        stroke={secondaryAccentColor}
        strokeWidth="1.72857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M45.0273 47.5429L53.0416 43.7715"
        stroke={secondaryAccentColor}
        strokeWidth="2.04286"
        strokeLinecap="round"
      />
      <Circle cx="53.8277" cy="43.2998" r="2.59286" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.157143" />
    </Svg>
  );
}