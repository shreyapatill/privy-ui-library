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

export default function NoneDischarge({
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
      <Path d="M42.2284 47.7285L37.5142 51.4214" stroke={accentColor} strokeWidth="1.57143" strokeLinecap="round" />
      <Path
        d="M57.6288 34.0571H22.7431C22.6563 34.0571 22.5859 34.1275 22.5859 34.2143V40.6121C22.5859 40.6846 22.6325 40.7469 22.7028 40.7646C27.0499 41.8591 35.9581 46.3283 37.8818 55.7719C37.8968 55.8456 37.9616 55.9 38.0367 55.9H43.0931C43.1799 55.9 43.2501 55.8328 43.2517 55.746C43.3273 51.8181 46.2879 43.5861 57.664 40.7656C57.7344 40.7482 57.7859 40.6847 57.7859 40.6122V34.2143C57.7859 34.1275 57.7156 34.0571 57.6288 34.0571Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path d="M37.5132 43.635L42.856 49.6141" stroke={accentColor} strokeWidth="2.12355" strokeLinecap="round" />
      <Path d="M42.856 43.4856L37.5132 49.6142" stroke={accentColor} strokeWidth="2.12355" strokeLinecap="round" />
    </Svg>
  );
}