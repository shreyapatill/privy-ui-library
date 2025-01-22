import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Ring({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Rect x="0.0585938" width="90" height="90" rx="15" fill={fillColor} />
      <Path
        d="M57.2061 14.1697C42.5312 17.4404 57.2056 51.1931 33.6249 36.1162C10.0442 21.0393 6.10097 70.2429 38.0995 75.059C53.1517 77.3245 45.6986 50.16 63.2148 56.908C76.4974 62.0251 86.009 10.6866 57.2061 14.1697Z"
        stroke={accentColor}
        strokeWidth="6.5"
        strokeLinecap="round"
      />
    </Svg>
  );
}