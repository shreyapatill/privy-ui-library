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

export default function OilyScalp({
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
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path 
        d="M38.476 63.1285C38.0651 62.6657 36.6544 60.749 39.9928 57.0513C40.0997 56.9329 40.2809 56.9131 40.4054 57.0128C41.969 58.2647 43.9086 60.8555 42.0946 63.0988C42.0789 63.1182 42.0604 63.1359 42.0406 63.1511C41.1113 63.8651 40.341 65.2286 38.476 63.1285Z" 
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path 
        d="M48.3745 58.1002C47.9635 57.6374 46.5529 55.7207 49.8912 52.023C49.9981 51.9046 50.1793 51.8848 50.3038 51.9845C51.8675 53.2364 53.807 55.8272 51.993 58.0705C51.9774 58.0899 51.9588 58.1076 51.9391 58.1228C51.0097 58.8368 50.2394 60.2003 48.3745 58.1002Z" 
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path 
        d="M19.2852 45.0576H32.2132C32.5222 45.0576 32.805 45.2464 32.9363 45.5261C37.8433 55.9836 43.9544 54.5609 47.913 45.5428C48.0404 45.2527 48.3272 45.0576 48.644 45.0576H61.8709" 
        stroke={secondaryAccentColor}
        strokeWidth="2.35714" 
        strokeLinecap="round"
      />
      <Path 
        d="M38.6987 47.4612C37.129 44.3885 37.6881 34.6144 40.3263 18.539C40.3848 18.1826 40.8971 18.1865 40.9433 18.5447C42.4747 30.4141 44.2306 44.5517 42.3663 47.4612C41.5763 49.1836 39.6467 49.782 38.6987 47.4612Z" 
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path 
        d="M28.5776 57.1568C28.1666 56.694 26.756 54.7773 30.0943 51.0796C30.2012 50.9612 30.3824 50.9415 30.507 51.0412C32.0706 52.293 34.0102 54.8838 32.1962 57.1271C32.1805 57.1465 32.1619 57.1642 32.1422 57.1794C31.2128 57.8934 30.4425 59.2569 28.5776 57.1568Z" 
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
    </Svg>
  );
}