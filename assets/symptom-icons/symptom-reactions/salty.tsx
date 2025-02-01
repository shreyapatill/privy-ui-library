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

export default function Salty({
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
      <Circle cx="39.5" cy="40.5" r="27.5" fill={accentColor} />
      <Rect x="31.4043" y="32.6516" width="16.191" height="28.0562" rx="1.85393" fill={secondaryAccentColor} />
      <Rect x="33.3818" y="39.573" width="12.1124" height="16.4382" rx="1.85393" fill={accentColor} />
      <Circle cx="43.1459" cy="53.5394" r="0.741573" fill={secondaryAccentColor} />
      <Circle cx="36.5956" cy="26.7191" r="0.741573" fill={accentColor} />
      <Circle cx="38.6967" cy="50.5731" r="0.741573" fill={secondaryAccentColor} />
      <Path
        d="M46.2441 30.3651H39.3147H32.7525C32.3318 30.3651 32.0351 29.9506 32.1834 29.5569C34.4952 23.4192 38.2673 23.1348 39.809 23.1348C40.6992 23.1348 45.0443 23.9854 46.8207 29.5977C46.9424 29.9821 46.6473 30.3651 46.2441 30.3651Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.85393"
        strokeLinecap="round"
      />
      <Circle cx="36.5956" cy="52.7977" r="0.741573" fill={secondaryAccentColor} />
      <Circle cx="36.0393" cy="26.9045" r="0.926966" fill={accentColor} />
      <Circle cx="39.6237" cy="25.4214" r="0.926966" fill={accentColor} />
      <Circle cx="43.3313" cy="26.9045" r="0.926966" fill={accentColor} />
      <Circle cx="40.9213" cy="47.6068" r="0.741573" fill={secondaryAccentColor} />
      <Circle cx="35.8539" cy="49.09" r="0.741573" fill={secondaryAccentColor} />
      <Circle cx="40.1796" cy="53.5394" r="0.741573" fill={secondaryAccentColor} />
      <Circle cx="42.4047" cy="50.5731" r="0.741573" fill={secondaryAccentColor} />

    </Svg>
  );
}