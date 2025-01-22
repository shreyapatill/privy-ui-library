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

export default function Cup({
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
        d="M53.7776 24.5939L51.6901 20.2174C53.4576 17.4119 51.9059 16.3432 50.5283 16.0716C50.1388 15.9949 49.7407 16.0792 49.3743 16.2319L17.1239 29.6755C16.7141 29.8463 16.3179 30.1004 16.1379 30.5062C15.4381 32.0846 17.5608 33.0909 18.8458 33.4196L20.7647 38.219C21.3233 39.6161 22.9268 40.2853 24.3199 39.7166C29.0837 51.8719 38.8555 56.1083 45.4337 57.0557L47.7797 61.4654L48.8979 63.5674C49.5831 64.8552 51.1646 65.3699 52.4764 64.7319L52.8923 64.5296C54.2672 63.861 54.8174 62.1881 54.1077 60.8339L53.2537 59.2042L51.1032 55.1005C59.4105 44.8116 54.9746 32.5123 52.697 28.1026C53.8968 27.4052 54.393 25.884 53.7776 24.5939Z"
        fill={accentColor}
      />
      <Path
        d="M41.6588 41.9755C39.1268 46.2762 35.2525 45.9359 30.4673 43.01C33.3987 53.7512 41.2198 53.6686 44.7639 52.2846C53.6687 49.8544 54.0112 41.9885 53.1517 38.839C53.1517 38.839 52.3586 36.4304 50.3314 35.3619C48.0378 34.1531 46.0437 34.5276 41.6588 41.9755Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M24.7424 39.5577L52.3486 28.1472M19.2212 33.3003L51.3363 20.3254M47.8396 60.7224L52.4406 58.4219"
        stroke={secondaryAccentColor}
        strokeWidth="0.872107"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}