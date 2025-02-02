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

export default function Irritable({
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
        d="M27.7998 30L36.2331 34.62L27.7998 39.0933"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M54.0337 39.0933L45.6004 34.4733L54.0337 29.9999"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M26 55.0001L30 48.6001L33.9 55.0001L37.7 48.6001L41.3 55.0001L44.9 48.6001L48.2 55.0001L51.5 48.6001L55.4 55.0001"
        stroke={secondaryAccentColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}