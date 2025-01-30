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

export default function Feces({
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
        d="M24.6535 25V13.8H26.4935V25H24.6535ZM25.9175 20.2V18.52H31.6135V20.2H25.9175ZM25.9175 15.48V13.8H31.8855V15.48H25.9175ZM37.7471 25.16C36.9791 25.16 36.2858 24.9893 35.6671 24.648C35.0591 24.296 34.5738 23.816 34.2111 23.208C33.8591 22.6 33.6831 21.9173 33.6831 21.16C33.6831 20.4027 33.8591 19.7253 34.2111 19.128C34.5631 18.52 35.0378 18.04 35.6351 17.688C36.2431 17.336 36.9151 17.16 37.6511 17.16C38.3658 17.16 38.9951 17.3253 39.5391 17.656C40.0938 17.9867 40.5258 18.44 40.8351 19.016C41.1551 19.592 41.3151 20.248 41.3151 20.984C41.3151 21.112 41.3045 21.2453 41.2831 21.384C41.2725 21.512 41.2511 21.656 41.2191 21.816H34.9151V20.376H40.3071L39.6511 20.952C39.6298 20.4827 39.5391 20.088 39.3791 19.768C39.2191 19.448 38.9898 19.2027 38.6911 19.032C38.4031 18.8613 38.0458 18.776 37.6191 18.776C37.1711 18.776 36.7818 18.872 36.4511 19.064C36.1205 19.256 35.8645 19.528 35.6831 19.88C35.5018 20.2213 35.4111 20.632 35.4111 21.112C35.4111 21.592 35.5071 22.0133 35.6991 22.376C35.8911 22.7387 36.1631 23.0213 36.5151 23.224C36.8671 23.416 37.2725 23.512 37.7311 23.512C38.1258 23.512 38.4885 23.4427 38.8191 23.304C39.1605 23.1653 39.4485 22.9627 39.6831 22.696L40.8031 23.832C40.4298 24.2693 39.9765 24.6 39.4431 24.824C38.9098 25.048 38.3445 25.16 37.7471 25.16ZM47.262 25.16C46.5047 25.16 45.8167 24.984 45.198 24.632C44.59 24.28 44.11 23.8 43.758 23.192C43.406 22.584 43.23 21.9067 43.23 21.16C43.23 20.4027 43.406 19.7253 43.758 19.128C44.11 18.52 44.59 18.04 45.198 17.688C45.8167 17.336 46.5047 17.16 47.262 17.16C47.8593 17.16 48.414 17.2773 48.926 17.512C49.4487 17.736 49.8913 18.0613 50.254 18.488L49.102 19.656C48.878 19.3893 48.606 19.192 48.286 19.064C47.9767 18.9253 47.6353 18.856 47.262 18.856C46.8247 18.856 46.4353 18.9573 46.094 19.16C45.7633 19.352 45.502 19.6187 45.31 19.96C45.1287 20.3013 45.038 20.7013 45.038 21.16C45.038 21.608 45.1287 22.008 45.31 22.36C45.502 22.7013 45.7633 22.9733 46.094 23.176C46.4353 23.368 46.8247 23.464 47.262 23.464C47.6353 23.464 47.9767 23.4 48.286 23.272C48.606 23.1333 48.878 22.9307 49.102 22.664L50.254 23.832C49.8913 24.2587 49.4487 24.5893 48.926 24.824C48.414 25.048 47.8593 25.16 47.262 25.16ZM55.9346 25.16C55.1666 25.16 54.4733 24.9893 53.8546 24.648C53.2466 24.28 52.7613 23.8 52.3986 23.192C52.0466 22.584 51.8706 21.9067 51.8706 21.16C51.8706 20.4027 52.0466 19.7253 52.3986 19.128C52.7506 18.52 53.2253 18.04 53.8226 17.688C54.4306 17.336 55.1026 17.16 55.8386 17.16C56.5533 17.16 57.1826 17.3253 57.7266 17.656C58.2813 17.9867 58.7133 18.44 59.0226 19.016C59.3426 19.592 59.5026 20.248 59.5026 20.984C59.5026 21.112 59.492 21.2453 59.4706 21.384C59.46 21.512 59.4386 21.656 59.4066 21.816H53.1026V20.376H58.4946L57.8386 20.952C57.8173 20.4827 57.7266 20.088 57.5666 19.768C57.4066 19.448 57.1773 19.2027 56.8786 19.032C56.5906 18.8613 56.2333 18.776 55.8066 18.776C55.3586 18.776 54.9693 18.872 54.6386 19.064C54.308 19.256 54.052 19.528 53.8706 19.88C53.6893 20.2213 53.5986 20.632 53.5986 21.112C53.5986 21.592 53.6946 22.0133 53.8866 22.376C54.0786 22.7387 54.3506 23.0213 54.7026 23.224C55.0546 23.416 55.46 23.512 55.9186 23.512C56.3133 23.512 56.676 23.4427 57.0066 23.304C57.348 23.1653 57.636 22.9627 57.8706 22.696L58.9906 23.832C58.6173 24.2693 58.164 24.6 57.6306 24.824C57.0973 25.048 56.532 25.16 55.9346 25.16ZM64.4255 25.16C63.9988 25.16 63.5882 25.1067 63.1935 25C62.7988 24.8827 62.4362 24.7227 62.1055 24.52C61.7748 24.3067 61.4868 24.0507 61.2415 23.752L62.3615 22.632C62.6282 22.9413 62.9322 23.176 63.2735 23.336C63.6255 23.4853 64.0202 23.56 64.4575 23.56C64.8522 23.56 65.1508 23.5013 65.3535 23.384C65.5562 23.2667 65.6575 23.096 65.6575 22.872C65.6575 22.6373 65.5615 22.456 65.3695 22.328C65.1775 22.2 64.9268 22.0933 64.6175 22.008C64.3188 21.912 63.9988 21.816 63.6575 21.72C63.3268 21.624 63.0068 21.496 62.6975 21.336C62.3988 21.1653 62.1535 20.936 61.9615 20.648C61.7695 20.36 61.6735 19.9867 61.6735 19.528C61.6735 19.0373 61.7855 18.616 62.0095 18.264C62.2442 17.912 62.5695 17.64 62.9855 17.448C63.4122 17.256 63.9188 17.16 64.5055 17.16C65.1242 17.16 65.6682 17.272 66.1375 17.496C66.6175 17.7093 67.0175 18.0347 67.3375 18.472L66.2175 19.592C65.9935 19.3147 65.7375 19.1067 65.4495 18.968C65.1615 18.8293 64.8308 18.76 64.4575 18.76C64.1055 18.76 63.8335 18.8133 63.6415 18.92C63.4495 19.0267 63.3535 19.1813 63.3535 19.384C63.3535 19.5973 63.4495 19.7627 63.6415 19.88C63.8335 19.9973 64.0788 20.0987 64.3775 20.184C64.6868 20.2693 65.0068 20.3653 65.3375 20.472C65.6788 20.568 65.9988 20.7067 66.2975 20.888C66.6068 21.0587 66.8575 21.2933 67.0495 21.592C67.2415 21.88 67.3375 22.2587 67.3375 22.728C67.3375 23.4747 67.0762 24.0667 66.5535 24.504C66.0308 24.9413 65.3215 25.16 64.4255 25.16Z"
        fill={textColor}
      />
      <Circle cx="44.5" cy="59.5" r="26.5" fill={accentColor} />
      <Path
        d="M44.8792 48.754C45.2793 47.9304 45.6654 46.0803 44.5046 44.4556C44.3662 44.2619 44.5248 44.0096 44.7296 44.1311C46.5542 45.2132 47.1102 48.6272 50.8332 51.8961C50.8637 51.9228 50.9027 51.942 50.9422 51.9506C55.2274 52.8832 55.5904 55.2746 52.0313 56.6339C51.7874 56.727 51.8135 57.1636 52.0662 57.2289C56.3825 58.3441 57.5372 61.9604 53.9096 63.4972C53.6638 63.6013 53.6816 64.1263 53.9365 64.2056C57.3368 65.2636 61.6099 68.6316 55.6447 71.4699C53.1832 72.6411 45.1995 74.2807 32.9558 71.4699C29.2797 70.1489 28.6396 68.0744 34.5401 65.2359C34.7492 65.1353 34.7138 64.8101 34.4907 64.7466C30.7911 63.6926 30.9572 60.7444 36.842 58.0775C37.0546 57.9812 37.0273 57.6501 36.8046 57.5801C33.9615 56.6862 32.7504 54.421 38.8172 51.9511C38.839 51.9423 38.8603 51.9299 38.8788 51.9154C40.1361 50.9322 42.7206 51.1914 44.8449 48.8048C44.8586 48.7894 44.8702 48.7725 44.8792 48.754Z"
        fill={fillColor}
        stroke={fillColor}
        strokeWidth="1.78652"
        strokeLinecap="round"
      />
      <Path
        d="M60.4923 64.9395C57.8875 62.5956 51.6817 64.5789 48.9044 65.8635"
        stroke={accentColor}
        strokeWidth="0.595506"
        strokeLinecap="round"
      />
      <Path
        d="M60.4923 57.3177C57.8875 54.9738 51.6817 56.9571 48.9044 58.2417"
        stroke={accentColor}
        strokeWidth="0.595506"
        strokeLinecap="round"
      />
    </Svg>
  );
}