import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Antibiotics({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
    return (
      <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Path
        d="M28.0456 47.4182L32.6791 34.1633C32.7476 33.9673 32.6412 33.7534 32.4437 33.6899C26.6714 31.2071 10.9507 28.2147 9.35034 35.2377C9.3384 35.2901 9.33108 35.3437 9.3295 35.3974C9.211 39.4282 15.4147 47.2135 27.0218 48.0956C27.4762 48.1302 27.8952 47.8484 28.0456 47.4182Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="3.08632"
      />
      <Circle cx="34.3843" cy="54.3653" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Circle cx="35.6192" cy="62.1841" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Circle cx="40.1455" cy="57.0401" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Circle cx="47.9644" cy="54.3653" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Circle cx="35.6192" cy="47.1639" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Circle cx="41.7915" cy="51.0733" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Path
        d="M49.363 34.2342L52.5839 47.4734C52.6329 47.675 52.8385 47.7966 53.0389 47.7424C59.2269 46.6675 74.0522 40.6736 71.63 34.1003C71.611 34.0486 71.5871 33.9986 71.5581 33.9517C69.4868 30.6092 60.0895 27.6042 49.859 33.1059C49.4556 33.3228 49.2547 33.7892 49.363 34.2342Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="3.08632"
      />
    </Svg>
      );
    }