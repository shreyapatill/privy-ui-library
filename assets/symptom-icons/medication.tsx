import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  width?: number;
  height?: number;
};

export default function Medication({
  fillColor = "transparent",
  strokeColor = "#000",
  accentColor = "#000",
  width = 81,
  height = 80,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Rect x="0.0390625" width="90" height="90" rx="15" fill={fillColor} />
      <Path
        d="M28.9229 18.9355V11.8387C28.9229 10.2709 30.1938 9 31.7616 9H59.2616C60.8293 9 62.1003 10.2709 62.1003 11.8387V18.9355C62.1003 20.5033 60.8293 21.7742 59.2616 21.7742H31.7616C30.1938 21.7742 28.9229 20.5033 28.9229 18.9355Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="5.32258"
        strokeLinejoin="round"
      />
      <Path
        d="M30.3421 34.8704V32.242C30.3421 30.6743 31.613 29.4033 33.1808 29.4033H57.4873C59.055 29.4033 60.326 30.6743 60.326 32.242V34.8704C60.326 35.5765 60.5892 36.2574 61.0642 36.7799L64.9103 41.0106C65.3854 41.5331 65.6486 42.214 65.6486 42.9201V77.6614C65.6486 79.2292 64.3776 80.5001 62.8099 80.5001H27.8582C26.2905 80.5001 25.0195 79.2292 25.0195 77.6614V42.9201C25.0195 42.214 25.2827 41.5331 25.7578 41.0106L29.6039 36.7799C30.0789 36.2574 30.3421 35.5765 30.3421 34.8704Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.06452"
        strokeLinejoin="round"
      />
      <Path
        d="M45.9531 44.3066V67.3712"
        stroke={fillColor}
        strokeWidth="7.09677"
        strokeLinecap="round"
      />
      <Path
        d="M34.4219 55.1289H57.6638"
        stroke={fillColor}
        strokeWidth="7.09677"
        strokeLinecap="round"
      />
    </Svg>
  );
}