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

export default function Medium({
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
        d="M40.072 64.6932C44.6643 64.6932 49.0685 62.869 52.3158 59.6218C55.563 56.3747 57.3873 51.9705 57.3873 47.3784C57.3873 44.5327 56.3132 41.1237 54.6356 37.5588C52.9649 34.0089 50.7302 30.375 48.4839 27.0992C46.2393 23.8259 43.9931 20.9245 42.3074 18.8409C41.4649 17.7994 40.7632 16.9633 40.2727 16.3882C40.2012 16.3044 40.1342 16.2261 40.072 16.1536C40.0097 16.2261 39.9427 16.3044 39.8712 16.3882C39.3808 16.9633 38.6791 17.7994 37.8365 18.8409C36.1508 20.9245 33.9047 23.8259 31.66 27.0992C29.4138 30.375 27.179 34.0089 25.5084 37.5588C23.8307 41.1237 22.7567 44.5327 22.7567 47.3784C22.7567 51.9705 24.5809 56.3747 27.8282 59.6218C31.0754 62.869 35.4797 64.6932 40.072 64.6932Z"
        stroke={accentColor}
        strokeWidth="1.51352"
      />
      <Path
        d="M39.712 61.4119C34.9897 61.4119 25.6562 56.1259 25.6562 44.637C25.6562 33.1481 34.2168 42.6536 39.712 47.2625C42.682 49.7535 46.8504 50.3909 54.0738 49.3613C54.4219 49.3117 54.7139 49.6191 54.6134 49.956C53.3847 54.0756 48.2744 61.4119 39.712 61.4119Z"
        fill={accentColor}
      />
    </Svg>
  );
}