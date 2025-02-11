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

export default function STI({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  secondaryAccentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Ellipse cx="39.7266" cy="39.7266" rx="26.7266" ry="26.7266" fill={accentColor} />
      <Path
        d="M26.9019 36.9971L35.3332 32.243"
        stroke={secondaryAccentColor}
        strokeWidth="1.83745"
        strokeLinecap="round"
      />
      <Path
        d="M33.7739 50.4173C33.7739 46.165 37.722 44.8488 39.696 45.102C44.4337 45.1017 46.0129 48.8987 45.6181 50.4173"
        stroke={secondaryAccentColor}
        strokeWidth="1.82093"
        strokeLinecap="round"
      />
      <Path
        d="M44.0015 32.2437L52.3726 37.103"
        stroke={secondaryAccentColor}
        strokeWidth="1.83745"
        strokeLinecap="round"
      />
      <Path
        d="M61.6076 66.2316C67.8506 66.2316 72.9116 61.1707 72.9116 54.9276C72.9116 48.6846 67.8506 43.6236 61.6076 43.6236C55.3645 43.6236 50.3035 48.6846 50.3035 54.9276C50.3035 61.1707 55.3645 66.2316 61.6076 66.2316Z"
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.82075"
      />
      <Path
        d="M63.111 48.4937C61.2886 49.9392 61.9951 52.6351 57.7554 54.0026C53.5156 55.37 55.7259 64.5938 59.9126 60.5273C61.8836 58.6128 63.2217 54.2616 66.458 54.9793C69.8051 55.7216 67.2464 45.2134 63.111 48.4937Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Ellipse cx="65.3264" cy="50.1961" rx="0.668166" ry="0.501123" fill={accentColor} />
      <Ellipse cx="66.3284" cy="52.5343" rx="0.835207" ry="0.334082" fill={accentColor} />
      <Ellipse cx="62.8199" cy="50.8639" rx="0.334083" ry="0.334082" fill={accentColor} />
      <Ellipse cx="62.7381" cy="54.038" rx="0.918728" ry="1.00225" fill={accentColor} />
      <Ellipse cx="59.4797" cy="55.7921" rx="0.668166" ry="0.918726" fill={accentColor} />
      <Ellipse cx="59.1473" cy="59.0491" rx="1.00225" ry="0.501123" fill={accentColor} />
      <Path
        d="M55.6415 59.706L54.2695 60.6877"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M56.4715 54.8731L55.3022 53.5367"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M58.1399 53.8708L57.1377 52.5344"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M60.1498 52.5346L58.9805 51.1982"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M61.4096 50.9108L60.5591 49.4221"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M62.6405 49.1506L61.79 47.662"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M65.5704 48.0308L66.4717 46.5748"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M66.8472 48.881L68.2773 47.9934"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M68.0123 53.3289L69.501 54.1055"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M67.4351 50.7025L69.0322 50.2111"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M67.7768 52.0011L69.4424 52.0175"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M55.4328 56.4192L53.9873 55.5588"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M55.3642 57.9371L53.7563 58.3892"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M56.7404 61.0638L55.5552 62.2803"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M58.1681 61.327L58.2075 63.0579"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M59.6976 60.8317L60.5625 62.3114"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M60.8151 59.6193L61.9146 60.9199"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M66.8277 54.9126L67.5669 56.4641"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M61.9396 58.144L63.0391 59.4446"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M63.0568 56.7464L64.1562 58.047"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M64.845 55.5038L65.7095 56.9838"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Ellipse cx="57.1394" cy="57.5458" rx="0.668166" ry="0.501123" fill={accentColor} />
    </Svg>
  );
}