import React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function UTI({
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
      <Circle cx="37.6667" cy="39.6667" r="26.6667" fill={accentColor} />
      <Path
        d="M24.8667 36.9432L33.2791 32.1998"
        stroke={secondaryAccentColor}
        strokeWidth="1.83333"
        strokeLinecap="round"
      />
      <Path
        d="M31.7241 50.3332C31.7241 46.0904 35.6633 44.7772 37.6329 45.0297C42.36 45.0295 43.9356 48.8179 43.5417 50.3332"
        stroke={secondaryAccentColor}
        strokeWidth="1.81685"
        strokeLinecap="round"
      />
      <Path
        d="M41.9331 32.1998L50.2854 37.0483"
        stroke={secondaryAccentColor}
        strokeWidth="1.83333"
        strokeLinecap="round"
      />
      <Circle cx="59.5832" cy="55.5832" r="9.50833" fill={accentColor} stroke={secondaryAccentColor} strokeWidth="1.81667" />
      <Path
        d="M55.4072 50.0506C56.2822 51.2193 55.3032 52.1833 54.7043 52.5193"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
      <Path
        d="M58.6877 56.4998C58.4378 53.8929 60.4583 54.1722 61.4998 54.6377"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
      <Path
        d="M55.1665 57.4998C54.8029 55.5415 53.3483 56.1646 52.6665 56.721"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
      <Path
        d="M65.7094 54.7495C65.7826 56.6253 64.3925 57.4432 63.6883 57.6177"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
      <Path
        d="M58.3335 62.9998C58.3335 60.6443 60.2224 61.2913 61.1668 61.9093"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
      <Path
        d="M62.7035 50.7102C60.9104 50.8667 60.6322 49.7394 60.7172 49.1562"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
    </Svg>
  );
}