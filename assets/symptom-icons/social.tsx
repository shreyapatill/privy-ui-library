import React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
};

export default function Social({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Rect x="0.0195312" width="90" height="90" rx="15" fill={fillColor} />
      <Circle cx="45.5" cy="45.5" r="33.5" fill={accentColor} />
      <Path
        d="M26.9038 57.7874V32.3258C26.9038 31.91 27.2409 31.573 27.6566 31.573H61.927C62.3428 31.573 62.6798 31.91 62.6798 32.3258V53.8143C62.6798 53.9322 62.7075 54.0486 62.7608 54.1539L66.4884 61.5283C66.8035 62.1517 66.1734 62.8308 65.5281 62.5633L55.9653 58.5977C55.8739 58.5598 55.7759 58.5402 55.677 58.5402H27.6566C27.2409 58.5402 26.9038 58.2032 26.9038 57.7874Z"
        fill={strokeColor}
        stroke={strokeColor}
        strokeWidth="3.76405"
      />
    </Svg>
  );
}