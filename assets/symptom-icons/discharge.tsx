import React from "react";
import Svg, { Rect, Circle, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
};

export default function Discharge({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  textColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Rect x="0.0195312" width="90" height="90" rx="15" fill={fillColor} />
      <Circle cx="45.5" cy="45.5" r="33.5" fill={accentColor} />
      <Path
        d="M38.0619 75.0854C32.0422 64.5466 22.2759 39.6343 31.3479 24.2656C31.355 24.2536 31.3604 24.2408 31.3639 24.2274L32.5851 19.6109M43.4575 75.0854C45.6631 50.1398 44.5971 40.1673 43.647 39.5515C43.563 39.497 43.5342 39.6169 43.611 39.6811L48.4659 43.7378C48.5035 43.7692 48.5234 43.8174 48.5194 43.8662C47.2299 59.6167 47.1215 71.4208 48.5258 75.0854M53.9211 75.0854C67.3836 50.9918 63.5183 31.1755 59.8964 24.2623C59.8911 24.252 59.8872 24.2419 59.8843 24.2308L58.6625 19.5281"
        stroke={fillColor}
        strokeWidth="1.80674"
        strokeLinecap="round"
      />
      <Path
        d="M60.0528 24.9021C54.9917 26.0748 42.3517 27.6683 31.0944 24.904C31.022 24.8862 30.9476 24.9238 30.919 24.9926L29.373 28.7171C29.34 28.7964 29.3768 28.886 29.4573 28.9159C33.3871 30.3748 41.4411 34.9219 44.0348 43.3595C44.0543 43.423 44.113 43.4673 44.1795 43.4673H48.5551C48.618 43.4673 48.6733 43.4308 48.6954 43.3719C50.4647 38.6721 55.3847 29.3454 61.3404 28.5104C61.4377 28.4967 61.4992 28.3969 61.4646 28.3049L60.2242 24.9971C60.1976 24.9261 60.1266 24.885 60.0528 24.9021Z"
        fill={fillColor}
        stroke={fillColor}
        strokeWidth="1.50562"
        strokeLinecap="round"
      />
      <Path
        d="M45.7141 41.9432C45.1703 41.5873 45.3953 40.4225 46.3704 38.499C47.1509 39.9254 47.5607 41.6008 46.9044 41.9432C46.6418 42.1345 46.0291 42.201 45.7141 41.9432Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.05393"
      />
      <Path
        d="M48.2963 37.1107C47.7072 36.7252 47.951 35.4633 49.0073 33.3795C49.8529 34.9248 50.2968 36.7397 49.5858 37.1107C49.3014 37.318 48.6376 37.39 48.2963 37.1107Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.05393"
      />
      <Path
        d="M43.0263 37.1107C42.4372 36.7252 42.6809 35.4633 43.7373 33.3795C44.5829 34.9248 45.0268 36.7397 44.3157 37.1107C44.0314 37.318 43.3676 37.39 43.0263 37.1107Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.05393"
      />
    </Svg>
  );
}