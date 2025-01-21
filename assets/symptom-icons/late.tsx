import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Late({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
    return (
        <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
          <Circle cx="40.0195" cy="40" r="39" stroke={strokeColor} strokeWidth={2} fill={fillColor}/>
          <Path
            d="M40.0195 17V48.7896C40.0195 49.3434 40.6045 49.7018 41.0979 49.4502L68.3847 35.5393"
            stroke={accentColor}
            strokeWidth={5.5618}
            strokeLinecap="round"
          />
        </Svg>
      );
    }