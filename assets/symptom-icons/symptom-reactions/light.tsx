import React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
};

export default function Light({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  textColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="39.9971" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M41.0704 64.6906C45.6624 64.6906 50.0663 62.8664 53.3133 59.6194C56.5603 56.3724 58.3844 51.9685 58.3844 47.3766C58.3844 44.5311 57.3104 41.1223 55.6329 37.5576C53.9624 34.0078 51.7278 30.3741 49.4817 27.0986C47.2373 23.8254 44.9913 20.9242 43.3057 18.8406C42.4632 17.7993 41.7616 16.9631 41.2712 16.3881C41.1997 16.3043 41.1327 16.226 41.0704 16.1535C41.0082 16.226 40.9412 16.3043 40.8697 16.3881C40.3793 16.9631 39.6777 17.7993 38.8352 18.8406C37.1496 20.9242 34.9036 23.8254 32.6592 27.0986C30.4131 30.3741 28.1785 34.0078 26.508 37.5576C24.8305 41.1223 23.7565 44.5311 23.7565 47.3766C23.7565 51.9685 25.5806 56.3724 28.8276 59.6194C32.0746 62.8664 36.4785 64.6906 41.0704 64.6906Z"
        stroke={accentColor}
        strokeWidth="1.51342"
      />
      <Path
        d="M40.7116 62.4181C38.7556 62.4181 26.0264 60.2428 26.0264 48.9235C27.1614 45.5145 31.9534 44.2572 37.881 53.0859C41.0686 57.8336 48.9794 48.8765 53.898 53.0859C56.5465 55.3525 49.7366 62.4181 40.7116 62.4181Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="0.252236"
      />
    </Svg>
  );
}