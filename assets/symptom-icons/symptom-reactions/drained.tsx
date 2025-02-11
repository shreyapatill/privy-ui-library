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

export default function drained({
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
      <Circle cx="39.3454" cy="43.3708" r="26.3454" fill={accentColor} />
      <Path
        d="M32.4956 59.5293C32.4956 54.6391 37.036 53.1254 39.3061 53.4165C44.7546 53.4162 46.5707 57.7828 46.1167 59.5293"
        stroke={secondaryAccentColor}
        strokeWidth="1.91462"
        strokeLinecap="round"
      />
      <Path
        d="M51.411 10.8782V14.0396C51.411 14.5246 51.0178 14.9178 50.5328 14.9178H48.4773C47.9923 14.9178 47.5991 15.311 47.5991 15.796V38.6286C47.5991 39.1136 47.9923 39.5068 48.4773 39.5068H65.3383C65.8233 39.5068 66.2165 39.1136 66.2165 38.6286V15.796C66.2165 15.311 65.8233 14.9178 65.3383 14.9178H63.1723C62.6873 14.9178 62.2942 14.5246 62.2942 14.0396V10.8782C62.2942 10.3932 61.901 10 61.416 10H52.2892C51.8042 10 51.411 10.3932 51.411 10.8782Z"
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="2.63454"
      />
      <Path
        d="M56.967 14.9178L54.2739 22.0967L58.3135 20.96L55.7701 28.6174"
        stroke={secondaryAccentColor}
        strokeWidth="2.63454"
        strokeLinecap="round"
      />
      <Path
        d="M50.585 34.5889C50.585 33.6189 51.3713 32.8325 52.3413 32.8325H61.65C62.62 32.8325 63.4064 33.6189 63.4064 34.5889V35.6427C63.4064 36.6127 62.62 37.3991 61.65 37.3991H52.3413C51.3713 37.3991 50.585 36.6127 50.585 35.6427V34.5889Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M42.6816 43.0192H54.321"
        stroke={secondaryAccentColor}
        strokeWidth="1.93199"
        strokeLinecap="round"
      />
      <Path
        d="M23.0122 43.0192H34.6516"
        stroke={secondaryAccentColor}
        strokeWidth="1.93199"
        strokeLinecap="round"
      />
    </Svg>
  );
}