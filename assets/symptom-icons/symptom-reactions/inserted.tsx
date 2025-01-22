import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Inserted({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
    return (
      <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
        <Circle cx="40.043" cy="39.999" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
        <Path
            d="M40.5195 63V11M40.5195 11L24.0195 32.5M40.5195 11L57.0195 32.5"
            stroke={accentColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </Svg>
      );
    }