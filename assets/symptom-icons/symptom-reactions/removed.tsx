import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Removed({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
    return (
        <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
            <Circle cx="40.0547" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
            <Path
            d="M40.5195 11L40.5195 63M40.5195 63L57.0195 41.5M40.5195 63L24.0195 41.5"
            stroke={accentColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </Svg>
      );
    }