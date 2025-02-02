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
      <Circle cx="39.5" cy="40.4971" r="27.5" fill={accentColor} />
      <Path
        d="M33.6001 52.7971C33.6001 48.4217 37.6624 47.0675 39.6935 47.3279C44.5683 47.3276 46.1932 51.2345 45.787 52.7971"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
      <Path
        d="M42.7998 37.0972H53.2131"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M25.3999 36.9971H36.3999"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </Svg>
  );
}