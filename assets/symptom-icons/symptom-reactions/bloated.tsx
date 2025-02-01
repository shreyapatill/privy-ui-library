import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function Bloated({
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
      <Circle cx="41.5" cy="40.5" r="27.5" fill={accentColor} />
      <Circle cx="57.8436" cy="58.5714" r="9.42857" fill={secondaryAccentColor} />
      <Circle cx="57.9208" cy="58.65" r="7.46429" fill={accentColor} />
      <Circle cx="55.4865" cy="55.4286" r="1.57143" fill={secondaryAccentColor} />
      <Circle cx="58.8634" cy="61.6357" r="2.43571" fill={secondaryAccentColor} />
      <Circle cx="60.9066" cy="55.9786" r="2.12143" fill={secondaryAccentColor} />
      <Path
        d="M52.6959 23.6857H27.4355C26.5861 23.6857 25.7187 23.8799 25.0838 24.4442C23.0432 26.258 24.0061 28.2095 25.2507 29.2692C25.785 29.7242 26.4996 29.8544 27.2013 29.8544C34.3648 29.8544 43.9979 29.8544 49.3255 29.8544C50.4151 29.8544 51.543 30.1784 52.1654 31.0727C53.3061 32.7119 52.7602 34.2164 51.9314 35.1426C51.4092 35.7263 50.5976 35.889 49.8144 35.889H27.6035C26.6488 35.889 25.6699 36.135 25.0193 36.8336C23.4091 38.5628 24.1239 40.2251 25.1617 41.2504C25.7349 41.8166 26.5608 41.9906 27.3665 41.9906H48.6964C50.1544 41.9906 51.6604 42.6195 52.1305 43.9995C52.5942 45.3607 52.3613 46.4854 51.9244 47.2676C51.4821 48.0593 50.5253 48.2934 49.6185 48.2934H27.5801C26.64 48.2934 25.6805 48.537 25.0177 49.2038C23.0292 51.204 24.0549 53.1329 25.3172 54.1079C25.8172 54.4941 26.4633 54.5962 27.095 54.5962H38.0206C44.1245 55.0656 44.5141 57.7313 44.5141 58.4852C44.5141 61.3684 42.8907 63.7822 41.592 64.3857"
        stroke={secondaryAccentColor}
        strokeWidth="5.02857"
        strokeLinecap="round"
      />
      <Circle cx="53.9926" cy="59.593" r="1.02143" fill={secondaryAccentColor} />
    </Svg>
  );
}