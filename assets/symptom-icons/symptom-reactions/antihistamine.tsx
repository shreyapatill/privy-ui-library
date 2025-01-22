import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Antihistamine({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
    return (
      <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
      <Circle cx="40.0352" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M36.6828 44.566L19.0766 42.1947C18.3673 42.0992 17.7139 42.5944 17.6142 43.3032L15.1484 60.836C15.075 61.358 15.3237 61.8727 15.7782 62.1395L27.0957 68.7829C27.5587 69.0547 28.1409 69.0143 28.5619 68.6812L39.76 59.8221C40.1624 59.5037 40.3401 58.9787 40.2139 58.4814L36.6828 44.566ZM36.6828 44.566L40.9945 30.5643C41.142 30.0852 41.5516 29.7335 42.0475 29.66L54.9293 27.7521C55.4463 27.6756 55.8673 27.2971 55.9984 26.7912L59.8991 11.7336"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.1994 60.2643L22.0957 47.0108"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M32.7593 48.2043L35.3136 57.4462"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
      );
    }