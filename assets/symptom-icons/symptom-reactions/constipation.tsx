import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function Constipation({
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
      <Circle cx="40.5" cy="40.5" r="27.4055" fill={accentColor} stroke={accentColor} strokeWidth="0.18902" />
      <Path d="M42.2284 47.7286L37.5142 51.4214" stroke={accentColor} strokeWidth="1.57143" strokeLinecap="round" />
      <Path d="M39.298 21.2619C39.8776 20.2944 41.2796 20.2944 41.8592 21.2619L59.7035 51.0471C60.2997 52.0421 59.5829 53.3072 58.4229 53.3072H22.7343C21.5744 53.3072 20.8576 52.0421 21.4537 51.0471L39.298 21.2619Z" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.157143" />
      <Path d="M43.5707 32.1714H37.9083C37.7069 32.1714 37.5575 32.3581 37.6016 32.5545L40.0426 43.4274C40.2274 44.2507 41.4032 44.2435 41.5779 43.418L43.8782 32.5508C43.9195 32.3553 43.7705 32.1714 43.5707 32.1714Z" fill={accentColor} stroke={accentColor} strokeWidth="2.35714" strokeLinecap="round" />
      <Circle cx="40.6579" cy="49.3" r="2.27857" fill={accentColor} stroke={accentColor} strokeWidth="0.157143" />
    </Svg>
  );
}