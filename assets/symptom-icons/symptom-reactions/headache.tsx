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

export default function Headache({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  secondaryAccentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40.0029" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Path
        d="M60 43.5C60 57.031 49.031 68 35.5 68C21.969 68 11 57.031 11 43.5C11 29.969 21.969 19 35.5 19C49.031 19 60 29.969 60 43.5Z"
        fill={accentColor}
      />
      <Path
        d="M29.668 55.1663C29.668 51.4335 31.9263 50.5 35.6897 50.5C41.3346 50.5 41.3346 54.2333 41.3346 55.1667"
        stroke={secondaryAccentColor}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <Path
        d="M24 40H31.9462"
        stroke={secondaryAccentColor}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <Path
        d="M39 40H46.9462"
        stroke={secondaryAccentColor}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <Path
        d="M59.8107 12.7318L62.8592 14.6875C62.9173 14.7247 62.9396 14.7986 62.912 14.8618L60.0083 21.5075C59.9737 21.5866 59.8766 21.6161 59.8039 21.5694L58.4878 20.7252C58.4225 20.6832 58.3355 20.7023 58.2937 20.7678L53.7397 27.9028C53.7361 27.9085 53.7286 27.9101 53.723 27.9065C53.719 27.9039 53.7168 27.8992 53.7176 27.8945L55.3587 17.3231C55.3743 17.2229 55.4878 17.1718 55.5732 17.2265L57.1111 18.2132C57.1842 18.26 57.2818 18.23 57.3159 18.1502L59.6058 12.7947C59.64 12.7149 59.7376 12.6849 59.8107 12.7318Z"
        fill={accentColor}
      />
      <Path
        d="M66.5919 17.8216L69.6405 19.7773C69.6985 19.8146 69.7209 19.8885 69.6933 19.9517L66.7895 26.5974C66.7549 26.6765 66.6578 26.7059 66.5851 26.6593L65.2691 25.815C65.2037 25.7731 65.1168 25.7922 65.075 25.8576L60.521 32.9927C60.5174 32.9983 60.5099 33 60.5042 32.9964C60.5002 32.9938 60.4981 32.9891 60.4988 32.9843L62.14 22.413C62.1555 22.3127 62.269 22.2616 62.3544 22.3164L63.8924 23.303C63.9654 23.3499 64.0631 23.3199 64.0972 23.2401L66.3871 17.8846C66.4212 17.8048 66.5189 17.7747 66.5919 17.8216Z"
        fill={accentColor}
      />
    </Svg>
  );
}