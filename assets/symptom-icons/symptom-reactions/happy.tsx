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

export default function Happy({
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
        d="M26.9321 36.0278C26.9321 31.9438 30.0746 30.6797 31.6459 30.9228C35.4169 30.9225 36.6739 34.5692 36.3597 36.0278"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
      <Path
        d="M44.2983 36.0268C44.2983 31.9428 47.4408 30.6787 49.0121 30.9218C52.7831 30.9216 54.0401 34.5682 53.7259 36.0268"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
      <Path
        d="M46.7095 48.7857C46.7095 53.1614 42.6691 54.5158 40.6489 54.2553C35.8004 54.2556 34.1842 50.3484 34.5882 48.7857"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
    </Svg>
  );
}