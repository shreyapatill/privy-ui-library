import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Exclamation({
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
            d="M48.3046 15H30.7241C30.3642 15 30.0983 15.3355 30.1806 15.6859L38.3902 50.6352C38.7296 52.08 40.7906 52.0668 41.1115 50.6179L48.8496 15.679C48.9268 15.3304 48.6616 15 48.3046 15Z"
            fill={accentColor}
            stroke={accentColor}
            strokeWidth={4.18687}
            strokeLinecap="round"
          />
          <Circle cx="39.648" cy="62.5914" r="4.60555" fill={accentColor} />
        </Svg>
      );
    }