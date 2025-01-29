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

export default function Period({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  secondaryAccentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40.0029" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M66.0924 27.31C53.2476 28.8043 32.9315 29.8264 12.0411 27.1968C10.073 26.9491 8.83108 29.7943 10.3179 31.1074C17.63 37.5654 27.3595 47.9021 33.014 59.5523C33.3326 60.2086 33.9928 60.6338 34.7223 60.6338H45.0381C45.8701 60.6338 46.5969 60.0829 46.8761 59.2992C49.0092 53.3112 55.3673 41.8624 67.8007 31.4419C69.3564 30.138 68.1087 27.0754 66.0924 27.31Z"
        fill={accentColor}
      />
      <Path
        d="M11.5 30.5002C33.2143 37.4809 55.6429 30.3656 66.5 31.0002"
        stroke={secondaryAccentColor}
        strokeWidth="1.8684"
        strokeLinecap="round"
      />
    </Svg>
  );
}