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

export default function ClearDischarge({
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
      <Ellipse cx="40.5" cy="39.5003" rx="27.5" ry="27.5003" fill={accentColor} />
      <Path d="M42.2289 46.7289L37.5146 50.4218" stroke={secondaryAccentColor} strokeWidth="1.57144" strokeLinecap="round" />
      <Path
        d="M57.6283 33.0577H22.7426C22.6558 33.0577 22.5854 33.128 22.5854 33.2148V39.6127C22.5854 39.6853 22.632 39.7475 22.7023 39.7652C27.0495 40.8598 35.9576 45.329 37.8813 54.7727C37.8963 54.8463 37.9611 54.9008 38.0362 54.9008H43.0926C43.1794 54.9008 43.2496 54.8336 43.2512 54.7468C43.3268 50.8189 46.2874 42.5868 57.6635 39.7663C57.7339 39.7488 57.7854 39.6853 57.7854 39.6128V33.2148C57.7854 33.128 57.7151 33.0577 57.6283 33.0577Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57144"
        strokeLinecap="round"
      />
      <Path
        d="M34.6808 41.041C37.0478 39.2376 42.6252 36.74 46.6332 40.5613C46.949 40.8624 47.1443 41.2661 47.2327 41.6934C47.5342 43.1504 46.3693 44.471 45.2103 45.404C44.7278 45.7925 44.3495 46.316 44.2143 47.0075C44.0231 47.9852 44.079 49.0785 43.3408 49.7473C42.8084 50.2297 42.0871 50.6653 41.1781 50.8617C39.3782 51.2505 38.1633 49.3377 37.0038 47.9072C36.5542 47.3525 35.9586 46.8425 35.1843 46.4782C34.0356 45.9378 32.6473 45.3828 32.6465 44.1133C32.6459 43.1518 33.1258 42.0259 34.6808 41.041Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.63998"
        strokeLinecap="round"
      />
    </Svg>
  );
}