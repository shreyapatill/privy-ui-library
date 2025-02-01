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

export default function Hairfall({
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
        d="M45.2301 33.668L40.5091 31.9362C40.1018 31.7868 39.8902 31.3367 40.0644 30.9392C41.841 26.885 46.8547 20.7047 55.4482 22.0664C56.1681 22.1805 56.2572 23.1103 55.5958 23.4167L55.301 23.5533L53.0829 24.5808C51.6118 25.3985 48.2843 28.2318 46.2521 33.2049C46.088 33.6066 45.6375 33.8175 45.2301 33.668Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path
        d="M20.2852 45.0574H33.2132C33.5222 45.0574 33.805 45.2461 33.9363 45.5259C38.8433 55.9834 44.9544 54.5607 48.913 45.5426C49.0404 45.2525 49.3272 45.0574 49.644 45.0574H62.8709"
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Path
        d="M45.2375 43.7224C43.4162 48.0484 41.3203 53.0268 37.8769 43.6789C37.7808 43.418 37.7555 43.1254 37.8066 42.8521L38.2716 40.368C38.4107 39.6245 39.0598 39.0857 39.8162 39.0857H43.3859C44.1513 39.0857 44.8053 39.6371 44.9347 40.3914L45.3506 42.8155C45.4015 43.1118 45.3662 43.4166 45.2495 43.6938L45.2375 43.7224Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path d="M37.1929 33.5022L32.3214 32.7165" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
      <Path d="M36.7051 35.8564L31.9908 36.7993" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
      <Path d="M36.5278 37.8435L32.9135 40.2006" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
      <Path d="M48.9409 35.0923L54.1266 33.678" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
      <Path d="M48.5557 36.3621L53.4271 38.2478" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
      <Path d="M47.6587 38.1106L49.3873 41.2535" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
    </Svg>
  );
}