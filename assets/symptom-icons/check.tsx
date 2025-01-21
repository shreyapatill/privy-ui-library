import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Check({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
      <Circle cx="40.0195" cy="39.9971" r="39" fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      <Path
        d="M18.4219 42.1022L34.4045 52.2371L61.8619 27.9971"
        stroke={accentColor}
        strokeWidth={6}
        strokeLinecap="round"
      />
    </Svg>
  );
}