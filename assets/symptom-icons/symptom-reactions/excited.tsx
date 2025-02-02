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

export default function Excited({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  secondaryAccentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path
        d="M28.7998 29.9971L37.2331 34.6171L28.7998 39.0904"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M40.4816 56.9499C44.325 57.3527 52.0117 55.2581 52.0117 48.4909H28.9515C28.1828 50.9078 31.2575 56.9504 40.4816 56.9499Z"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M53.1133 39.1772L44.6799 34.5572L53.1133 30.0839"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}