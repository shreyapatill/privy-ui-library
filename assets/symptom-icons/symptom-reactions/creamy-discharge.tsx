import React from "react";
import Svg, { Path, Circle,Ellipse } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function CreamyDischarge({
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
      <Path d="M42.2289 46.7264L37.5146 50.4193" stroke={secondaryAccentColor} strokeWidth="1.57144" strokeLinecap="round" />
      <Path
        d="M57.6283 33.0547H22.7426C22.6558 33.0547 22.5854 33.1251 22.5854 33.2119V39.6098C22.5854 39.6823 22.632 39.7446 22.7023 39.7623C27.0495 40.8568 35.9576 45.3261 37.8813 54.7698C37.8963 54.8434 37.9611 54.8979 38.0362 54.8979H43.0926C43.1794 54.8979 43.2496 54.8307 43.2512 54.7439C43.3268 50.816 46.2874 42.5838 57.6635 39.7633C57.7339 39.7459 57.7854 39.6824 57.7854 39.6099V33.2119C57.7854 33.1251 57.7151 33.0547 57.6283 33.0547Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57144"
        strokeLinecap="round"
      />
      <Path
        d="M34.7848 40.6604C37.0915 38.9028 42.5269 36.4688 46.4329 40.1928C46.7407 40.4863 46.931 40.8797 47.0171 41.2961C47.3109 42.716 46.1757 44.003 45.0462 44.9122C44.5759 45.2908 44.2073 45.801 44.0755 46.475C43.8892 47.4277 43.9437 48.4932 43.2243 49.145C42.7055 49.6151 42.0025 50.0396 41.1166 50.231C39.3625 50.6099 38.1786 48.7458 37.0486 47.3517C36.6105 46.8111 36.0301 46.3141 35.2754 45.9591C34.156 45.4325 32.803 44.8916 32.8022 43.6544C32.8017 42.7174 33.2693 41.6202 34.7848 40.6604Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.59823"
        strokeLinecap="round"
      />
      <Path d="M35.9458 44.2773C37.681 45.3732 37.544 43.0216 39.1422 44.2773" stroke={secondaryAccentColor} strokeWidth="0.913273" strokeLinecap="round" />
      <Path d="M40.1875 47.4392C41.9227 48.5351 41.2149 45.3843 43.3839 47.4392" stroke={secondaryAccentColor} strokeWidth="0.913273" strokeLinecap="round" />
      <Path d="M40.6592 42.8313C41.3441 40.7764 43.5131 43.2879 43.8556 42.8313" stroke={secondaryAccentColor} strokeWidth="0.913273" strokeLinecap="round" />
    </Svg>
  );
}