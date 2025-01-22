import React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
};

export default function Heavy({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  textColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M41.072 64.6932C45.6643 64.6932 50.0685 62.869 53.3158 59.6218C56.563 56.3747 58.3873 51.9705 58.3873 47.3784C58.3873 44.5327 57.3132 41.1237 55.6356 37.5588C53.9649 34.0089 51.7302 30.375 49.4839 27.0992C47.2393 23.8259 44.9931 20.9245 43.3074 18.8409C42.4649 17.7994 41.7632 16.9633 41.2727 16.3882C41.2012 16.3044 41.1342 16.2261 41.072 16.1536C41.0097 16.2261 40.9427 16.3044 40.8712 16.3882C40.3808 16.9633 39.6791 17.7994 38.8365 18.8409C37.1508 20.9245 34.9047 23.8259 32.66 27.0992C30.4138 30.375 28.179 34.0089 26.5084 37.5588C24.8307 41.1237 23.7567 44.5327 23.7567 47.3784C23.7567 51.9705 25.5809 56.3747 28.8282 59.6218C32.0754 62.869 36.4797 64.6932 41.072 64.6932Z"
        stroke={accentColor}
        strokeWidth="1.51352"
      />
      <Path
        d="M39.6893 39.503C35.191 26.7831 28.2187 32.2311 26.9573 43.2634C25.2687 58.0321 36.159 62.9291 41.149 62.3813C53.3231 62.3813 55.5384 52.9168 55.5384 48.6543C55.5384 48.6543 55.5006 45.0634 53.7685 42.6615C50.5445 38.1908 45.2754 55.2988 39.6893 39.503Z"
        fill={accentColor}
      />
    </Svg>
  );
}