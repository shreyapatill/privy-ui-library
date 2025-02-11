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
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M33.1074 22.4288V27.1431C33.1074 27.577 32.7556 27.9288 32.3217 27.9288H28.713C28.279 27.9288 27.9272 28.2806 27.9272 28.7145V58.5716C27.9272 59.0056 28.279 59.3574 28.713 59.3574H52.4415C52.8755 59.3574 53.2272 59.0056 53.2272 58.5716V28.7145C53.2272 28.2806 52.8755 27.9288 52.4415 27.9288H48.6827C48.2488 27.9288 47.897 27.577 47.897 27.1431V22.4288C47.897 21.9948 47.5452 21.6431 47.1113 21.6431H33.8931C33.4591 21.6431 33.1074 21.9948 33.1074 22.4288Z"
        stroke={secondaryAccentColor}
        strokeWidth="2.82857"
      />
      <Rect x="30.5986" y="51.186" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      <Rect x="30.5986" y="44.9001" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      <Rect x="30.5986" y="38.6145" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      <Rect x="30.5986" y="32.3289" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
    </Svg>
  );
}