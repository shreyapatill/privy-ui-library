import React from "react";
import Svg, { Rect, Path, Circle, Line } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function Reserved({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  secondaryAccentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40" cy="40" r="27.4055" fill={accentColor} stroke={accentColor} strokeWidth="0.18902" />
      <Path
        d="M44.0859 33.8715H54.4998"
        stroke={secondaryAccentColor}
        strokeWidth="1.72857"
        strokeLinecap="round"
      />
      <Path
        d="M25.543 33.8715H35.9568"
        stroke={secondaryAccentColor}
        strokeWidth="1.72857"
        strokeLinecap="round"
      />
      <Line
        x1="52.747"
        y1="48.4662"
        x2="52.8658"
        y2="53.338"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Line
        x1="33.2612"
        y1="48.4662"
        x2="33.38"
        y2="53.338"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Line
        x1="38.1328"
        y1="48.4662"
        x2="38.2516"
        y2="53.338"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Line
        x1="43.0043"
        y1="48.4662"
        x2="43.1232"
        y2="53.338"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Line
        x1="47.8754"
        y1="48.4662"
        x2="47.9943"
        y2="53.338"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M22.8716 50.84L57.2859 50.8427"
        stroke={secondaryAccentColor}
        strokeWidth="2.04286"
        strokeLinecap="round"
      />
      <Line
        x1="28.0756"
        y1="48.6233"
        x2="28.1945"
        y2="53.4952"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
    </Svg>
  );
}