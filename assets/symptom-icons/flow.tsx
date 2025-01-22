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

export default function Flow({
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
        d="M57.2148 37.6384C65.9859 37.6384 64.4197 30.1203 63.4799 27.6143"
        stroke={strokeColor}
        strokeWidth="3.13253"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M60.9766 81.1803C69.7476 81.1803 68.1814 73.6623 67.2416 71.1562"
        stroke={strokeColor}
        strokeWidth="3.13253"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M35.2072 41.0117C40.1045 34.2691 57.6586 29.8665 75.8068 41.5813C76.1699 41.8158 75.8657 42.3447 75.4641 42.1849C48.53 31.4736 45.1635 51.8077 36.4475 49.5439C32.1458 48.4266 33.6804 43.1137 35.2072 41.0117Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.79861"
        strokeLinejoin="round"
      />
      <Path
        d="M48.0565 73.4083C42.0756 78.0038 26.9339 79.6568 14.2559 65.7811C13.9662 65.4639 14.405 65.0195 14.7577 65.2647C35.3108 79.5615 47.1011 59.0487 53.9123 62.6945C57.285 64.4997 55.9165 67.3689 48.0565 73.4083Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.79861"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3542 54.875C10.1371 54.686 9.80971 54.7008 9.61047 54.9086C9.41122 55.1165 9.41029 55.4442 9.60835 55.6532C12.075 58.256 16.6761 62.1201 22.1003 64.2888C27.5375 66.4627 33.8721 66.9539 39.6682 62.6625C39.7412 62.6085 39.8194 62.5608 39.8982 62.5225C41.1167 61.9299 42.349 61.1861 43.5823 60.4417C43.737 60.3483 43.8918 60.2549 44.0465 60.1618C45.4454 59.32 46.8528 58.4958 48.3032 57.8606C51.1862 56.5981 54.1887 56.1026 57.5142 57.7442C61.7365 59.8286 65.4611 61.3584 68.5101 61.5866C70.0489 61.7017 71.45 61.4888 72.6641 60.8211C73.8815 60.1516 74.8588 59.0534 75.5974 57.491C76.888 54.761 75.9868 51.0502 73.528 48.207C71.0473 45.3385 66.9291 43.2688 61.594 43.7711C59.7136 43.7782 57.2619 44.5609 54.6104 45.7219C51.9282 46.8964 48.9723 48.49 46.0773 50.1721C43.1808 51.8551 40.3344 53.6333 37.8722 55.1794C37.6786 55.3009 37.4875 55.421 37.299 55.5394C35.0822 56.932 33.227 58.0975 31.9713 58.7961C31.921 58.8241 31.8704 58.847 31.8098 58.8692C27.3886 60.4929 23.9282 61.1172 20.6462 60.5493C17.3657 59.9816 14.1847 58.209 10.3542 54.875Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.07916"
        strokeLinejoin="round"
      />
      <Path
        d="M28.6301 25V13.8H30.4701V25H28.6301ZM29.8941 20.2V18.52H35.5901V20.2H29.8941ZM29.8941 15.48V13.8H35.8621V15.48H29.8941ZM38.4526 25V13.48H40.2126V25H38.4526ZM46.6913 25.16C45.9446 25.16 45.2673 24.984 44.6593 24.632C44.0513 24.2693 43.566 23.784 43.2033 23.176C42.8513 22.568 42.6753 21.8907 42.6753 21.144C42.6753 20.3973 42.8513 19.7253 43.2033 19.128C43.566 18.5307 44.0513 18.056 44.6593 17.704C45.2673 17.3413 45.9446 17.16 46.6913 17.16C47.4486 17.16 48.1313 17.336 48.7393 17.688C49.3473 18.04 49.8273 18.52 50.1793 19.128C50.542 19.7253 50.7233 20.3973 50.7233 21.144C50.7233 21.8907 50.542 22.568 50.1793 23.176C49.8273 23.784 49.3473 24.2693 48.7393 24.632C48.1313 24.984 47.4486 25.16 46.6913 25.16ZM46.6913 23.464C47.1286 23.464 47.5126 23.368 47.8433 23.176C48.1846 22.9733 48.446 22.696 48.6273 22.344C48.8193 21.992 48.9153 21.592 48.9153 21.144C48.9153 20.696 48.8193 20.3013 48.6273 19.96C48.4353 19.6187 48.174 19.352 47.8433 19.16C47.5126 18.9573 47.1286 18.856 46.6913 18.856C46.2646 18.856 45.8806 18.9573 45.5393 19.16C45.2086 19.352 44.9473 19.6187 44.7553 19.96C44.574 20.3013 44.4833 20.696 44.4833 21.144C44.4833 21.592 44.574 21.992 44.7553 22.344C44.9473 22.696 45.2086 22.9733 45.5393 23.176C45.8806 23.368 46.2646 23.464 46.6913 23.464ZM55.2394 25L52.1514 17.32H53.9754L56.0554 22.904L55.5114 22.92L57.5434 17.32H58.5674L60.5994 22.92L60.0554 22.904L62.1354 17.32H63.9594L60.8714 25H59.8474L57.7674 19.688H58.3434L56.2634 25H55.2394Z"
        fill={textColor}
      />
    </Svg>
  );
}