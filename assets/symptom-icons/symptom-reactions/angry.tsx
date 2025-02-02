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
        d="M28.1616 29.4536L37.2384 36.2464"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M44.6176 36.231L53.6161 29.3691"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M31.2002 53.4C31.2002 48.1496 37.6353 46.5245 40.8529 46.837C48.575 46.8367 51.149 51.5249 50.5055 53.4"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
      <Circle cx="49.7998" cy="35.8" r="2.9" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.2" />
      <Circle cx="31.7998" cy="35.8" r="2.9" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.2" />
    </Svg>
  );
}