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

export default function SensitiveSkin({
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
        d="M56.5268 41.675L56.8973 48.0983L60.1929 44.6523L60.6025 50.8555"       
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path 
        d="M26.9326 36.0278C26.9326 31.9438 30.0751 30.6797 31.6464 30.9228C35.4174 30.9225 36.6744 34.5692 36.3601 36.0278"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M44.2998 36.0268C44.2998 31.9428 47.4423 30.6787 49.0136 30.9218C52.7846 30.9216 54.0416 34.5682 53.7273 36.0268" 
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M46.709 48.7859C46.709 53.1617 42.6686 54.516 40.6484 54.2556C35.7999 54.2559 34.1837 50.3487 34.5878 48.7859"          
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M20.2251 41.675L20.5955 48.0983L23.8911 44.6523L24.3007 50.8555" 
        stroke={secondaryAccentColor}
        strokeWidth="1.57143" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}