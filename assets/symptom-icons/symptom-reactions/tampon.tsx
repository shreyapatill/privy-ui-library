import React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  textColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function Tampon({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  textColor = "#000",
  secondaryAccentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M22.4361 15.5865C21.4587 14.0507 21.1147 10.8195 26.4087 7.95668C28.1865 6.99534 32.2373 5.98859 34.2184 9.65226L50.8692 40.4438C51.931 42.4074 51.2 44.8599 49.2365 45.9217L44.7918 48.3252C42.8283 49.387 40.3757 48.656 39.3139 46.6924L22.848 16.2427C22.7251 16.0153 22.5748 15.8046 22.4361 15.5865Z"
        fill={accentColor}
      />
      <Path
        d="M44.4267 43.2271C46.8348 43.9454 46.5091 46.7017 45.9865 48.1882C45.9332 48.3399 45.8844 48.4941 45.8581 48.6527C45.3159 51.9186 47.4653 53.5404 48.7839 54.0142C48.9022 54.0567 49.0212 54.0975 49.1313 54.1583C50.836 55.0989 50.5726 57.5191 50.1081 59.0141C49.9993 59.3642 49.911 59.7319 50.0029 60.0868C50.244 61.0175 50.9949 61.7674 51.8276 62.3215C52.9546 63.0716 53.6209 64.413 54.0969 65.6804C54.5425 66.8668 55.5536 67.3537 56.1958 67.4495C58.5095 67.7942 58.8013 69.8085 58.3797 70.2581"
        stroke={accentColor}
        strokeLinecap="round"
      />
      <Path
        d="M29.3872 17.8481L42.8833 43.5347"
        stroke={secondaryAccentColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M32.9453 15.9402L45.8906 41.5486"
        stroke={secondaryAccentColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}