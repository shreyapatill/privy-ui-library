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

export default function Sickness({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Rect x="0.0195312" width="90" height="90" rx="15" fill={fillColor} />
      <Circle cx="45" cy="45" r="33.5" fill={accentColor} />
      <Path
        d="M50.0771 36.7686L50.4726 37.3869C53.0953 41.4879 58.6946 42.4103 62.4941 39.3672V39.3672"
        stroke={strokeColor}
        strokeWidth="1.63778"
        strokeLinecap="round"
      />
      <Path
        d="M26.813 39.423L27.425 39.8281C31.4842 42.5151 36.9771 41.0901 39.2182 36.7687V36.7687"
        stroke={strokeColor}
        strokeWidth="1.63778"
        strokeLinecap="round"
      />
      <Path
        d="M28.4631 50.7925V51.624L30.0844 56.2717C30.1952 56.5893 30.1952 56.935 30.0844 57.2525L28.4631 61.9002V64.0577C28.4631 64.88 29.1297 65.5466 29.952 65.5466H59.2369C60.0592 65.5466 60.7258 64.88 60.7258 64.0577V61.9002L59.3278 57.1854C59.2459 56.9091 59.2459 56.6151 59.3278 56.3388L60.7258 51.624V50.7925C60.7258 49.9702 60.0592 49.3036 59.2369 49.3036H29.952C29.1297 49.3036 28.4631 49.9702 28.4631 50.7925Z"
        fill={strokeColor}
      />
      <Path
        d="M12.2422 47.9777L28.4631 51.624M28.4631 51.624V50.7925C28.4631 49.9702 29.1297 49.3036 29.952 49.3036H59.2369C60.0592 49.3036 60.7258 49.9702 60.7258 50.7925V51.624M28.4631 51.624L30.0844 56.2717C30.1952 56.5893 30.1952 56.935 30.0844 57.2525L28.4631 61.9002M60.7258 51.624L77.7533 48.5578M60.7258 51.624L59.3278 56.3388C59.2459 56.6151 59.2459 56.9091 59.3278 57.1854L60.7258 61.9002M60.7258 61.9002L72.2444 62.7289M60.7258 61.9002V64.0577C60.7258 64.88 60.0592 65.5466 59.2369 65.5466H29.952C29.1297 65.5466 28.4631 64.88 28.4631 64.0577V61.9002M28.4631 61.9002L17.23 62.8666"
        stroke={strokeColor}
        strokeWidth="2.23333"
        strokeLinecap="round"
      />
    </Svg>
  );
}