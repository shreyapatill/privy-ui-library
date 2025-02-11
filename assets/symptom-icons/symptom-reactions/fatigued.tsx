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

export default function Vivid({
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
      <Circle cx="39.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M32.1074 22.4288V27.1431C32.1074 27.577 31.7556 27.9288 31.3217 27.9288H27.713C27.279 27.9288 26.9272 28.2806 26.9272 28.7145V58.5716C26.9272 59.0056 27.279 59.3574 27.713 59.3574H51.4415C51.8755 59.3574 52.2272 59.0056 52.2272 58.5716V28.7145C52.2272 28.2806 51.8755 27.9288 51.4415 27.9288H47.6827C47.2488 27.9288 46.897 27.577 46.897 27.1431V22.4288C46.897 21.9948 46.5452 21.6431 46.1113 21.6431H32.8931C32.4591 21.6431 32.1074 21.9948 32.1074 22.4288Z"
        stroke={secondaryAccentColor}
        strokeWidth="2.82857"
      />
      <Rect x="29.5986" y="51.186" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      <Rect x="29.5986" y="44.9001" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
    </Svg>
  );
}