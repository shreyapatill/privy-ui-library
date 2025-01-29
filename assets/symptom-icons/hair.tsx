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

export default function Hair({
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
        d="M28.8566 25V13.8H30.6966V25H28.8566ZM35.9766 25V13.8H37.8166V25H35.9766ZM30.1206 20.04V18.36H36.3766V20.04H30.1206ZM44.2233 25.16C43.5299 25.16 42.9006 24.984 42.3353 24.632C41.7806 24.28 41.3379 23.8053 41.0073 23.208C40.6873 22.6 40.5273 21.9227 40.5273 21.176C40.5273 20.4187 40.6873 19.7413 41.0073 19.144C41.3379 18.536 41.7806 18.056 42.3353 17.704C42.9006 17.3413 43.5299 17.16 44.2233 17.16C44.8099 17.16 45.3273 17.288 45.7753 17.544C46.2339 17.7893 46.5966 18.1307 46.8633 18.568C47.1299 19.0053 47.2633 19.5013 47.2633 20.056V22.264C47.2633 22.8187 47.1299 23.3147 46.8633 23.752C46.6073 24.1893 46.2499 24.536 45.7913 24.792C45.3326 25.0373 44.8099 25.16 44.2233 25.16ZM44.5113 23.496C45.1619 23.496 45.6846 23.2773 46.0793 22.84C46.4846 22.4027 46.6873 21.8427 46.6873 21.16C46.6873 20.7013 46.5966 20.296 46.4153 19.944C46.2339 19.592 45.9779 19.32 45.6473 19.128C45.3273 18.9253 44.9486 18.824 44.5113 18.824C44.0846 18.824 43.7059 18.9253 43.3753 19.128C43.0553 19.32 42.7993 19.592 42.6073 19.944C42.4259 20.296 42.3353 20.7013 42.3353 21.16C42.3353 21.6187 42.4259 22.024 42.6073 22.376C42.7993 22.728 43.0553 23.0053 43.3753 23.208C43.7059 23.4 44.0846 23.496 44.5113 23.496ZM46.5753 25V22.936L46.8793 21.064L46.5753 19.208V17.32H48.3353V25H46.5753ZM51.3045 25V17.32H53.0645V25H51.3045ZM52.1845 15.912C51.8858 15.912 51.6352 15.8107 51.4325 15.608C51.2405 15.4053 51.1445 15.1547 51.1445 14.856C51.1445 14.5573 51.2405 14.3067 51.4325 14.104C51.6352 13.9013 51.8858 13.8 52.1845 13.8C52.4938 13.8 52.7445 13.9013 52.9365 14.104C53.1285 14.3067 53.2245 14.5573 53.2245 14.856C53.2245 15.1547 53.1285 15.4053 52.9365 15.608C52.7445 15.8107 52.4938 15.912 52.1845 15.912ZM56.0385 25V17.32H57.7985V25H56.0385ZM57.7985 20.728L57.1905 20.424C57.1905 19.4533 57.4038 18.6693 57.8305 18.072C58.2678 17.464 58.9238 17.16 59.7985 17.16C60.1825 17.16 60.5292 17.2293 60.8385 17.368C61.1478 17.5067 61.4358 17.7307 61.7025 18.04L60.5505 19.224C60.4118 19.0747 60.2572 18.968 60.0865 18.904C59.9158 18.84 59.7185 18.808 59.4945 18.808C59.0038 18.808 58.5985 18.9627 58.2785 19.272C57.9585 19.5813 57.7985 20.0667 57.7985 20.728Z"
        fill={textColor}
      />
      <Path
        d="M43.2919 70.6647C41.8296 67.2899 42.3154 56.6849 44.7046 39.2736C44.7714 38.7869 45.4707 38.793 45.524 39.2814C46.9497 52.3468 48.496 67.4887 46.7699 70.6647C46.0207 72.5905 44.1908 73.2595 43.2919 70.6647Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="2.09018"
      />
      <Path
        d="M20.4916 70.6647C19.0293 67.2899 19.5151 56.6849 21.9043 39.2736C21.9711 38.7869 22.6704 38.793 22.7237 39.2814C24.1494 52.3468 25.6957 67.4887 23.9696 70.6647C23.2204 72.5905 21.3906 73.2595 20.4916 70.6647Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="2.09018"
      />
      <Path
        d="M65.248 70.6647C63.7857 67.2899 64.2715 56.6849 66.6607 39.2736C66.7275 38.7869 67.4267 38.793 67.48 39.2814C68.9057 52.3468 70.452 67.4887 68.7259 70.6647C67.9768 72.5905 66.1469 73.2595 65.248 70.6647Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="2.09018"
      />
      <Path
        d="M7 72.3689H16.0778C22.8333 86.0596 26.9852 75.33 29.1667 72.3689H38.8778C45.2111 86.5821 49.3981 75.0861 51.1222 72.3689H60.8333C66.9556 86.8956 70.9315 74.9119 72.9722 72.3689H83"
        stroke={accentColor}
        strokeWidth="3.5533"
        strokeLinecap="round"
      />
    </Svg>
  );
}