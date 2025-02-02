import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
};

export default function Energy({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  textColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Rect x="0.0195312" width="90" height="90" rx="15" fill={fillColor} />

    </Svg>
  );
}