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

export default function NormalDigestion({
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
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Circle cx="56.8441" cy="58.5714" r="9.42857" fill={secondaryAccentColor} />
      <Circle cx="56.9223" cy="58.6501" r="7.46429" fill={accentColor} />
      <Path
        d="M51.6968 23.6858H26.4365C25.5871 23.6858 24.7196 23.88 24.0848 24.4443C22.0441 26.2581 23.0071 28.2097 24.2517 29.2694C24.786 29.7243 25.5005 29.8545 26.2023 29.8545C33.3658 29.8545 42.9989 29.8545 48.3265 29.8545C49.416 29.8545 50.544 30.1785 51.1664 31.0729C52.307 32.712 51.7612 34.2165 50.9324 35.1428C50.4102 35.7264 49.5985 35.8891 48.8154 35.8891H26.6044C25.6498 35.8891 24.6709 36.1351 24.0203 36.8338C22.4101 38.563 23.1248 40.2252 24.1627 41.2505C24.7359 41.8167 25.5617 41.9907 26.3675 41.9907H47.6974C49.1553 41.9907 50.6614 42.6196 51.1315 43.9996C51.5952 45.3609 51.3622 46.4856 50.9253 47.2677C50.4831 48.0594 49.5263 48.2935 48.6195 48.2935H26.5811C25.641 48.2935 24.6814 48.5371 24.0187 49.2039C22.0302 51.2041 23.0559 53.133 24.3182 54.108C24.8182 54.4942 25.4642 54.5963 26.096 54.5963H37.0216C43.1255 55.0657 43.5151 57.7314 43.5151 58.4853C43.5151 61.3685 41.8917 63.7823 40.593 64.3858"
        stroke={secondaryAccentColor}
        strokeWidth="5.02857"
        strokeLinecap="round"
      />
      <Path
        d="M52.1294 59.0428L55.8491 61.2746C55.972 61.3483 56.1293 61.3295 56.2314 61.2289L61.6365 55.8999"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
    </Svg>
  );
}