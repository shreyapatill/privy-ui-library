import React from "react";
import Svg, { Rect, Path, Circle, Ellipse } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function Stressed({
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
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M56.7122 36.6419L48.5725 47.1555L57.8759 46.5737L50.0883 56.802"
        stroke={secondaryAccentColor}
        strokeWidth="3.16092"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M42.6094 17.91L35.5365 32.0914L45.13 29.8613L38.3854 43.6365"
        stroke={secondaryAccentColor}
        strokeWidth="3.16092"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.4139 36.1568L22.1817 49.4331L30.0597 44.2746L28.003 57.1252"
        stroke={secondaryAccentColor}
        strokeWidth="3.16092"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}