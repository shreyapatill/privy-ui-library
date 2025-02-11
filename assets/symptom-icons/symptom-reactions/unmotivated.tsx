import React from "react";
import Svg, { Rect, Path, Circle, Ellipse } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function Unmotivated({
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
      <Ellipse cx="53.7749" cy="54.3593" rx="2.42337" ry="2.50992" fill={secondaryAccentColor} />
      <Ellipse cx="54.9362" cy="59.7065" rx="1.26437" ry="1.30952" fill={secondaryAccentColor} />
      <Path
        d="M21.3686 34.6997C19.2602 38.5188 17.8053 44.8917 25.4762 42.4486C26.3888 45.1042 28.9529 48.8208 33 42.4486C34.6501 45.65 39.2773 49.9154 43.4933 41.3606C47.9183 43.1074 55.2304 44.0691 49.0789 33.941C50.8003 30.9949 52.0938 25.3205 43.4959 26.192C42.9699 21.3176 39.9578 14.1001 32.117 24.2257C29.9048 21.8608 25.1852 19.1609 24.0035 27.2797C19.4729 27.2789 16.1007 30.2246 21.3686 34.6997Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M40.7422 34.6255H45.0951L41.4046 39.7219H45.6629"
        stroke={accentColor}
        strokeWidth="1.72224"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M32.3789 31.312H36.7318L33.0413 36.4084H37.2996"
        stroke={accentColor}
        strokeWidth="1.72224"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25 28H29.3529L25.6624 33.0964H29.9207"
        stroke={accentColor}
        strokeWidth="1.72224"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Ellipse cx="49.2469" cy="48.5756" rx="3.16092" ry="3.27381" fill={secondaryAccentColor} />
    </Svg>
  );
}