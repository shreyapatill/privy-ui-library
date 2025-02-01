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

export default function Carbs({
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
      <Circle cx="40.5" cy="40.5" r="27." fill={accentColor}/>
      <Path 
        d="M29.6654 26.9993C26.3099 28.4943 21.5082 31.036 27.8074 36.8537C28.1398 37.1607 28.3309 37.5991 28.3067 38.051L27.6438 50.4006C27.6389 50.4929 27.6251 50.5831 27.6048 50.6733C27.0614 53.0842 27.4201 57.6527 33.0631 57.6527H47.8741C48.0215 57.6527 48.1679 57.63 48.3094 57.5886C50.372 56.9842 52.4965 56.8122 52.4965 53.8348V38.6741C52.4965 38.0869 52.8578 37.5686 53.3308 37.2206C56.1821 35.1229 58.2929 29.0093 51.8853 27.3615C41.032 24.5703 32.5985 26.0866 29.6654 26.9993Z" 
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        stroke-width="1.46667"
      />
    </Svg>
  );
}