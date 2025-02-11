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

export default function Motivated({
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
        d="M21.3686 34.6997C19.2602 38.5188 17.8053 44.8917 25.4762 42.4486C26.3888 45.1042 29.9529 50.3724 34 44.0002C35.6501 47.2016 39.2773 49.9154 43.4933 41.3606C47.9183 43.1074 55.2304 44.0691 49.0789 33.941C50.8003 30.9949 52.0938 25.3205 43.4959 26.192C42.9699 21.3176 39.9578 14.1001 32.117 24.2257C29.9048 21.8608 25.1852 19.1609 24.0035 27.2797C19.4729 27.2789 16.1007 30.2246 21.3686 34.6997Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M29.3036 31.0717V31.0714C29.3036 27.8858 31.8858 25.3036 35.0714 25.3036C38.257 25.3036 40.8393 27.8858 40.8393 31.0714V31.0717C40.8401 31.8874 40.6675 32.694 40.3329 33.4379C39.9984 34.1818 39.5095 34.8461 38.8986 35.3867L38.8985 35.3869C38.6554 35.6023 38.4811 35.862 38.4156 36.144L38.4155 36.1445L37.9749 38.0536H32.1679L31.7274 36.1445L31.7273 36.1442C31.6618 35.8612 31.4873 35.6021 31.2444 35.3869L31.2442 35.3867C30.6334 34.8461 30.1445 34.1818 29.8099 33.4379C29.4753 32.694 29.3027 31.8874 29.3036 31.0717ZM32.6818 40.2846L32.5873 39.875H37.5546L37.4599 40.2843L37.4598 40.2846C37.3672 40.6859 37.1413 41.0439 36.819 41.3004C36.4968 41.5568 36.0971 41.6964 35.6853 41.6964C35.6852 41.6964 35.6852 41.6964 35.6852 41.6964H34.457H34.4569C34.045 41.6965 33.6452 41.5569 33.3228 41.3005C33.0004 41.0441 32.7745 40.686 32.6818 40.2846Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="0.607143"
      />
      <Path
        d="M35.0707 37.7502L33.8564 35.1938L35.6779 33.4043L35.3136 32.2859"
        stroke={secondaryAccentColor}
        strokeWidth="0.607143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Ellipse cx="49.2469" cy="48.5756" rx="3.16092" ry="3.27381" fill={secondaryAccentColor} />
    </Svg>
  );
}