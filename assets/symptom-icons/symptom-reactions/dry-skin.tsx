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

export default function DrySkin({
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
        d="M26.9346 36.0282C26.9346 31.9443 30.0771 30.6802 31.6483 30.9233C35.4193 30.923 36.6763 34.5697 36.3621 36.0282"         stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M44.3013 36.027C44.3013 31.943 47.4438 30.679 49.015 30.9221C52.786 30.9218 54.043 34.5685 53.7288 36.027"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M46.7104 48.7864C46.7104 53.1621 42.67 54.5165 40.6498 54.2561C35.8013 54.2563 34.1852 50.3492 34.5892 48.7864"         
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M46.7104 48.7864C46.7104 53.1621 42.67 54.5165 40.6498 54.2561C35.8013 54.2563 34.1852 50.3492 34.5892 48.7864"         
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M19.7578 38.1426L22.8014 42.595M22.8014 42.595L21.6601 45.012L24.3489 47.27M22.8014 42.595L25.4646 43.3582L25.0841 45.2664L26.9864 45.9024L25.4646 48.8283" 
        stroke={secondaryAccentColor}
        strokeWidth="0.8" 
        strokeLinecap="round"
      />
      <Path 
        d="M22.1939 46V47.7286L20.3867 48.2L23.3724 50.3214L22.1939 51.6571" 
        stroke={secondaryAccentColor}
        strokeWidth="0.8" 
        strokeLinecap="round"
      />
      <Path 
        d="M62.375 40.8125L58.3487 41.5095M58.3487 41.5095L57.5652 39.7464L55.8251 40.6904M58.3487 41.5095L56.5836 43.2705M56.5836 43.2705L55.7038 42.2776L54.392 43.5021L53.5139 41.2604M56.5836 43.2705L57.1709 46.1611L54.1396 47.6072L55.2804 49.5508" 
        stroke={secondaryAccentColor}
        strokeWidth="0.8" 
        strokeLinecap="round"
      />
    </Svg>
  );
}