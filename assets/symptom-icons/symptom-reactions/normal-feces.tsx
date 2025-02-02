import React from "react";
import Svg, { Path, Circle, Ellipse } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function NormalFeces({
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
      <Ellipse cx="39.6836" cy="40.5618" rx="27.5" ry="27.5003" fill={accentColor} />
      <Path d="M41.4125 47.7902L36.6982 51.4831" stroke={accentColor} strokeWidth="1.57144" strokeLinecap="round" />
      <Path d="M22.3999 40.0906L36.6617 49.5469C36.7776 49.6237 36.9302 49.6153 37.0369 49.5261L56.9713 32.8619" stroke={secondaryAccentColor} strokeWidth="4" strokeLinecap="round" />
    </Svg>
  );
}