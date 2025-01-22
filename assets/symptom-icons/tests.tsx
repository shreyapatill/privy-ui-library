import React from "react";
import Svg, { Rect, Path, Ellipse } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Tests({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Rect x="0.0566406" y="-0.00488281" width="90" height="90" rx="15" fill={fillColor} />
      <Path
        d="M57.7264 15C53.1981 15 39.1656 22.0301 32.2749 65.9489C32.2676 65.9952 32.2637 66.0439 32.2637 66.0908V73.0024C32.2637 73.3716 32.4875 73.7039 32.8296 73.8426L37.2899 75.6512C37.6876 75.8125 38.1438 75.6729 38.3832 75.3167L43.1374 68.2418C47.3004 62.7857 51.2826 55.5745 60.2292 32.8654C60.2516 32.8085 60.2691 32.747 60.2796 32.6867C62.0769 22.3641 62.2438 15 57.7264 15Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.81333"
      />
      <Rect
        width="6.35675"
        height="5.83687"
        rx="1.81333"
        transform="matrix(0.937625 0.347649 -0.351921 0.93603 31.0537 75.3264)"
        fill={accentColor}
      />
      <Ellipse
        cx="4.19117"
        cy="15.4539"
        rx="4.19117"
        ry="15.4539"
        transform="matrix(0.94006 0.34101 -0.345223 0.938521 43.7544 38.2502)"
        fill={fillColor}
      />
      <Path
        d="M40.2427 59.0639L42.7813 52.7173"
        stroke={accentColor}
        strokeWidth="1.81333"
        strokeLinecap="round"
      />
    </Svg>
  );
}