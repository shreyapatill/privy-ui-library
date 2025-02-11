import React from "react";
import Svg, { Rect, Path, Circle, Ellipse } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

export default function ColdFlu({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  secondaryAccentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Ellipse cx="40.5" cy="39.5" rx="27.5" ry="27.5" fill={accentColor} />
      <Path
        d="M28.8003 29.0001L37.2336 33.6201L28.8003 38.0935"
        stroke={secondaryAccentColor}
        strokeWidth="1.72857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M53.1133 38.1802L44.6799 33.5602L53.1133 29.0868"
        stroke={secondaryAccentColor}
        strokeWidth="1.72857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.0692 58.2676C29.4043 55.3682 30.2632 50.4887 24.5633 50.5856C24.4076 50.5882 24.3307 50.3858 24.4547 50.2915L40.427 38.1526C40.5148 38.0858 40.6423 38.128 40.673 38.2339L46.7557 59.2116C46.8049 59.3812 46.5341 59.5268 46.4032 59.4083C45.186 58.3067 43.1745 57.8465 41.5506 61.831C41.4902 61.9792 41.2485 61.965 41.1961 61.8137C40.5908 60.065 38.5936 58.5403 34.189 63.2416C34.0819 63.3559 33.8797 63.2656 33.8968 63.1099C34.2184 60.1775 33.4852 55.92 28.3024 58.4884C28.1637 58.5571 28.0044 58.4082 28.0692 58.2676Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M52.8357 51.443L50.005 48.8357C49.9277 48.7645 49.8036 48.7878 49.7574 48.8823L48.1375 52.1925C48.0907 52.2881 47.9644 52.3106 47.8875 52.2369L44.1929 48.693"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}