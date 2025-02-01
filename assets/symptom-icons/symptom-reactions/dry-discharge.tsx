import React from "react";
import Svg, { Path, Circle, Ellipse } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function DryDischarge({
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
      <Ellipse cx="40.5" cy="39.4974" rx="27.5" ry="27.5003" fill={accentColor} />
      <Path d="M42.2289 46.726L37.5146 50.4189" stroke={secondaryAccentColor} strokeWidth="1.57144" strokeLinecap="round" />
      <Path
        d="M57.6283 33.0547H22.7426C22.6558 33.0547 22.5854 33.1251 22.5854 33.2119V39.6098C22.5854 39.6823 22.632 39.7446 22.7023 39.7623C27.0495 40.8568 35.9576 45.3261 37.8813 54.7698C37.8963 54.8434 37.9611 54.8979 38.0362 54.8979H43.0926C43.1794 54.8979 43.2496 54.8307 43.2512 54.7439C43.3268 50.816 46.2874 42.5838 57.6635 39.7633C57.7339 39.7459 57.7854 39.6824 57.7854 39.6099V33.2119C57.7854 33.1251 57.7151 33.0547 57.6283 33.0547Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57144"
        strokeLinecap="round"
      />
      <Path
        d="M34.6808 41.0381C37.0478 39.2346 42.6252 36.737 46.6332 40.5584C46.949 40.8595 47.1443 41.2632 47.2327 41.6905C47.5342 43.1475 46.3693 44.4681 45.2103 45.4011C44.7278 45.7895 44.3495 46.3131 44.2143 47.0046C44.0231 47.9823 44.079 49.0755 43.3408 49.7444C42.8084 50.2268 42.0871 50.6624 41.1781 50.8588C39.3782 51.2476 38.1633 49.3347 37.0038 47.9042C36.5542 47.3495 35.9586 46.8396 35.1843 46.4753C34.0356 45.9349 32.6473 45.3799 32.6465 44.1104C32.6459 43.1488 33.1258 42.023 34.6808 41.0381Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.63998"
        strokeLinecap="round"
      />
      <Path d="M40.1411 40.6627L43.1868 43.5913" stroke={secondaryAccentColor} strokeWidth="0.937131" strokeLinecap="round" />
      <Path d="M38.9736 43.7084L42.0193 46.637" stroke={secondaryAccentColor} strokeWidth="0.937131" strokeLinecap="round" />
      <Path d="M35.4575 43.7084L38.5032 46.637" stroke={secondaryAccentColor} strokeWidth="0.937131" strokeLinecap="round" />
    </Svg>
  );
}