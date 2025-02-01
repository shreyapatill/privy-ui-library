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

export default function NormalScalp({
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
        d="M19.2852 45.0576H32.2132C32.5222 45.0576 32.805 45.2464 32.9363 45.5261C37.8433 55.9836 43.9544 54.5609 47.913 45.5428C48.0404 45.2527 48.3272 45.0576 48.644 45.0576H61.8709"     
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Path 
        d="M38.6987 47.4612C37.129 44.3885 37.6881 34.6144 40.3263 18.539C40.3848 18.1826 40.8971 18.1865 40.9433 18.5447C42.4747 30.4141 44.2306 44.5517 42.3663 47.4612C41.5763 49.1836 39.6467 49.782 38.6987 47.4612Z"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
    </Svg>
  );
}