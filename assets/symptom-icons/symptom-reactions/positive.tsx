import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Positive({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
      <Circle cx="40.0234" cy="39.999" r="39" stroke={strokeColor} strokeWidth="2" />
      <Path
        d="M80.0195 40C80.0195 62.0914 62.1109 80 40.0195 80C17.9281 80 0.0195312 62.0914 0.0195312 40C0.0195312 17.9086 17.9281 0 40.0195 0C62.1109 0 80.0195 17.9086 80.0195 40Z"
        fill={fillColor}
      />
      <Path
        d="M39.0417 17V63M17 38.4667H63"
        stroke={accentColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}