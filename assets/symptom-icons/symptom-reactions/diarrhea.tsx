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

export default function Diarrhea({
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
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path d="M24.6424 56.7326C21.6628 54.5198 22.8956 47.276 28.2384 35.3143C32.5155 44.1846 34.7606 54.6033 31.1643 56.7326C29.7259 57.9225 26.3684 58.3359 24.6424 56.7326Z" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="1.57143" />
      <Path d="M48.9993 56.7326C46.0197 54.5198 47.2525 47.276 52.5954 35.3143C56.8724 44.1846 59.1175 54.6033 55.5212 56.7326C54.0828 57.9225 50.7254 58.3359 48.9993 56.7326Z" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="1.57143" />
      <Path d="M37.3709 41.9612C34.3913 39.7484 35.6241 32.5045 40.9669 20.5429C45.244 29.4132 47.4891 39.8319 43.8928 41.9612C42.4544 43.1511 39.097 43.5644 37.3709 41.9612Z" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="1.57143" />
    </Svg>
  );
}