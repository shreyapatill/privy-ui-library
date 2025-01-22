import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function BirthControl({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 90 90" fill="none">
      <Rect width="90" height="90" rx="15" fill={fillColor} />
      <Path
        d="M69.1636 70.1514L79.9205 83"
        stroke={accentColor}
        strokeWidth="2.39044"
        strokeLinecap="round"
      />
      <Path
        d="M10 28.9163L33.9044 8"
        stroke={accentColor}
        strokeWidth="2.98805"
        strokeLinecap="round"
      />
      <Rect
        width="37.6513"
        height="22.2393"
        rx="1.49402"
        transform="matrix(0.673363 0.739312 -0.76085 0.648928 33.6875 14.902)"
        fill={accentColor}
      />
      <Path
        d="M45.5576 41.4662L55.717 33.3984"
        stroke={fillColor}
        strokeWidth="2.39044"
        strokeLinecap="round"
      />
      <Rect
        width="23.032"
        height="15.1238"
        rx="1.49402"
        transform="matrix(0.671674 0.740847 -0.762317 0.647204 57.167 46.3319)"
        fill={accentColor}
      />
      <Path
        d="M33.9043 28.9163L44.0637 20.5498"
        stroke={fillColor}
        strokeWidth="2.39044"
        strokeLinecap="round"
      />
      <Path
        d="M37.7891 32.8007L47.9484 24.4342"
        stroke={fillColor}
        strokeWidth="2.39044"
        strokeLinecap="round"
      />
      <Path
        d="M41.9722 36.9841L52.1315 28.9164"
        stroke={fillColor}
        strokeWidth="2.39044"
        strokeLinecap="round"
      />
    </Svg>
  );
}