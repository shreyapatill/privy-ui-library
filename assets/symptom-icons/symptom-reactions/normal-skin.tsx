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

export default function NormalSkin({
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
      <Circle cx="40.5" cy="40.5" r="27." fill={accentColor}/>
      <Path
        d="M26.9326 36.0265C26.9326 31.9426 30.0751 30.6785 31.6464 30.9216C35.4174 30.9213 36.6744 34.568 36.3601 36.0265"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M44.2993 36.0256C44.2993 31.9416 47.4418 30.6775 49.0131 30.9206C52.7841 30.9203 54.0411 34.567 53.7268 36.0256"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M46.7095 48.7849C46.7095 53.1607 42.6691 54.5151 40.6489 54.2546C35.8004 54.2549 34.1842 50.3477 34.5882 48.7849"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
    </Svg>
  );
}