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

export default function Calm({
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
      <Circle cx="40" cy="40" r="27.5" fill={accentColor} />
      <Path
        d="M26.3599 49.6799C38.3279 58.3919 49.6799 53.3099 53.8599 49.6799"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M24.1602 34.61C29.2202 29 33.5468 32.1533 35.6002 34.61"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M43.96 34.5529C49.02 28.9429 53.3466 32.0962 55.4 34.5529"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </Svg>
  );
}