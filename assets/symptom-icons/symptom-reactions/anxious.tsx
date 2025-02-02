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

export default function Anxious({
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
      <Path
        d="M34.2002 54.3C34.2002 49.9247 38.2625 48.5704 40.2936 48.8309C45.1684 48.8306 46.7933 52.7374 46.3871 54.3"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
      <Path
        d="M43.7998 35.3999L52.4131 40.3999"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M27.6001 40.4999L36.2001 35.3999"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M28.7002 22.2L30.3002 17.5L30.9002 19L31.2002 19.7L31.5002 20.3L32.1002 21.6L32.6002 22.7L33.0002 23.8L33.2002 24.6L33.5002 25.5L33.8002 26.4L34.154 27.6384C34.1847 27.7456 34.2002 27.8566 34.2002 27.9681V28.9523C34.2002 29.0504 34.1882 29.1481 34.1644 29.2433L34.0705 29.6189C34.0243 29.8036 33.9348 29.9747 33.8094 30.1181L33.4169 30.5666C33.3395 30.655 33.2495 30.7317 33.1499 30.794L32.5786 31.151C32.5264 31.1836 32.4718 31.2122 32.4153 31.2364L31.9698 31.4273C31.8574 31.4755 31.7383 31.5062 31.6165 31.5184L30.9142 31.5886C30.8384 31.5962 30.762 31.5965 30.6861 31.5896L29.7926 31.5084C29.7311 31.5028 29.6701 31.4925 29.6102 31.4775L29.1543 31.3635C28.9869 31.3217 28.8304 31.2442 28.6957 31.1364L28.106 30.6646C27.9704 30.5562 27.86 30.4196 27.7823 30.2643L27.6002 29.9L27.3269 29.3534C27.2436 29.1867 27.2002 29.003 27.2002 28.8167V28.5317C27.2002 28.4442 27.2098 28.3569 27.2288 28.2714L27.4002 27.5L27.6002 26.2L27.8002 25.3L28.7002 22.2Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </Svg>
  );
}