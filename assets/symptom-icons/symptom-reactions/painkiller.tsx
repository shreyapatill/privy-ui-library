import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Painkiller({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
    return (
        <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
        <Circle cx="40.0234" cy="39.999" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
        <Path
          d="M33.0976 21.3713L19.8069 32.3749L18.1253 33.7672C15.7403 30.9969 12.6259 25.8962 19.5262 20.1833C21.9244 18.6625 28.0518 15.2768 33.0976 21.3713Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
        <Path
          d="M20.0945 36.2056L33.5084 25.0999L35.2057 23.6947C37.5461 26.4101 40.478 32.0459 33.5137 37.8118C31.0998 39.3545 25.0427 42.1822 20.0945 36.2056Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
        <Path
          d="M35.8329 46.6211L22.5423 57.6246L20.8606 59.0169C18.4756 56.2467 15.3613 51.1459 22.2615 45.433C24.6598 43.9123 30.7871 40.5265 35.8329 46.6211Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
        <Path
          d="M22.8299 61.4553L36.2438 50.3497L37.941 48.9445C40.2814 51.6599 43.2133 57.2957 36.2491 63.0615C33.8352 64.6043 27.7781 67.432 22.8299 61.4553Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
        <Path
          d="M58.8193 33.1543L45.5286 44.1578L43.8469 45.5501C41.462 42.7799 38.3476 37.6791 45.2479 31.9662C47.6461 30.4455 53.7735 27.0597 58.8193 33.1543Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
        <Path
          d="M45.8162 47.9885L59.2301 36.8829L60.9274 35.4777C63.2678 38.1931 66.1997 43.8289 59.2354 49.5947C56.8215 51.1375 50.7644 53.9652 45.8162 47.9885Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
      </Svg>
      );
    }