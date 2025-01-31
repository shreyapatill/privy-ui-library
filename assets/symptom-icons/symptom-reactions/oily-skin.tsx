import React from "react";
import Svg, { Path, Circle, Ellipse } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function OilySkin({
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
        d="M27.1421 38.5639C27.1421 34.4799 30.2846 33.2158 31.8559 33.4589C35.6269 33.4587 36.8839 37.1053 36.5696 38.5639" 
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M44.5093 38.5622C44.5093 34.4782 47.6518 33.2141 49.223 33.4572C52.994 33.457 54.251 37.1036 53.9368 38.5622" 
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M46.9204 51.3211C46.9204 55.6968 42.88 57.0512 40.8598 56.7907C36.0113 56.791 34.3951 52.8838 34.7992 51.3211" 
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Ellipse cx="58.0199" cy="48.6714" rx="5.73571" ry="8.17143" fill={secondaryAccentColor}/>
      <Path 
        d="M52.722 19.7867C45.3664 18.8835 36.0818 18.5221 29.1903 19.8072C26.5216 20.3049 26.6169 23.5563 29.1542 24.5216C31.4856 25.4086 33.9704 26.3076 35.9928 26.8422C37.3425 27.199 38.4751 28.2431 38.7317 29.6153L39.7612 35.1215C39.8699 35.703 40.3776 36.1246 40.9692 36.1246C41.5259 36.1246 42.013 35.7505 42.1566 35.2128L43.4058 30.536C43.874 28.7831 45.3815 26.5905 47.1154 26.0561C48.6431 25.5853 50.6254 25.0322 52.7274 24.4863C55.8088 23.6861 55.882 20.1748 52.722 19.7867Z" 
        fill={secondaryAccentColor}
        stroke={accentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Ellipse cx="24.7064" cy="48.6714" rx="5.73571" ry="8.17143" fill={secondaryAccentColor}/>
    </Svg>
  );
}