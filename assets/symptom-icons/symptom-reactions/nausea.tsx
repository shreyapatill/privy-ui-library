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

export default function Nausea({
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
      <Circle cx="56.8417" cy="58.5713" r="9.42857" fill={secondaryAccentColor} />
      <Circle cx="56.9208" cy="58.6498" r="7.46429" fill={accentColor} />
      <Path
        d="M51.6973 23.6855H26.437C25.5876 23.6855 24.7201 23.8798 24.0853 24.444C22.0446 26.2579 23.0076 28.2094 24.2522 29.2691C24.7865 29.7241 25.501 29.8542 26.2028 29.8542C33.3662 29.8542 42.9994 29.8542 48.327 29.8542C49.4165 29.8542 50.5445 30.1783 51.1669 31.0726C52.3075 32.7117 51.7617 34.2163 50.9329 35.1425C50.4107 35.7262 49.599 35.8888 48.8159 35.8888H26.6049C25.6503 35.8888 24.6714 36.1349 24.0208 36.8335C22.4106 38.5627 23.1253 40.225 24.1632 41.2502C24.7364 41.8165 25.5622 41.9905 26.368 41.9905H47.6979C49.1558 41.9905 50.6618 42.6193 51.132 43.9994C51.5957 45.3606 51.3627 46.4853 50.9258 47.2675C50.4836 48.0592 49.5268 48.2933 48.62 48.2933H26.5816C25.6415 48.2933 24.6819 48.5369 24.0192 49.2036C22.0307 51.2039 23.0564 53.1328 24.3187 54.1078C24.8187 54.494 25.4647 54.5961 26.0965 54.5961H37.0221C43.1259 55.0655 43.5156 57.7312 43.5156 58.4851C43.5156 61.3683 41.8922 63.7821 40.5935 64.3855"
        stroke={secondaryAccentColor}
        strokeWidth="5.02857"
        strokeLinecap="round"
      />
      <Path
        d="M53.9282 54.6859C54.5553 55.5233 53.8537 56.2141 53.4246 56.4549"
        stroke={secondaryAccentColor}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <Path
        d="M56.2284 59.2488C56.0398 57.4888 57.5641 57.6774 58.3498 57.9917"
        stroke={secondaryAccentColor}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <Path
        d="M53.7012 59.9844C53.4498 58.6015 52.4441 59.0415 51.9727 59.4344"
        stroke={secondaryAccentColor}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <Path
        d="M61.3099 58.0525C61.3623 59.3967 60.3662 59.9827 59.8616 60.1077"
        stroke={secondaryAccentColor}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <Path
        d="M55.9785 63.9928C55.9785 62.2957 57.3404 62.7619 58.0214 63.2071"
        stroke={secondaryAccentColor}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <Path
        d="M59.1568 55.1582C57.872 55.2703 57.6726 54.4625 57.7335 54.0447"
        stroke={secondaryAccentColor}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </Svg>
  );
}