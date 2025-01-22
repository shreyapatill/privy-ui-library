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

export default function Ultra({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  textColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40.0029" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M40.072 65.6932C44.6643 65.6932 49.0685 63.869 52.3158 60.6218C55.563 57.3747 57.3873 52.9705 57.3873 48.3784C57.3873 45.5327 56.3132 42.1237 54.6356 38.5588C52.9649 35.0089 50.7302 31.375 48.4839 28.0992C46.2393 24.8259 43.9931 21.9245 42.3074 19.8409C41.4649 18.7994 40.7632 17.9633 40.2727 17.3882C40.2012 17.3044 40.1342 17.2261 40.072 17.1536C40.0097 17.2261 39.9427 17.3044 39.8712 17.3882C39.3808 17.9633 38.6791 18.7994 37.8365 19.8409C36.1508 21.9245 33.9047 24.8259 31.66 28.0992C29.4138 31.375 27.179 35.0089 25.5084 38.5588C23.8307 42.1237 22.7567 45.5327 22.7567 48.3784C22.7567 52.9705 24.5809 57.3747 27.8282 60.6218C31.0754 63.869 35.4797 65.6932 40.072 65.6932Z"
        stroke={accentColor}
        strokeWidth="1.51352"
      />
      <Path
        d="M44.7005 28.3613C43.1392 14.9601 27.2187 32.9809 25.9573 44.0133C24.2687 58.7819 35.159 63.6789 40.149 63.1311C52.3231 63.1311 54.5384 53.6667 54.5384 49.4041C54.5384 49.4041 54.5006 45.8132 52.7685 43.4113C49.5445 38.9406 46.214 41.3525 44.7005 28.3613Z"
        fill={accentColor}
      />
    </Svg>
  );
}