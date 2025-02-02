import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

type Props = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
};

export default function Energy({
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
      <Path
        d="M18.8098 25V13.8H20.6498V25H18.8098ZM20.0738 25V23.32H26.3458V25H20.0738ZM20.0738 20.088V18.472H25.8018V20.088H20.0738ZM20.0738 15.48V13.8H26.2658V15.48H20.0738ZM34.2713 25V20.568C34.2713 20.056 34.1059 19.6347 33.7753 19.304C33.4553 18.9733 33.0393 18.808 32.5273 18.808C32.1859 18.808 31.8819 18.8827 31.6153 19.032C31.3486 19.1813 31.1406 19.3893 30.9913 19.656C30.8419 19.9227 30.7673 20.2267 30.7673 20.568L30.0793 20.184C30.0793 19.5973 30.2073 19.08 30.4633 18.632C30.7193 18.1733 31.0713 17.816 31.5193 17.56C31.9779 17.2933 32.4899 17.16 33.0553 17.16C33.6313 17.16 34.1433 17.3093 34.5913 17.608C35.0393 17.896 35.3913 18.2747 35.6473 18.744C35.9033 19.2027 36.0312 19.6827 36.0312 20.184V25H34.2713ZM29.0073 25V17.32H30.7673V25H29.0073ZM42.3878 25.16C41.6198 25.16 40.9264 24.9893 40.3078 24.648C39.6998 24.296 39.2144 23.816 38.8518 23.208C38.4998 22.6 38.3238 21.9173 38.3238 21.16C38.3238 20.4027 38.4998 19.7253 38.8518 19.128C39.2038 18.52 39.6784 18.04 40.2758 17.688C40.8838 17.336 41.5558 17.16 42.2918 17.16C43.0064 17.16 43.6358 17.3253 44.1798 17.656C44.7344 17.9867 45.1664 18.44 45.4758 19.016C45.7958 19.592 45.9558 20.248 45.9558 20.984C45.9558 21.112 45.9451 21.2453 45.9237 21.384C45.9131 21.512 45.8918 21.656 45.8598 21.816H39.5558V20.376H44.9478L44.2918 20.952C44.2704 20.4827 44.1798 20.088 44.0198 19.768C43.8598 19.448 43.6304 19.2027 43.3318 19.032C43.0438 18.8613 42.6864 18.776 42.2598 18.776C41.8118 18.776 41.4224 18.872 41.0918 19.064C40.7611 19.256 40.5051 19.528 40.3238 19.88C40.1424 20.2213 40.0518 20.632 40.0518 21.112C40.0518 21.592 40.1478 22.0133 40.3398 22.376C40.5318 22.7387 40.8038 23.0213 41.1558 23.224C41.5078 23.416 41.9131 23.512 42.3718 23.512C42.7664 23.512 43.1291 23.4427 43.4598 23.304C43.8011 23.1653 44.0891 22.9627 44.3238 22.696L45.4438 23.832C45.0704 24.2693 44.6171 24.6 44.0838 24.824C43.5504 25.048 42.9851 25.16 42.3878 25.16ZM48.3666 25V17.32H50.1266V25H48.3666ZM50.1266 20.728L49.5186 20.424C49.5186 19.4533 49.732 18.6693 50.1586 18.072C50.596 17.464 51.252 17.16 52.1266 17.16C52.5106 17.16 52.8573 17.2293 53.1666 17.368C53.476 17.5067 53.764 17.7307 54.0306 18.04L52.8786 19.224C52.74 19.0747 52.5853 18.968 52.4146 18.904C52.244 18.84 52.0466 18.808 51.8226 18.808C51.332 18.808 50.9266 18.9627 50.6066 19.272C50.2866 19.5813 50.1266 20.0667 50.1266 20.728ZM58.8479 28.36C58.0372 28.36 57.3279 28.2107 56.7199 27.912C56.1119 27.624 55.6212 27.2133 55.2479 26.68L56.3999 25.528C56.7092 25.912 57.0612 26.2 57.4559 26.392C57.8505 26.584 58.3252 26.68 58.8799 26.68C59.5732 26.68 60.1225 26.4987 60.5279 26.136C60.9332 25.784 61.1359 25.2987 61.1359 24.68V22.792L61.4399 21.096L61.1359 19.384V17.32H62.8959V24.68C62.8959 25.416 62.7252 26.056 62.3839 26.6C62.0425 27.1547 61.5679 27.5867 60.9599 27.896C60.3519 28.2053 59.6479 28.36 58.8479 28.36ZM58.7679 24.84C58.0852 24.84 57.4665 24.6747 56.9119 24.344C56.3679 24.0027 55.9359 23.5387 55.6159 22.952C55.3065 22.3653 55.1519 21.7093 55.1519 20.984C55.1519 20.2587 55.3065 19.608 55.6159 19.032C55.9359 18.456 56.3679 18.0027 56.9119 17.672C57.4665 17.3307 58.0852 17.16 58.7679 17.16C59.3759 17.16 59.9092 17.2827 60.3679 17.528C60.8265 17.7733 61.1839 18.1147 61.4399 18.552C61.6959 18.9787 61.8239 19.48 61.8239 20.056V21.944C61.8239 22.5093 61.6905 23.0107 61.4239 23.448C61.1679 23.8853 60.8105 24.2267 60.3519 24.472C59.8932 24.7173 59.3652 24.84 58.7679 24.84ZM59.1199 23.176C59.5465 23.176 59.9199 23.0853 60.2399 22.904C60.5599 22.7227 60.8052 22.472 60.9759 22.152C61.1572 21.8213 61.2479 21.4373 61.2479 21C61.2479 20.5627 61.1572 20.184 60.9759 19.864C60.8052 19.5333 60.5599 19.2773 60.2399 19.096C59.9199 18.9147 59.5465 18.824 59.1199 18.824C58.6932 18.824 58.3145 18.9147 57.9839 19.096C57.6639 19.2773 57.4132 19.5333 57.2319 19.864C57.0505 20.184 56.9599 20.5627 56.9599 21C56.9599 21.4267 57.0505 21.8053 57.2319 22.136C57.4132 22.4667 57.6639 22.7227 57.9839 22.904C58.3145 23.0853 58.6932 23.176 59.1199 23.176ZM68.331 25.08L65.051 17.32H66.987L69.227 23.016H68.667L71.035 17.32H72.987L69.419 25.08H68.331ZM66.043 28.2L68.427 23.288L69.419 25.08L67.995 28.2H66.043Z"
        fill={textColor}
      />
      <Path
        d="M35.3931 37.9265V43.4857C35.3931 43.9974 34.9782 44.4123 34.4665 44.4123H29.9265C29.4148 44.4123 29 44.8271 29 45.3388V80.547C29 81.0587 29.4148 81.4735 29.9265 81.4735H59.2976C59.8093 81.4735 60.2241 81.0587 60.2241 80.547V45.3388C60.2241 44.8271 59.8093 44.4123 59.2976 44.4123H54.5723C54.0606 44.4123 53.6457 43.9974 53.6457 43.4857V37.9265C53.6457 37.4148 53.2309 37 52.7192 37H36.3196C35.8079 37 35.3931 37.4148 35.3931 37.9265Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="4.63266"
      />
      <Path
        d="M46.1769 47.3777L39.7529 59.9041L49.3889 57.9207L43.3218 71.2822"
        stroke={strokeColor}
        strokeWidth="3.70613"
        strokeLinecap="round"
      />
    </Svg>
  );
}