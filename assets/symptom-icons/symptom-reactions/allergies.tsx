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

export default function Allergies({
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
      <Circle cx="40" cy="40" r="27.5" fill={accentColor} />
      <Path
        d="M26.7998 37.1917L35.4751 32.3"
        stroke={secondaryAccentColor}
        strokeWidth="1.72857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M33.8716 51C33.8716 46.6246 37.9339 45.2704 39.965 45.5308C44.8398 45.5305 46.4647 49.4374 46.0585 51"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path
        d="M44.3999 32.3L53.0132 37.3"
        stroke={secondaryAccentColor}
        strokeWidth="1.72857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx="58.4645" cy="52.0214" r="2.35714" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.157143" />
      <Path
        d="M59.4858 49.6643L60.4287 48.3286"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M59.4858 51.3929L62.1573 50.5286"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M58.9355 52.0215L61.7641 53.7501"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M58.3857 52.8857V55.8715"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M56.8931 52.7285L55.0859 54.2999"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M56.8145 51.7858L54.1431 50.8429"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M57.7572 51.0786L56.6572 48.0143"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Circle cx="20.5929" cy="45.4214" r="2.35714" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.157143" />
      <Path
        d="M21.6143 43.5357L22.5571 42.2"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M21.6143 45.2643L24.2857 44.4"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M21.0645 45.8928L23.893 47.6214"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M20.6714 46.1285V49.1143"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M19.336 46.1285L17.5288 47.7"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M19.5713 45.1857L16.8999 44.2428"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M20.3573 45.1071L19.2573 42.0428"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Circle cx="54.0641" cy="27.35" r="2.35714" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.157143" />
      <Path
        d="M55.0859 25.4643L56.0288 24.1285"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M55.0859 27.1929L57.7574 26.3286"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M54.5356 27.8214L57.3642 29.55"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M54.1431 28.0571V31.0428"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M52.8071 28.0571L51 29.6286"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M53.043 27.1142L50.3716 26.1714"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M53.8285 27.0357L52.7285 23.9714"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Circle cx="27.9787" cy="58.6214" r="2.35714" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.157143" />
      <Path
        d="M29 56.7357L29.9429 55.4"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M29 58.4643L31.6714 57.6"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M28.4502 59.0929L31.2788 60.8215"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M28.0571 59.3286V62.3143"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M26.7212 59.3286L24.9141 60.9"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M26.9571 58.3857L24.2856 57.4429"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M27.7431 58.3072L26.6431 55.2429"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Circle cx="31.4357" cy="23.4214" r="2.35714" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.157143" />
      <Path
        d="M32.457 21.5357L33.3999 20.2"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M32.457 23.2643L35.1285 22.4"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M31.9072 23.8928L34.7358 25.6214"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M31.5142 24.1285V27.1143"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M30.1787 24.1285L28.3716 25.7"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M30.4141 23.1857L27.7427 22.2428"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M31.2001 23.1071L30.1001 20.0428"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
    </Svg>
  );
}