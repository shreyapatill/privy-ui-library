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

export default function Sociable({
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
        d="M28.6051 29.3929C28.6051 32.6174 26.4118 35.2071 23.7337 35.2071C21.0556 35.2071 18.8623 32.6174 18.8623 29.3929C18.8623 26.1683 21.0556 23.5786 23.7337 23.5786C26.4118 23.5786 28.6051 26.1683 28.6051 29.3929Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="0.157143"
      />
      <Path
        d="M27.9682 35.5845C25.5548 37.7928 23.014 38.3019 19.083 35.5628C18.843 35.3955 18.5255 35.3671 18.2672 35.5044C12.0874 38.7882 14.6141 43.2696 15.45 43.9939C15.4948 44.0327 15.5364 44.0683 15.5803 44.1082C16.6897 45.1169 23.7484 47.8013 31.0471 44.6216C31.086 44.6047 31.1233 44.5848 31.1584 44.5611C33.6029 42.9055 35.0551 37.1682 28.7081 35.3954C28.448 35.3227 28.1674 35.4022 27.9682 35.5845Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path
        d="M44.9479 47.1499C44.9479 50.3745 42.7546 52.9642 40.0765 52.9642C37.3983 52.9642 35.205 50.3745 35.205 47.1499C35.205 43.9254 37.3983 41.3357 40.0765 41.3357C42.7546 41.3357 44.9479 43.9254 44.9479 47.1499Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="0.157143"
      />
      <Path
        d="M44.311 53.3418C41.8975 55.5501 39.3568 56.0592 35.4258 53.3201C35.1857 53.1529 34.8683 53.1245 34.6099 53.2618C28.4302 56.5455 30.9568 61.0269 31.7928 61.7512C31.8376 61.79 31.8792 61.8256 31.9231 61.8655C33.0324 62.8742 40.0912 65.5586 47.3899 62.3789C47.4288 62.362 47.4661 62.3421 47.5012 62.3184C49.9456 60.6629 51.3979 54.9255 45.0509 53.1527C44.7908 53.0801 44.5102 53.1595 44.311 53.3418Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path
        d="M60.6624 29.3143C60.6624 32.4969 58.5382 35.05 55.9481 35.05C53.358 35.05 51.2338 32.4969 51.2338 29.3143C51.2338 26.1317 53.358 23.5786 55.9481 23.5786C58.5382 23.5786 60.6624 26.1317 60.6624 29.3143Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="0.157143"
      />
      <Path
        d="M59.9901 35.441C57.666 37.6339 55.2617 38.1375 51.4781 35.4206C51.2339 35.2452 50.9075 35.2152 50.6443 35.3604C44.6947 38.6407 47.1282 43.1072 47.9383 43.8353C47.9826 43.8752 48.0241 43.9118 48.0676 43.9525C49.1461 44.9621 55.9765 47.6423 63.0397 44.4658C63.079 44.4481 63.1167 44.4274 63.152 44.4027C65.5139 42.7474 66.8633 37.0254 60.7442 35.2452C60.4786 35.168 60.1913 35.2512 59.9901 35.441Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
    </Svg>
  );
}