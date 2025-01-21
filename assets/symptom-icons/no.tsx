import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function No({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
    return (
        <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
        <Circle cx="40.0195" cy="40" r="39" stroke={strokeColor} strokeWidth={2} fill={fillColor}/>
        <Circle cx="39.789" cy="39.789" r="21.4101" stroke={accentColor} strokeWidth={4.7578} />
        <Path
          d="M50.5727 21.8684L29.9556 58.0277"
          stroke={accentColor}
          strokeWidth={4.7578}
          strokeLinecap="round"
        />
      </Svg>
    );
    }