import React from "react";
import Svg, { Rect, Path, Circle, Ellipse, Line } from "react-native-svg";

/** Shared type used for all icons. */
type GenericProps = {
  fillColor?: string;
  strokeColor?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  width?: number;
  height?: number;
};

/** Centralized default settings for all icons. */
const ICON_DEFAULTS: Required<GenericProps> = {
  fillColor: "transparent",
  strokeColor: "#000",
  accentColor: "#000",
  secondaryAccentColor: "#000",
  width: 81,
  height: 80,
};

/**
 * merges user props with defaults,
 * then calls custom rendering function.
 */
function createIcon(
  renderFn: (merged: Required<GenericProps>) => JSX.Element
) {
  return function Icon(props: GenericProps) {
    // Merge defaults with the user-supplied props
    const mergedProps = { ...ICON_DEFAULTS, ...props };
    return renderFn(mergedProps);
  };
}

// ----------------------------------------------------------------------------
// Icons start here
// ----------------------------------------------------------------------------


export const Allergies = createIcon(
    ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
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
    )
);

export const Angry = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path
        d="M28.1616 29.4536L37.2384 36.2464"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M44.6176 36.231L53.6161 29.3691"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M31.2002 53.4C31.2002 48.1496 37.6353 46.5245 40.8529 46.837C48.575 46.8367 51.149 51.5249 50.5055 53.4"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
      <Circle cx="49.7998" cy="35.8" r="2.9" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.2" />
      <Circle cx="31.7998" cy="35.8" r="2.9" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.2" />
    </Svg>
  )
);

export const Antibiotics = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Path
        d="M28.0456 47.4182L32.6791 34.1633C32.7476 33.9673 32.6412 33.7534 32.4437 33.6899C26.6714 31.2071 10.9507 28.2147 9.35034 35.2377C9.3384 35.2901 9.33108 35.3437 9.3295 35.3974C9.211 39.4282 15.4147 47.2135 27.0218 48.0956C27.4762 48.1302 27.8952 47.8484 28.0456 47.4182Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="3.08632"
      />
      <Circle cx="34.3843" cy="54.3653" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Circle cx="35.6192" cy="62.1841" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Circle cx="40.1455" cy="57.0401" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Circle cx="47.9644" cy="54.3653" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Circle cx="35.6192" cy="47.1639" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Circle cx="41.7915" cy="51.0733" r="1.54316" fill={accentColor} stroke={accentColor} strokeWidth="0.205755" />
      <Path
        d="M49.363 34.2342L52.5839 47.4734C52.6329 47.675 52.8385 47.7966 53.0389 47.7424C59.2269 46.6675 74.0522 40.6736 71.63 34.1003C71.611 34.0486 71.5871 33.9986 71.5581 33.9517C69.4868 30.6092 60.0895 27.6042 49.859 33.1059C49.4556 33.3228 49.2547 33.7892 49.363 34.2342Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="3.08632"
      />
    </Svg>
  )
);

export const Antihistamine = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
      <Circle cx="40.0352" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M36.6828 44.566L19.0766 42.1947C18.3673 42.0992 17.7139 42.5944 17.6142 43.3032L15.1484 60.836C15.075 61.358 15.3237 61.8727 15.7782 62.1395L27.0957 68.7829C27.5587 69.0547 28.1409 69.0143 28.5619 68.6812L39.76 59.8221C40.1624 59.5037 40.3401 58.9787 40.2139 58.4814L36.6828 44.566ZM36.6828 44.566L40.9945 30.5643C41.142 30.0852 41.5516 29.7335 42.0475 29.66L54.9293 27.7521C55.4463 27.6756 55.8673 27.2971 55.9984 26.7912L59.8991 11.7336"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.1994 60.2643L22.0957 47.0108"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M32.7593 48.2043L35.3136 57.4462"
        stroke={accentColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Anxious = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M34.2002 54.3C34.2002 49.9247 38.2625 48.5704 40.2936 48.8309C45.1684 48.8306 46.7933 52.7374 46.3871 54.3"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
      <Path
        d="M43.7998 35.3999L52.4131 40.3999"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M27.6001 40.4999L36.2001 35.3999"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M28.7002 22.2L30.3002 17.5L30.9002 19L31.2002 19.7L31.5002 20.3L32.1002 21.6L32.6002 22.7L33.0002 23.8L33.2002 24.6L33.5002 25.5L33.8002 26.4L34.154 27.6384C34.1847 27.7456 34.2002 27.8566 34.2002 27.9681V28.9523C34.2002 29.0504 34.1882 29.1481 34.1644 29.2433L34.0705 29.6189C34.0243 29.8036 33.9348 29.9747 33.8094 30.1181L33.4169 30.5666C33.3395 30.655 33.2495 30.7317 33.1499 30.794L32.5786 31.151C32.5264 31.1836 32.4718 31.2122 32.4153 31.2364L31.9698 31.4273C31.8574 31.4755 31.7383 31.5062 31.6165 31.5184L30.9142 31.5886C30.8384 31.5962 30.762 31.5965 30.6861 31.5896L29.7926 31.5084C29.7311 31.5028 29.6701 31.4925 29.6102 31.4775L29.1543 31.3635C28.9869 31.3217 28.8304 31.2442 28.6957 31.1364L28.106 30.6646C27.9704 30.5562 27.86 30.4196 27.7823 30.2643L27.6002 29.9L27.3269 29.3534C27.2436 29.1867 27.2002 29.003 27.2002 28.8167V28.5317C27.2002 28.4442 27.2098 28.3569 27.2288 28.2714L27.4002 27.5L27.6002 26.2L27.8002 25.3L28.7002 22.2Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </Svg>
  )
);

export const Bloated = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="41.5" cy="40.5" r="27.5" fill={accentColor} />
      <Circle cx="57.8436" cy="58.5714" r="9.42857" fill={secondaryAccentColor} />
      <Circle cx="57.9208" cy="58.65" r="7.46429" fill={accentColor} />
      <Circle cx="55.4865" cy="55.4286" r="1.57143" fill={secondaryAccentColor} />
      <Circle cx="58.8634" cy="61.6357" r="2.43571" fill={secondaryAccentColor} />
      <Circle cx="60.9066" cy="55.9786" r="2.12143" fill={secondaryAccentColor} />
      <Path
        d="M52.6959 23.6857H27.4355C26.5861 23.6857 25.7187 23.8799 25.0838 24.4442C23.0432 26.258 24.0061 28.2095 25.2507 29.2692C25.785 29.7242 26.4996 29.8544 27.2013 29.8544C34.3648 29.8544 43.9979 29.8544 49.3255 29.8544C50.4151 29.8544 51.543 30.1784 52.1654 31.0727C53.3061 32.7119 52.7602 34.2164 51.9314 35.1426C51.4092 35.7263 50.5976 35.889 49.8144 35.889H27.6035C26.6488 35.889 25.6699 36.135 25.0193 36.8336C23.4091 38.5628 24.1239 40.2251 25.1617 41.2504C25.7349 41.8166 26.5608 41.9906 27.3665 41.9906H48.6964C50.1544 41.9906 51.6604 42.6195 52.1305 43.9995C52.5942 45.3607 52.3613 46.4854 51.9244 47.2676C51.4821 48.0593 50.5253 48.2934 49.6185 48.2934H27.5801C26.64 48.2934 25.6805 48.537 25.0177 49.2038C23.0292 51.204 24.0549 53.1329 25.3172 54.1079C25.8172 54.4941 26.4633 54.5962 27.095 54.5962H38.0206C44.1245 55.0656 44.5141 57.7313 44.5141 58.4852C44.5141 61.3684 42.8907 63.7822 41.592 64.3857"
        stroke={secondaryAccentColor}
        strokeWidth="5.02857"
        strokeLinecap="round"
      />
      <Circle cx="53.9926" cy="59.593" r="1.02143" fill={secondaryAccentColor} />
    </Svg>
  )
);

export const Calm = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40" cy="40" r="27.5" fill={accentColor} />
      <Path
        d="M26.3599 49.6799C38.3279 58.3919 49.6799 53.3099 53.8599 49.6799"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M24.1602 34.61C29.2202 29 33.5468 32.1533 35.6002 34.61"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M43.96 34.5529C49.02 28.9429 53.3466 32.0962 55.4 34.5529"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Carbs = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27." fill={accentColor}/>
      <Path 
        d="M29.6654 26.9993C26.3099 28.4943 21.5082 31.036 27.8074 36.8537C28.1398 37.1607 28.3309 37.5991 28.3067 38.051L27.6438 50.4006C27.6389 50.4929 27.6251 50.5831 27.6048 50.6733C27.0614 53.0842 27.4201 57.6527 33.0631 57.6527H47.8741C48.0215 57.6527 48.1679 57.63 48.3094 57.5886C50.372 56.9842 52.4965 56.8122 52.4965 53.8348V38.6741C52.4965 38.0869 52.8578 37.5686 53.3308 37.2206C56.1821 35.1229 58.2929 29.0093 51.8853 27.3615C41.032 24.5703 32.5985 26.0866 29.6654 26.9993Z" 
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        stroke-width="1.46667"
      />
    </Svg>
  )
);

export const Check = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
      <Circle cx="40.0195" cy="39.9971" r="39" fill={fillColor} stroke={strokeColor} strokeWidth={2} />
      <Path
        d="M18.4219 42.1022L34.4045 52.2371L61.8619 27.9971"
        stroke={accentColor}
        strokeWidth={6}
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const ClearDischarge = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Ellipse cx="40.5" cy="39.5003" rx="27.5" ry="27.5003" fill={accentColor} />
      <Path d="M42.2289 46.7289L37.5146 50.4218" stroke={secondaryAccentColor} strokeWidth="1.57144" strokeLinecap="round" />
      <Path
        d="M57.6283 33.0577H22.7426C22.6558 33.0577 22.5854 33.128 22.5854 33.2148V39.6127C22.5854 39.6853 22.632 39.7475 22.7023 39.7652C27.0495 40.8598 35.9576 45.329 37.8813 54.7727C37.8963 54.8463 37.9611 54.9008 38.0362 54.9008H43.0926C43.1794 54.9008 43.2496 54.8336 43.2512 54.7468C43.3268 50.8189 46.2874 42.5868 57.6635 39.7663C57.7339 39.7488 57.7854 39.6853 57.7854 39.6128V33.2148C57.7854 33.128 57.7151 33.0577 57.6283 33.0577Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57144"
        strokeLinecap="round"
      />
      <Path
        d="M34.6808 41.041C37.0478 39.2376 42.6252 36.74 46.6332 40.5613C46.949 40.8624 47.1443 41.2661 47.2327 41.6934C47.5342 43.1504 46.3693 44.471 45.2103 45.404C44.7278 45.7925 44.3495 46.316 44.2143 47.0075C44.0231 47.9852 44.079 49.0785 43.3408 49.7473C42.8084 50.2297 42.0871 50.6653 41.1781 50.8617C39.3782 51.2505 38.1633 49.3377 37.0038 47.9072C36.5542 47.3525 35.9586 46.8425 35.1843 46.4782C34.0356 45.9378 32.6473 45.3828 32.6465 44.1133C32.6459 43.1518 33.1258 42.0259 34.6808 41.041Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.63998"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const ColdFlu = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
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
  )
);

export const Confident = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M31.6287 28.5797C31.807 28.0242 32.593 28.0242 32.7713 28.5797L33.9073 32.1186C33.987 32.3668 34.2178 32.5352 34.4786 32.5352H38.17C38.7495 32.5352 38.9923 33.2753 38.5255 33.6186L35.5266 35.824C35.3188 35.9768 35.2319 36.2452 35.3108 36.4907L36.4533 40.05C36.6311 40.604 35.9953 41.0615 35.5265 40.7167L32.5555 38.5318C32.344 38.3763 32.056 38.3763 31.8445 38.5318L28.8735 40.7167C28.4047 41.0615 27.7689 40.604 27.9467 40.05L29.0892 36.4907C29.1681 36.2452 29.0812 35.9768 28.8734 35.824L25.8745 33.6186C25.4077 33.2753 25.6505 32.5352 26.23 32.5352H29.9214C30.1822 32.5352 30.413 32.3668 30.4927 32.1186L31.6287 28.5797Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M48.6287 28.5797C48.807 28.0242 49.593 28.0242 49.7713 28.5797L50.9073 32.1186C50.987 32.3668 51.2178 32.5352 51.4786 32.5352H55.17C55.7495 32.5352 55.9923 33.2753 55.5255 33.6186L52.5266 35.824C52.3188 35.9768 52.2319 36.2452 52.3108 36.4907L53.4533 40.05C53.6311 40.604 52.9953 41.0615 52.5265 40.7167L49.5555 38.5318C49.344 38.3763 49.056 38.3763 48.8445 38.5318L45.8735 40.7167C45.4047 41.0615 44.7689 40.604 44.9467 40.05L46.0892 36.4907C46.1681 36.2452 46.0812 35.9768 45.8734 35.824L42.8745 33.6186C42.4077 33.2753 42.6505 32.5352 43.23 32.5352H46.9214C47.1822 32.5352 47.413 32.3668 47.4927 32.1186L48.6287 28.5797Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M47.1807 47.3999C47.1807 51.7757 43.1403 53.13 41.1201 52.8696C36.2716 52.8699 34.6554 48.9627 35.0594 47.3999"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Constipation = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.4055" fill={accentColor} stroke={accentColor} strokeWidth="0.18902" />
      <Path d="M42.2284 47.7286L37.5142 51.4214" stroke={accentColor} strokeWidth="1.57143" strokeLinecap="round" />
      <Path d="M39.298 21.2619C39.8776 20.2944 41.2796 20.2944 41.8592 21.2619L59.7035 51.0471C60.2997 52.0421 59.5829 53.3072 58.4229 53.3072H22.7343C21.5744 53.3072 20.8576 52.0421 21.4537 51.0471L39.298 21.2619Z" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.157143" />
      <Path d="M43.5707 32.1714H37.9083C37.7069 32.1714 37.5575 32.3581 37.6016 32.5545L40.0426 43.4274C40.2274 44.2507 41.4032 44.2435 41.5779 43.418L43.8782 32.5508C43.9195 32.3553 43.7705 32.1714 43.5707 32.1714Z" fill={accentColor} stroke={accentColor} strokeWidth="2.35714" strokeLinecap="round" />
      <Circle cx="40.6579" cy="49.3" r="2.27857" fill={accentColor} stroke={accentColor} strokeWidth="0.157143" />
    </Svg>
  )
);

export const Contraception = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
        <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
        <Circle cx="40.0195" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
        <Rect x="26.3647" y="14" width="46.5015" height="35.2913" rx="4.15192" transform="rotate(25.7734 26.3647 14)" fill={accentColor} />
        <Circle cx="37.3844" cy="25.2101" r="2.90634" fill="#F5E8E4" />
        <Path d="M36.4318 32.6837C36.4318 34.2888 35.1306 35.59 33.5255 35.59C31.9204 35.59 30.6191 34.2888 30.6191 32.6837C30.6191 31.0786 31.9204 29.7773 33.5255 29.7773C35.1306 29.7773 36.4318 31.0786 36.4318 32.6837Z" fill="#F5E8E4" />
        <Path d="M32.2961 40.273C32.2961 41.8782 30.9949 43.1794 29.3897 43.1794C27.7846 43.1794 26.4834 41.8782 26.4834 40.273C26.4834 38.6679 27.7846 37.3667 29.3897 37.3667C30.9949 37.3667 32.2961 38.6679 32.2961 40.273Z" fill="#F5E8E4" />
        <Circle cx="25.7584" cy="47.6307" r="2.90634" fill="#F5E8E4" />
        <Circle cx="45.0645" cy="28.5316" r="2.90634" fill="#F5E8E4" />
        <Path d="M43.8181 36.2127C43.8181 37.8179 42.5168 39.1191 40.9117 39.1191C39.3066 39.1191 38.0054 37.8179 38.0054 36.2127C38.0054 34.6076 39.3066 33.3064 40.9117 33.3064C42.5168 33.3064 43.8181 34.6076 43.8181 36.2127Z" fill="#F5E8E4" />
        <Path d="M39.8752 43.4786C39.8752 45.0837 38.574 46.385 36.9688 46.385C35.3637 46.385 34.0625 45.0837 34.0625 43.4786C34.0625 41.8735 35.3637 40.5723 36.9688 40.5723C38.574 40.5723 39.8752 41.8735 39.8752 43.4786Z" fill="#F5E8E4" />
        <Circle cx="33.4386" cy="51.1598" r="2.90634" fill="#F5E8E4" />
        <Circle cx="52.9527" cy="32.0606" r="2.90634" fill="#F5E8E4" />
        <Path d="M52.0002 39.5343C52.0002 41.1394 50.699 42.4406 49.0938 42.4406C47.4887 42.4406 46.1875 41.1394 46.1875 39.5343C46.1875 37.9291 47.4887 36.6279 49.0938 36.6279C50.699 36.6279 52.0002 37.9291 52.0002 39.5343Z" fill="#F5E8E4" />
        <Path d="M47.8674 47.1236C47.8674 48.7288 46.5662 50.03 44.961 50.03C43.3559 50.03 42.0547 48.7288 42.0547 47.1236C42.0547 45.5185 43.3559 44.2173 44.961 44.2173C46.5662 44.2173 47.8674 45.5185 47.8674 47.1236Z" fill="#F5E8E4" />
        <Circle cx="41.3268" cy="54.4813" r="2.90634" fill="#F5E8E4" />
        <Circle cx="61.2564" cy="36.0052" r="2.90634" fill="#F5E8E4" />
        <Path d="M60.3063 43.4786C60.3063 45.0837 59.0051 46.385 57.4 46.385C55.7949 46.385 54.4937 45.0837 54.4937 43.4786C54.4937 41.8735 55.7949 40.5723 57.4 40.5723C59.0051 40.5723 60.3063 41.8735 60.3063 43.4786Z" fill="#F5E8E4" />
        <Path d="M56.1706 51.068C56.1706 52.6731 54.8694 53.9743 53.2643 53.9743C51.6591 53.9743 50.3579 52.6731 50.3579 51.068C50.3579 49.4628 51.6591 48.1616 53.2643 48.1616C54.8694 48.1616 56.1706 49.4628 56.1706 51.068Z" fill="#F5E8E4" />
        <Circle cx="49.6305" cy="58.4256" r="2.90634" fill="#F5E8E4" />
        <Circle cx="29.9088" cy="21.8888" r="2.90634" fill="#F5E8E4" />
        <Path d="M28.9587 29.3622C28.9587 30.9673 27.6575 32.2685 26.0523 32.2685C24.4472 32.2685 23.146 30.9673 23.146 29.3622C23.146 27.757 24.4472 26.4558 26.0523 26.4558C27.6575 26.4558 28.9587 27.757 28.9587 29.3622Z" fill="#F5E8E4" />
        <Path d="M24.8229 36.9515C24.8229 38.5566 23.5217 39.8579 21.9166 39.8579C20.3115 39.8579 19.0103 38.5566 19.0103 36.9515C19.0103 35.3464 20.3115 34.0452 21.9166 34.0452C23.5217 34.0452 24.8229 35.3464 24.8229 36.9515Z" fill="#F5E8E4" />
        <Circle cx="18.2852" cy="44.3089" r="2.90634" fill="#F5E8E4" />
      </Svg>
  )
);


export const CreamyDischarge = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Ellipse cx="40.5" cy="39.4974" rx="27.5" ry="27.5003" fill={accentColor} />
      <Path d="M42.2289 46.7264L37.5146 50.4193" stroke={secondaryAccentColor} strokeWidth="1.57144" strokeLinecap="round" />
      <Path
        d="M57.6283 33.0547H22.7426C22.6558 33.0547 22.5854 33.1251 22.5854 33.2119V39.6098C22.5854 39.6823 22.632 39.7446 22.7023 39.7623C27.0495 40.8568 35.9576 45.3261 37.8813 54.7698C37.8963 54.8434 37.9611 54.8979 38.0362 54.8979H43.0926C43.1794 54.8979 43.2496 54.8307 43.2512 54.7439C43.3268 50.816 46.2874 42.5838 57.6635 39.7633C57.7339 39.7459 57.7854 39.6824 57.7854 39.6099V33.2119C57.7854 33.1251 57.7151 33.0547 57.6283 33.0547Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57144"
        strokeLinecap="round"
      />
      <Path
        d="M34.7848 40.6604C37.0915 38.9028 42.5269 36.4688 46.4329 40.1928C46.7407 40.4863 46.931 40.8797 47.0171 41.2961C47.3109 42.716 46.1757 44.003 45.0462 44.9122C44.5759 45.2908 44.2073 45.801 44.0755 46.475C43.8892 47.4277 43.9437 48.4932 43.2243 49.145C42.7055 49.6151 42.0025 50.0396 41.1166 50.231C39.3625 50.6099 38.1786 48.7458 37.0486 47.3517C36.6105 46.8111 36.0301 46.3141 35.2754 45.9591C34.156 45.4325 32.803 44.8916 32.8022 43.6544C32.8017 42.7174 33.2693 41.6202 34.7848 40.6604Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.59823"
        strokeLinecap="round"
      />
      <Path d="M35.9458 44.2773C37.681 45.3732 37.544 43.0216 39.1422 44.2773" stroke={secondaryAccentColor} strokeWidth="0.913273" strokeLinecap="round" />
      <Path d="M40.1875 47.4392C41.9227 48.5351 41.2149 45.3843 43.3839 47.4392" stroke={secondaryAccentColor} strokeWidth="0.913273" strokeLinecap="round" />
      <Path d="M40.6592 42.8313C41.3441 40.7764 43.5131 43.2879 43.8556 42.8313" stroke={secondaryAccentColor} strokeWidth="0.913273" strokeLinecap="round" />
    </Svg>
  )
);

export const Cup = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M53.7776 24.5939L51.6901 20.2174C53.4576 17.4119 51.9059 16.3432 50.5283 16.0716C50.1388 15.9949 49.7407 16.0792 49.3743 16.2319L17.1239 29.6755C16.7141 29.8463 16.3179 30.1004 16.1379 30.5062C15.4381 32.0846 17.5608 33.0909 18.8458 33.4196L20.7647 38.219C21.3233 39.6161 22.9268 40.2853 24.3199 39.7166C29.0837 51.8719 38.8555 56.1083 45.4337 57.0557L47.7797 61.4654L48.8979 63.5674C49.5831 64.8552 51.1646 65.3699 52.4764 64.7319L52.8923 64.5296C54.2672 63.861 54.8174 62.1881 54.1077 60.8339L53.2537 59.2042L51.1032 55.1005C59.4105 44.8116 54.9746 32.5123 52.697 28.1026C53.8968 27.4052 54.393 25.884 53.7776 24.5939Z"
        fill={accentColor}
      />
      <Path
        d="M41.6588 41.9755C39.1268 46.2762 35.2525 45.9359 30.4673 43.01C33.3987 53.7512 41.2198 53.6686 44.7639 52.2846C53.6687 49.8544 54.0112 41.9885 53.1517 38.839C53.1517 38.839 52.3586 36.4304 50.3314 35.3619C48.0378 34.1531 46.0437 34.5276 41.6588 41.9755Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M24.7424 39.5577L52.3486 28.1472M19.2212 33.3003L51.3363 20.3254M47.8396 60.7224L52.4406 58.4219"
        stroke={secondaryAccentColor}
        strokeWidth="0.872107"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
);

export const Diarrhea = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path d="M24.6424 56.7326C21.6628 54.5198 22.8956 47.276 28.2384 35.3143C32.5155 44.1846 34.7606 54.6033 31.1643 56.7326C29.7259 57.9225 26.3684 58.3359 24.6424 56.7326Z" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="1.57143" />
      <Path d="M48.9993 56.7326C46.0197 54.5198 47.2525 47.276 52.5954 35.3143C56.8724 44.1846 59.1175 54.6033 55.5212 56.7326C54.0828 57.9225 50.7254 58.3359 48.9993 56.7326Z" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="1.57143" />
      <Path d="M37.3709 41.9612C34.3913 39.7484 35.6241 32.5045 40.9669 20.5429C45.244 29.4132 47.4891 39.8319 43.8928 41.9612C42.4544 43.1511 39.097 43.5644 37.3709 41.9612Z" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="1.57143" />
    </Svg>
  )
);

export const Drained = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="39.3454" cy="43.3708" r="26.3454" fill={accentColor} />
      <Path
        d="M32.4956 59.5293C32.4956 54.6391 37.036 53.1254 39.3061 53.4165C44.7546 53.4162 46.5707 57.7828 46.1167 59.5293"
        stroke={secondaryAccentColor}
        strokeWidth="1.91462"
        strokeLinecap="round"
      />
      <Path
        d="M51.411 10.8782V14.0396C51.411 14.5246 51.0178 14.9178 50.5328 14.9178H48.4773C47.9923 14.9178 47.5991 15.311 47.5991 15.796V38.6286C47.5991 39.1136 47.9923 39.5068 48.4773 39.5068H65.3383C65.8233 39.5068 66.2165 39.1136 66.2165 38.6286V15.796C66.2165 15.311 65.8233 14.9178 65.3383 14.9178H63.1723C62.6873 14.9178 62.2942 14.5246 62.2942 14.0396V10.8782C62.2942 10.3932 61.901 10 61.416 10H52.2892C51.8042 10 51.411 10.3932 51.411 10.8782Z"
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="2.63454"
      />
      <Path
        d="M56.967 14.9178L54.2739 22.0967L58.3135 20.96L55.7701 28.6174"
        stroke={secondaryAccentColor}
        strokeWidth="2.63454"
        strokeLinecap="round"
      />
      <Path
        d="M50.585 34.5889C50.585 33.6189 51.3713 32.8325 52.3413 32.8325H61.65C62.62 32.8325 63.4064 33.6189 63.4064 34.5889V35.6427C63.4064 36.6127 62.62 37.3991 61.65 37.3991H52.3413C51.3713 37.3991 50.585 36.6127 50.585 35.6427V34.5889Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M42.6816 43.0192H54.321"
        stroke={secondaryAccentColor}
        strokeWidth="1.93199"
        strokeLinecap="round"
      />
      <Path
        d="M23.0122 43.0192H34.6516"
        stroke={secondaryAccentColor}
        strokeWidth="1.93199"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const DryDischarge = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Ellipse cx="40.5" cy="39.4974" rx="27.5" ry="27.5003" fill={accentColor} />
      <Path d="M42.2289 46.726L37.5146 50.4189" stroke={secondaryAccentColor} strokeWidth="1.57144" strokeLinecap="round" />
      <Path
        d="M57.6283 33.0547H22.7426C22.6558 33.0547 22.5854 33.1251 22.5854 33.2119V39.6098C22.5854 39.6823 22.632 39.7446 22.7023 39.7623C27.0495 40.8568 35.9576 45.3261 37.8813 54.7698C37.8963 54.8434 37.9611 54.8979 38.0362 54.8979H43.0926C43.1794 54.8979 43.2496 54.8307 43.2512 54.7439C43.3268 50.816 46.2874 42.5838 57.6635 39.7633C57.7339 39.7459 57.7854 39.6824 57.7854 39.6099V33.2119C57.7854 33.1251 57.7151 33.0547 57.6283 33.0547Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57144"
        strokeLinecap="round"
      />
      <Path
        d="M34.6808 41.0381C37.0478 39.2346 42.6252 36.737 46.6332 40.5584C46.949 40.8595 47.1443 41.2632 47.2327 41.6905C47.5342 43.1475 46.3693 44.4681 45.2103 45.4011C44.7278 45.7895 44.3495 46.3131 44.2143 47.0046C44.0231 47.9823 44.079 49.0755 43.3408 49.7444C42.8084 50.2268 42.0871 50.6624 41.1781 50.8588C39.3782 51.2476 38.1633 49.3347 37.0038 47.9042C36.5542 47.3495 35.9586 46.8396 35.1843 46.4753C34.0356 45.9349 32.6473 45.3799 32.6465 44.1104C32.6459 43.1488 33.1258 42.023 34.6808 41.0381Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.63998"
        strokeLinecap="round"
      />
      <Path d="M40.1411 40.6627L43.1868 43.5913" stroke={secondaryAccentColor} strokeWidth="0.937131" strokeLinecap="round" />
      <Path d="M38.9736 43.7084L42.0193 46.637" stroke={secondaryAccentColor} strokeWidth="0.937131" strokeLinecap="round" />
      <Path d="M35.4575 43.7084L38.5032 46.637" stroke={secondaryAccentColor} strokeWidth="0.937131" strokeLinecap="round" />
    </Svg>
  )
);

export const DryScalp = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path
        d="M36.5863 19.6732C36.8871 19.3605 36.8773 18.8631 36.5645 18.5623C36.2517 18.2615 35.7543 18.2713 35.4536 18.5841L36.5863 19.6732ZM40.5409 22.0616C38.0619 21.4108 37.0326 20.7109 36.6651 20.2473C36.4989 20.0377 36.4925 19.9091 36.4958 19.8598C36.4998 19.7993 36.5284 19.7335 36.5863 19.6732L35.4536 18.5841C35.1841 18.8643 34.9606 19.2654 34.9278 19.7548C34.8943 20.2555 35.0663 20.7601 35.4337 21.2236C36.1334 22.1062 37.5923 22.9122 40.1419 23.5815L40.5409 22.0616Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M46.0536 33.5539C45.7758 33.2205 45.2804 33.1755 44.947 33.4533C44.6136 33.7311 44.5686 34.2265 44.8464 34.5599L46.0536 33.5539ZM40.8997 41.1762C43.7191 39.5102 45.2529 38.01 45.9778 36.7357C46.7059 35.4556 46.6606 34.2823 46.0536 33.5539L44.8464 34.5599C44.8942 34.6172 45.1396 35.031 44.6119 35.9588C44.0809 36.8923 42.8123 38.2207 40.1003 39.8233L40.8997 41.1762Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M46.0536 26.1681C45.7758 25.8348 45.2804 25.7897 44.947 26.0675C44.6136 26.3453 44.5686 26.8408 44.8464 27.1741L46.0536 26.1681ZM40.8997 33.7904C43.7191 32.1244 45.2529 30.6243 45.9778 29.35C46.7059 28.0699 46.6606 26.8965 46.0536 26.1681L44.8464 27.1741C44.8942 27.2315 45.1396 27.6453 44.6119 28.573C44.0809 29.5066 42.8123 30.835 40.1003 32.4376L40.8997 33.7904Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M39.0117 45.8896C37.442 42.817 38.0011 33.0429 40.6393 16.9674C40.6978 16.611 41.2101 16.615 41.2563 16.9732C42.7877 28.8426 44.5436 42.9801 42.6793 45.8896C41.8893 47.6121 39.9597 48.2104 39.0117 45.8896Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path
        d="M36.5038 41.0446C36.8046 40.7318 36.7948 40.2344 36.482 39.9336C36.1692 39.6329 35.6718 39.6426 35.3711 39.9554L36.5038 41.0446ZM40.4583 43.4329C37.9794 42.7822 36.9501 42.0822 36.5826 41.6187C36.4164 41.409 36.4099 41.2804 36.4132 41.2312C36.4173 41.1706 36.4458 41.1049 36.5038 41.0446L35.3711 39.9554C35.1016 40.2356 34.8781 40.6367 34.8453 41.1262C34.8118 41.6269 34.9837 42.1314 35.3512 42.5949C36.0509 43.4775 37.5098 44.2836 40.0594 44.9528L40.4583 43.4329Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M36.5038 32.5595C36.8046 32.2467 36.7948 31.7493 36.482 31.4485C36.1692 31.1478 35.6718 31.1575 35.3711 31.4703L36.5038 32.5595ZM40.4583 34.9478C37.9794 34.297 36.9501 33.5971 36.5826 33.1336C36.4164 32.9239 36.4099 32.7953 36.4132 32.7461C36.4173 32.6855 36.4458 32.6197 36.5038 32.5595L35.3711 31.4703C35.1016 31.7505 34.8781 32.1516 34.8453 32.6411C34.8118 33.1418 34.9837 33.6463 35.3512 34.1098C36.0509 34.9924 37.5098 35.7985 40.0594 36.4677L40.4583 34.9478Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M36.5038 25.8022C36.8046 25.4894 36.7948 24.992 36.482 24.6912C36.1692 24.3904 35.6718 24.4002 35.3711 24.713L36.5038 25.8022ZM40.4583 28.1905C37.9794 27.5397 36.9501 26.8398 36.5826 26.3762C36.4164 26.1666 36.4099 26.038 36.4132 25.9887C36.4173 25.9282 36.4458 25.8624 36.5038 25.8022L35.3711 24.713C35.1016 24.9932 34.8781 25.3943 34.8453 25.8837C34.8118 26.3845 34.9837 26.889 35.3512 27.3525C36.0509 28.2351 37.5098 29.0411 40.0594 29.7104L40.4583 28.1905Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M19.2852 45.0574H32.2132C32.5222 45.0574 32.805 45.2461 32.9363 45.5259C37.8433 55.9834 43.9544 54.5607 47.913 45.5426C48.0404 45.2525 48.3272 45.0574 48.644 45.0574H61.8709"
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Path
        d="M46.4467 20.2761C46.1689 19.9427 45.6734 19.8976 45.3401 20.1755C45.0067 20.4533 44.9617 20.9487 45.2395 21.2821L46.4467 20.2761ZM41.2928 27.8984C44.1122 26.2324 45.646 24.7322 46.3709 23.4579C47.099 22.1778 47.0537 21.0044 46.4467 20.2761L45.2395 21.2821C45.2872 21.3394 45.5326 21.7532 45.0049 22.6809C44.4739 23.6145 43.2054 24.9429 40.4934 26.5455L41.2928 27.8984Z"
        fill={secondaryAccentColor}
      />
    </Svg>
  )
);

export const DrySkin = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path
        d="M26.9346 36.0282C26.9346 31.9443 30.0771 30.6802 31.6483 30.9233C35.4193 30.923 36.6763 34.5697 36.3621 36.0282"         stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M44.3013 36.027C44.3013 31.943 47.4438 30.679 49.015 30.9221C52.786 30.9218 54.043 34.5685 53.7288 36.027"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M46.7104 48.7864C46.7104 53.1621 42.67 54.5165 40.6498 54.2561C35.8013 54.2563 34.1852 50.3492 34.5892 48.7864"         
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M46.7104 48.7864C46.7104 53.1621 42.67 54.5165 40.6498 54.2561C35.8013 54.2563 34.1852 50.3492 34.5892 48.7864"         
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M19.7578 38.1426L22.8014 42.595M22.8014 42.595L21.6601 45.012L24.3489 47.27M22.8014 42.595L25.4646 43.3582L25.0841 45.2664L26.9864 45.9024L25.4646 48.8283" 
        stroke={secondaryAccentColor}
        strokeWidth="0.8" 
        strokeLinecap="round"
      />
      <Path 
        d="M22.1939 46V47.7286L20.3867 48.2L23.3724 50.3214L22.1939 51.6571" 
        stroke={secondaryAccentColor}
        strokeWidth="0.8" 
        strokeLinecap="round"
      />
      <Path 
        d="M62.375 40.8125L58.3487 41.5095M58.3487 41.5095L57.5652 39.7464L55.8251 40.6904M58.3487 41.5095L56.5836 43.2705M56.5836 43.2705L55.7038 42.2776L54.392 43.5021L53.5139 41.2604M56.5836 43.2705L57.1709 46.1611L54.1396 47.6072L55.2804 49.5508" 
        stroke={secondaryAccentColor}
        strokeWidth="0.8" 
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Energetic = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M33.1074 22.4288V27.1431C33.1074 27.577 32.7556 27.9288 32.3217 27.9288H28.713C28.279 27.9288 27.9272 28.2806 27.9272 28.7145V58.5716C27.9272 59.0056 28.279 59.3574 28.713 59.3574H52.4415C52.8755 59.3574 53.2272 59.0056 53.2272 58.5716V28.7145C53.2272 28.2806 52.8755 27.9288 52.4415 27.9288H48.6827C48.2488 27.9288 47.897 27.577 47.897 27.1431V22.4288C47.897 21.9948 47.5452 21.6431 47.1113 21.6431H33.8931C33.4591 21.6431 33.1074 21.9948 33.1074 22.4288Z"
        stroke={secondaryAccentColor}
        strokeWidth="2.82857"
      />
      <Rect x="30.5986" y="51.186" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      <Rect x="30.5986" y="44.9001" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      <Rect x="30.5986" y="38.6145" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      <Rect x="30.5986" y="32.3289" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
    </Svg>
  )
);

export const Excited = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path
        d="M28.7998 29.9971L37.2331 34.6171L28.7998 39.0904"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M40.4816 56.9499C44.325 57.3527 52.0117 55.2581 52.0117 48.4909H28.9515C28.1828 50.9078 31.2575 56.9504 40.4816 56.9499Z"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M53.1133 39.1772L44.6799 34.5572L53.1133 30.0839"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
);

export const Exhausted = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" />
      <Circle cx="39.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M32.1074 22.4288V27.1431C32.1074 27.577 31.7556 27.9288 31.3217 27.9288H27.713C27.279 27.9288 26.9272 28.2806 26.9272 28.7145V58.5716C26.9272 59.0056 27.279 59.3574 27.713 59.3574H51.4415C51.8755 59.3574 52.2272 59.0056 52.2272 58.5716V28.7145C52.2272 28.2806 51.8755 27.9288 51.4415 27.9288H47.6827C47.2488 27.9288 46.897 27.577 46.897 27.1431V22.4288C46.897 21.9948 46.5452 21.6431 46.1113 21.6431H32.8931C32.4591 21.6431 32.1074 21.9948 32.1074 22.4288Z"
        stroke={secondaryAccentColor}
        strokeWidth="2.82857"
      />
      <Rect x="29.5986" y="51.186" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      </Svg>
  )
);

export const Exclamation = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
      <Circle cx="40.0195" cy="40" r="39" stroke={strokeColor} strokeWidth={2} fill={fillColor}/>
      <Path
        d="M48.3046 15H30.7241C30.3642 15 30.0983 15.3355 30.1806 15.6859L38.3902 50.6352C38.7296 52.08 40.7906 52.0668 41.1115 50.6179L48.8496 15.679C48.9268 15.3304 48.6616 15 48.3046 15Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth={4.18687}
        strokeLinecap="round"
      />
      <Circle cx="39.648" cy="62.5914" r="4.60555" fill={accentColor} />
    </Svg>
  )
);

export const Fatigued = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="39.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M32.1074 22.4288V27.1431C32.1074 27.577 31.7556 27.9288 31.3217 27.9288H27.713C27.279 27.9288 26.9272 28.2806 26.9272 28.7145V58.5716C26.9272 59.0056 27.279 59.3574 27.713 59.3574H51.4415C51.8755 59.3574 52.2272 59.0056 52.2272 58.5716V28.7145C52.2272 28.2806 51.8755 27.9288 51.4415 27.9288H47.6827C47.2488 27.9288 46.897 27.577 46.897 27.1431V22.4288C46.897 21.9948 46.5452 21.6431 46.1113 21.6431H32.8931C32.4591 21.6431 32.1074 21.9948 32.1074 22.4288Z"
        stroke={secondaryAccentColor}
        strokeWidth="2.82857"
      />
      <Rect x="29.5986" y="51.186" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      <Rect x="29.5986" y="44.9001" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
    </Svg>
  )
);

export const Fever = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
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
        d="M30.1001 52.2571C30.1001 48.1318 36.72 46.8549 40.03 47.1005C47.9739 47.1002 50.6218 50.7838 49.9598 52.2571"
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
      <Path
        d="M45.0273 47.5429L53.0416 43.7715"
        stroke={secondaryAccentColor}
        strokeWidth="2.04286"
        strokeLinecap="round"
      />
      <Circle cx="53.8277" cy="43.2998" r="2.59286" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.157143" />
    </Svg>
  )
);

export const Gassy = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Circle cx="56.8421" cy="58.5715" r="9.42857" fill={secondaryAccentColor} />
      <Circle cx="56.9223" cy="58.6502" r="7.46429" fill={accentColor} />
      <Path
        d="M56.7676 53.5428C55.2905 54.5276 56.1033 55.3416 56.7279 55.6455C56.7542 55.6584 56.7796 55.6745 56.8016 55.6938C58.0742 56.8125 57.3128 57.7625 56.7676 58.1C55.2134 58.9703 56.093 60.0149 56.7459 60.4431C56.7605 60.4527 56.7745 60.4634 56.7874 60.4752C58.0801 61.6618 57.3149 62.6852 56.7676 63.05"
        stroke={secondaryAccentColor}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <Path
        d="M59.5967 53.5428C58.1196 54.5276 58.9324 55.3416 59.557 55.6455C59.5833 55.6584 59.6087 55.6745 59.6307 55.6938C60.9033 56.8125 60.1419 57.7625 59.5967 58.1C58.0425 58.9703 58.9221 60.0149 59.575 60.4431C59.5896 60.4527 59.6036 60.4634 59.6165 60.4752C60.9092 61.6618 60.144 62.6852 59.5967 63.05"
        stroke={secondaryAccentColor}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <Path
        d="M51.6964 23.6859H26.436C25.5866 23.6859 24.7192 23.8801 24.0843 24.4444C22.0437 26.2583 23.0066 28.2098 24.2512 29.2695C24.7855 29.7244 25.5001 29.8546 26.2018 29.8546C33.3653 29.8546 42.9984 29.8546 48.326 29.8546C49.4155 29.8546 50.5435 30.1787 51.1659 31.073C52.3066 32.7121 51.7607 34.2166 50.9319 35.1429C50.4097 35.7265 49.5981 35.8892 48.8149 35.8892H26.6039C25.6493 35.8892 24.6704 36.1352 24.0198 36.8339C22.4096 38.5631 23.1244 40.2253 24.1622 41.2506C24.7354 41.8169 25.5612 41.9909 26.367 41.9909H47.6969C49.1549 41.9909 50.6609 42.6197 51.131 43.9998C51.5947 45.361 51.3618 46.4857 50.9249 47.2678C50.4826 48.0595 49.5258 48.2937 48.619 48.2937H26.5806C25.6405 48.2937 24.681 48.5373 24.0182 49.204C22.0297 51.2043 23.0554 53.1332 24.3177 54.1081C24.8177 54.4944 25.4637 54.5965 26.0955 54.5965H37.0211C43.125 55.0658 43.5146 57.7315 43.5146 58.4854C43.5146 61.3686 41.8912 63.7825 40.5925 64.3859"
        stroke={secondaryAccentColor}
        strokeWidth="5.02857"
        strokeLinecap="round"
      />
      <Path
        d="M53.9389 53.5428C52.4618 54.5276 53.2747 55.3416 53.8993 55.6455C53.9256 55.6584 53.951 55.6745 53.973 55.6938C55.2456 56.8125 54.4842 57.7625 53.9389 58.1C52.3848 58.9703 53.2644 60.0149 53.9173 60.4431C53.9319 60.4527 53.9459 60.4634 53.9588 60.4752C55.2514 61.6618 54.4863 62.6852 53.9389 63.05"
        stroke={secondaryAccentColor}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Greasy = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27." fill={accentColor}/>
      <Path
        d="M50.5633 33.9734H28.5393C27.2188 33.9734 26.3686 35.3736 26.9777 36.5452L38.4279 58.5693C39.097 59.8562 40.9483 59.8268 41.5761 58.5192L52.1499 36.4951C52.7109 35.3268 51.8594 33.9734 50.5633 33.9734Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.46667"
      />
      <Path
        d="M40.8241 39.6611L40.6021 39.9087C40.5501 39.9667 40.4584 40.0146 39.8286 39.4598C39.7772 39.4145 39.7122 39.3866 39.6439 39.3816C39.5536 39.3751 39.4658 39.4088 39.3998 39.4707C39.0006 39.8447 38.3047 40.3165 38.058 39.3349C38.0345 39.2414 38.0063 39.148 37.9878 39.0534C37.8562 38.383 38.2618 36.8887 39.8091 36.9112C40.4995 36.9451 41.3903 37.4064 40.4759 38.2849C40.3722 38.4006 40.3727 38.576 40.4771 38.6911L40.8224 39.0716C40.9739 39.2386 40.9747 39.4932 40.8241 39.6611Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="0.44"
      />
      <Circle cx="32.3874" cy="38.3733" r="2.93333" fill={accentColor} />
      <Ellipse cx="45.8061" cy="41.5266" rx="2.71333" ry="2.86" fill={accentColor} />
      <Circle cx="39.5735" cy="53.6267" r="2.93333" fill={accentColor} />
      <Path
        d="M51.3256 31.1867H27.2748C26.7646 31.1867 26.2911 30.9216 26.0244 30.4866L24.9801 28.7831C24.5414 28.0674 24.7918 27.1269 25.5443 26.7548C34.8119 22.1728 44.5394 22.0488 53.2152 26.7161C53.9453 27.1089 54.1597 28.0436 53.7089 28.7393L52.5564 30.5177C52.286 30.9349 51.8227 31.1867 51.3256 31.1867Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.46667"
      />
      <Path
        d="M36.1123 47.1658L35.8025 47.0446C35.73 47.0162 35.653 46.9472 35.9518 46.1629C35.9762 46.0989 35.9796 46.0282 35.9603 45.9625C35.9348 45.8757 35.8724 45.8052 35.7913 45.765C35.3012 45.5223 34.6153 45.0359 35.4483 44.4608C35.5276 44.406 35.6052 44.3469 35.6873 44.2963C36.269 43.9382 37.8107 43.7943 38.332 45.2513C38.5422 45.9098 38.4224 46.9058 37.2791 46.3573C37.1343 46.3007 36.9703 46.3627 36.8991 46.5008L36.6637 46.9576C36.5604 47.158 36.3223 47.2479 36.1123 47.1658Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="0.44"
      />
      <Path
        d="M41.7537 47.8713L41.7304 47.5395C41.7249 47.4618 41.7542 47.3627 42.5909 47.2962C42.6592 47.2908 42.7245 47.2636 42.7756 47.2179C42.843 47.1576 42.8799 47.0711 42.8814 46.9806C42.8905 46.4337 43.0357 45.6056 43.9125 46.1113C43.996 46.1595 44.0827 46.2042 44.1636 46.2567C44.7366 46.6286 45.5278 47.9596 44.4352 49.0554C43.9305 49.5277 42.9794 49.8467 42.9845 48.5786C42.9736 48.4236 42.8472 48.3019 42.6919 48.2969L42.1783 48.2801C41.9529 48.2728 41.7696 48.0962 41.7537 47.8713Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="0.44"
      />
    </Svg>
  )
);

export const Hairfall = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path
        d="M45.2301 33.668L40.5091 31.9362C40.1018 31.7868 39.8902 31.3367 40.0644 30.9392C41.841 26.885 46.8547 20.7047 55.4482 22.0664C56.1681 22.1805 56.2572 23.1103 55.5958 23.4167L55.301 23.5533L53.0829 24.5808C51.6118 25.3985 48.2843 28.2318 46.2521 33.2049C46.088 33.6066 45.6375 33.8175 45.2301 33.668Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path
        d="M20.2852 45.0574H33.2132C33.5222 45.0574 33.805 45.2461 33.9363 45.5259C38.8433 55.9834 44.9544 54.5607 48.913 45.5426C49.0404 45.2525 49.3272 45.0574 49.644 45.0574H62.8709"
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Path
        d="M45.2375 43.7224C43.4162 48.0484 41.3203 53.0268 37.8769 43.6789C37.7808 43.418 37.7555 43.1254 37.8066 42.8521L38.2716 40.368C38.4107 39.6245 39.0598 39.0857 39.8162 39.0857H43.3859C44.1513 39.0857 44.8053 39.6371 44.9347 40.3914L45.3506 42.8155C45.4015 43.1118 45.3662 43.4166 45.2495 43.6938L45.2375 43.7224Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path d="M37.1929 33.5022L32.3214 32.7165" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
      <Path d="M36.7051 35.8564L31.9908 36.7993" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
      <Path d="M36.5278 37.8435L32.9135 40.2006" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
      <Path d="M48.9409 35.0923L54.1266 33.678" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
      <Path d="M48.5557 36.3621L53.4271 38.2478" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
      <Path d="M47.6587 38.1106L49.3873 41.2535" stroke={secondaryAccentColor} strokeWidth="0.785714" strokeLinecap="round" />
    </Svg>
  )
);

export const Happy = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path
        d="M26.9321 36.0278C26.9321 31.9438 30.0746 30.6797 31.6459 30.9228C35.4169 30.9225 36.6739 34.5692 36.3597 36.0278"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
      <Path
        d="M44.2983 36.0268C44.2983 31.9428 47.4408 30.6787 49.0121 30.9218C52.7831 30.9216 54.0401 34.5682 53.7259 36.0268"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
      <Path
        d="M46.7095 48.7857C46.7095 53.1614 42.6691 54.5158 40.6489 54.2553C35.8004 54.2556 34.1842 50.3484 34.5882 48.7857"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Headache = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40.0029" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Path
        d="M60 43.5C60 57.031 49.031 68 35.5 68C21.969 68 11 57.031 11 43.5C11 29.969 21.969 19 35.5 19C49.031 19 60 29.969 60 43.5Z"
        fill={accentColor}
      />
      <Path
        d="M29.668 55.1663C29.668 51.4335 31.9263 50.5 35.6897 50.5C41.3346 50.5 41.3346 54.2333 41.3346 55.1667"
        stroke={secondaryAccentColor}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <Path
        d="M24 40H31.9462"
        stroke={secondaryAccentColor}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <Path
        d="M39 40H46.9462"
        stroke={secondaryAccentColor}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <Path
        d="M59.8107 12.7318L62.8592 14.6875C62.9173 14.7247 62.9396 14.7986 62.912 14.8618L60.0083 21.5075C59.9737 21.5866 59.8766 21.6161 59.8039 21.5694L58.4878 20.7252C58.4225 20.6832 58.3355 20.7023 58.2937 20.7678L53.7397 27.9028C53.7361 27.9085 53.7286 27.9101 53.723 27.9065C53.719 27.9039 53.7168 27.8992 53.7176 27.8945L55.3587 17.3231C55.3743 17.2229 55.4878 17.1718 55.5732 17.2265L57.1111 18.2132C57.1842 18.26 57.2818 18.23 57.3159 18.1502L59.6058 12.7947C59.64 12.7149 59.7376 12.6849 59.8107 12.7318Z"
        fill={accentColor}
      />
      <Path
        d="M66.5919 17.8216L69.6405 19.7773C69.6985 19.8146 69.7209 19.8885 69.6933 19.9517L66.7895 26.5974C66.7549 26.6765 66.6578 26.7059 66.5851 26.6593L65.2691 25.815C65.2037 25.7731 65.1168 25.7922 65.075 25.8576L60.521 32.9927C60.5174 32.9983 60.5099 33 60.5042 32.9964C60.5002 32.9938 60.4981 32.9891 60.4988 32.9843L62.14 22.413C62.1555 22.3127 62.269 22.2616 62.3544 22.3164L63.8924 23.303C63.9654 23.3499 64.0631 23.3199 64.0972 23.2401L66.3871 17.8846C66.4212 17.8048 66.5189 17.7747 66.5919 17.8216Z"
        fill={accentColor}
      />
    </Svg>
  )
);

export const Heartburn = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Circle cx="56.8441" cy="60.5714" r="9.42857" fill={secondaryAccentColor} />
      <Circle cx="56.9223" cy="60.6501" r="7.46429" fill={accentColor} />
      <Path
        d="M51.6968 23.6858H26.4365C25.5871 23.6858 24.7196 23.88 24.0848 24.4443C22.0441 26.2581 23.0071 28.2097 24.2517 29.2694C24.786 29.7243 25.5005 29.8545 26.2023 29.8545C33.3658 29.8545 42.9989 29.8545 48.3265 29.8545C49.416 29.8545 50.544 30.1785 51.1664 31.0729C52.307 32.712 51.7612 34.2165 50.9324 35.1428C50.4102 35.7264 49.5985 35.8891 48.8154 35.8891H26.6044C25.6498 35.8891 24.6709 36.1351 24.0203 36.8338C22.4101 38.563 23.1248 40.2252 24.1627 41.2505C24.7359 41.8167 25.5617 41.9907 26.3675 41.9907H47.6974C49.1553 41.9907 50.6614 42.6196 51.1315 43.9996C51.5952 45.3609 51.3622 46.4856 50.9253 47.2677C50.4831 48.0594 49.5263 48.2935 48.6195 48.2935H26.5811C25.641 48.2935 24.6814 48.5371 24.0187 49.2039C22.0302 51.2041 23.0559 53.133 24.3182 54.108C24.8182 54.4942 25.4642 54.5963 26.096 54.5963H37.0216C43.1255 55.0657 43.5151 57.7314 43.5151 58.4853C43.5151 61.3685 41.8917 63.7823 40.593 64.3858"
        stroke={secondaryAccentColor}
        strokeWidth="5.02857"
        strokeLinecap="round"
      />
      <Path
        d="M60.1338 60.2569C58.6148 58.0112 57.0441 56.8626 57.7493 54.3995C57.7902 54.2565 57.6448 54.1431 57.5351 54.2434C56.176 55.4865 54.4324 59.2145 55.0151 61.8096C55.0179 61.8221 55.0224 61.834 55.0276 61.8458C55.1203 62.0545 55.0591 62.4357 54.1386 62.4561C54.0896 62.4571 54.0432 62.4347 54.0143 62.3951C53.6952 61.9588 53.04 60.8698 53.3222 59.3854C53.3488 59.2456 53.2048 59.1418 53.0987 59.2367C52.5453 59.7321 51.8167 60.7936 51.8167 62.4569C51.7101 63.8188 53.1046 67.1712 56.9278 67.1712C59.808 67.1712 63.3224 64.9712 60.1338 60.2569Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M58.5736 64.9647C59.2136 64.6427 60.2164 63.5766 59.2003 61.8281C58.592 60.7815 58.238 60.5971 57.7775 60.0454C57.6647 59.9103 57.4285 60.0135 57.4692 60.1848C57.7837 61.5105 58.1361 63.5345 56.7081 64.3087C56.6679 64.3305 56.6357 64.3677 56.629 64.413C56.5669 64.834 56.8665 65.4431 58.5467 64.975C58.556 64.9724 58.5651 64.969 58.5736 64.9647Z"
        fill={secondaryAccentColor}
      />
    </Svg>
  )
);

export const Heavy = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M41.072 64.6932C45.6643 64.6932 50.0685 62.869 53.3158 59.6218C56.563 56.3747 58.3873 51.9705 58.3873 47.3784C58.3873 44.5327 57.3132 41.1237 55.6356 37.5588C53.9649 34.0089 51.7302 30.375 49.4839 27.0992C47.2393 23.8259 44.9931 20.9245 43.3074 18.8409C42.4649 17.7994 41.7632 16.9633 41.2727 16.3882C41.2012 16.3044 41.1342 16.2261 41.072 16.1536C41.0097 16.2261 40.9427 16.3044 40.8712 16.3882C40.3808 16.9633 39.6791 17.7994 38.8365 18.8409C37.1508 20.9245 34.9047 23.8259 32.66 27.0992C30.4138 30.375 28.179 34.0089 26.5084 37.5588C24.8307 41.1237 23.7567 44.5327 23.7567 47.3784C23.7567 51.9705 25.5809 56.3747 28.8282 59.6218C32.0754 62.869 36.4797 64.6932 41.072 64.6932Z"
        stroke={accentColor}
        strokeWidth="1.51352"
      />
      <Path
        d="M39.6893 39.503C35.191 26.7831 28.2187 32.2311 26.9573 43.2634C25.2687 58.0321 36.159 62.9291 41.149 62.3813C53.3231 62.3813 55.5384 52.9168 55.5384 48.6543C55.5384 48.6543 55.5006 45.0634 53.7685 42.6615C50.5445 38.1908 45.2754 55.2988 39.6893 39.503Z"
        fill={accentColor}
      />
    </Svg>
  )
);

export const Inserted = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
      <Circle cx="40.043" cy="39.999" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
          d="M40.5195 63V11M40.5195 11L24.0195 32.5M40.5195 11L57.0195 32.5"
          stroke={accentColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </Svg>
  )
);

export const Irritable = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path
        d="M27.7998 30L36.2331 34.62L27.7998 39.0933"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M54.0337 39.0933L45.6004 34.4733L54.0337 29.9999"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M26 55.0001L30 48.6001L33.9 55.0001L37.7 48.6001L41.3 55.0001L44.9 48.6001L48.2 55.0001L51.5 48.6001L55.4 55.0001"
        stroke={secondaryAccentColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Late = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
      <Circle cx="40.0195" cy="40" r="39" stroke={strokeColor} strokeWidth={2} fill={fillColor}/>
      <Path
        d="M40.0195 17V48.7896C40.0195 49.3434 40.6045 49.7018 41.0979 49.4502L68.3847 35.5393"
        stroke={accentColor}
        strokeWidth={5.5618}
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Light = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="39.9971" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M41.0704 64.6906C45.6624 64.6906 50.0663 62.8664 53.3133 59.6194C56.5603 56.3724 58.3844 51.9685 58.3844 47.3766C58.3844 44.5311 57.3104 41.1223 55.6329 37.5576C53.9624 34.0078 51.7278 30.3741 49.4817 27.0986C47.2373 23.8254 44.9913 20.9242 43.3057 18.8406C42.4632 17.7993 41.7616 16.9631 41.2712 16.3881C41.1997 16.3043 41.1327 16.226 41.0704 16.1535C41.0082 16.226 40.9412 16.3043 40.8697 16.3881C40.3793 16.9631 39.6777 17.7993 38.8352 18.8406C37.1496 20.9242 34.9036 23.8254 32.6592 27.0986C30.4131 30.3741 28.1785 34.0078 26.508 37.5576C24.8305 41.1223 23.7565 44.5311 23.7565 47.3766C23.7565 51.9685 25.5806 56.3724 28.8276 59.6194C32.0746 62.8664 36.4785 64.6906 41.0704 64.6906Z"
        stroke={accentColor}
        strokeWidth="1.51342"
      />
      <Path
        d="M40.7116 62.4181C38.7556 62.4181 26.0264 60.2428 26.0264 48.9235C27.1614 45.5145 31.9534 44.2572 37.881 53.0859C41.0686 57.8336 48.9794 48.8765 53.898 53.0859C56.5465 55.3525 49.7366 62.4181 40.7116 62.4181Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="0.252236"
      />
    </Svg>
  )
);

export const Nausea = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
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
  )
);

export const Motivated = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Ellipse cx="53.7749" cy="54.3593" rx="2.42337" ry="2.50992" fill={secondaryAccentColor} />
      <Ellipse cx="54.9362" cy="59.7065" rx="1.26437" ry="1.30952" fill={secondaryAccentColor} />
      <Path
        d="M21.3686 34.6997C19.2602 38.5188 17.8053 44.8917 25.4762 42.4486C26.3888 45.1042 29.9529 50.3724 34 44.0002C35.6501 47.2016 39.2773 49.9154 43.4933 41.3606C47.9183 43.1074 55.2304 44.0691 49.0789 33.941C50.8003 30.9949 52.0938 25.3205 43.4959 26.192C42.9699 21.3176 39.9578 14.1001 32.117 24.2257C29.9048 21.8608 25.1852 19.1609 24.0035 27.2797C19.4729 27.2789 16.1007 30.2246 21.3686 34.6997Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M29.3036 31.0717V31.0714C29.3036 27.8858 31.8858 25.3036 35.0714 25.3036C38.257 25.3036 40.8393 27.8858 40.8393 31.0714V31.0717C40.8401 31.8874 40.6675 32.694 40.3329 33.4379C39.9984 34.1818 39.5095 34.8461 38.8986 35.3867L38.8985 35.3869C38.6554 35.6023 38.4811 35.862 38.4156 36.144L38.4155 36.1445L37.9749 38.0536H32.1679L31.7274 36.1445L31.7273 36.1442C31.6618 35.8612 31.4873 35.6021 31.2444 35.3869L31.2442 35.3867C30.6334 34.8461 30.1445 34.1818 29.8099 33.4379C29.4753 32.694 29.3027 31.8874 29.3036 31.0717ZM32.6818 40.2846L32.5873 39.875H37.5546L37.4599 40.2843L37.4598 40.2846C37.3672 40.6859 37.1413 41.0439 36.819 41.3004C36.4968 41.5568 36.0971 41.6964 35.6853 41.6964C35.6852 41.6964 35.6852 41.6964 35.6852 41.6964H34.457H34.4569C34.045 41.6965 33.6452 41.5569 33.3228 41.3005C33.0004 41.0441 32.7745 40.686 32.6818 40.2846Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="0.607143"
      />
      <Path
        d="M35.0707 37.7502L33.8564 35.1938L35.6779 33.4043L35.3136 32.2859"
        stroke={secondaryAccentColor}
        strokeWidth="0.607143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Ellipse cx="49.2469" cy="48.5756" rx="3.16092" ry="3.27381" fill={secondaryAccentColor} />
    </Svg>
  )
);

export const Medium = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M40.072 64.6932C44.6643 64.6932 49.0685 62.869 52.3158 59.6218C55.563 56.3747 57.3873 51.9705 57.3873 47.3784C57.3873 44.5327 56.3132 41.1237 54.6356 37.5588C52.9649 34.0089 50.7302 30.375 48.4839 27.0992C46.2393 23.8259 43.9931 20.9245 42.3074 18.8409C41.4649 17.7994 40.7632 16.9633 40.2727 16.3882C40.2012 16.3044 40.1342 16.2261 40.072 16.1536C40.0097 16.2261 39.9427 16.3044 39.8712 16.3882C39.3808 16.9633 38.6791 17.7994 37.8365 18.8409C36.1508 20.9245 33.9047 23.8259 31.66 27.0992C29.4138 30.375 27.179 34.0089 25.5084 37.5588C23.8307 41.1237 22.7567 44.5327 22.7567 47.3784C22.7567 51.9705 24.5809 56.3747 27.8282 59.6218C31.0754 62.869 35.4797 64.6932 40.072 64.6932Z"
        stroke={accentColor}
        strokeWidth="1.51352"
      />
      <Path
        d="M39.712 61.4119C34.9897 61.4119 25.6562 56.1259 25.6562 44.637C25.6562 33.1481 34.2168 42.6536 39.712 47.2625C42.682 49.7535 46.8504 50.3909 54.0738 49.3613C54.4219 49.3117 54.7139 49.6191 54.6134 49.956C53.3847 54.0756 48.2744 61.4119 39.712 61.4119Z"
        fill={accentColor}
      />
    </Svg>
  )
);

export const LowerStomach = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="39.9971" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M58.1629 19.3954C54.8054 27.1001 56.0134 33.2147 60.4337 40.2502C63.2835 42.3052 64.1896 45.2691 64.3451 47.1374C60.3545 48.4362 50.4319 53.2209 44.5365 61.3116C44.2259 61.7378 43.7349 62 43.2076 62H37.6743C37.1126 62 36.596 61.7023 36.2863 61.2337C31.3649 53.7858 21.5572 49.3393 16.1858 47.7011C15.4896 47.4888 14.991 46.8523 15.144 46.1407C15.5344 44.3246 16.8018 41.7153 19.9303 40.2502C25.2359 33.1087 26.5887 27.2106 21.8222 19.6721C21.1112 18.5477 21.8716 17 23.2019 17H56.6633C57.8694 17 58.6447 18.2897 58.1629 19.3954Z"
        fill={accentColor}
      />
      <Path
        d="M53.3813 28.0563L50.4859 27.2804C50.4307 27.2656 50.373 27.2931 50.3497 27.3452L47.9008 32.8251C47.8716 32.8903 47.9078 32.9662 47.9768 32.9847L49.2268 33.3196C49.2888 33.3363 49.3256 33.4001 49.3088 33.4622L47.4799 40.2246C47.4785 40.23 47.4816 40.2355 47.487 40.2369C47.4908 40.2379 47.4949 40.2366 47.4974 40.2335L53.0522 33.3389C53.1048 33.2736 53.0729 33.1756 52.9918 33.1539L51.5311 32.7625C51.4617 32.7439 51.4257 32.6674 51.4555 32.602L53.4569 28.2167C53.4867 28.1513 53.4507 28.0749 53.3813 28.0563Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M29.0835 28.0563L31.979 27.2804C32.0341 27.2656 32.0918 27.2931 32.1151 27.3452L34.564 32.8251C34.5932 32.8903 34.5571 32.9662 34.4881 32.9847L33.2381 33.3196C33.176 33.3363 33.1393 33.4001 33.156 33.4622L34.9849 40.2246C34.9864 40.23 34.9832 40.2355 34.9779 40.2369C34.974 40.2379 34.97 40.2366 34.9675 40.2335L29.4127 33.3389C29.36 33.2736 29.392 33.1756 29.4731 33.1539L30.9338 32.7625C31.0031 32.7439 31.0392 32.6674 31.0094 32.602L29.0079 28.2167C28.9781 28.1513 29.0142 28.0749 29.0835 28.0563Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M38.2855 21.0717L42.1387 21.2622C42.2121 21.2658 42.272 21.3222 42.2799 21.3952L43.1207 29.0742C43.1307 29.1656 43.0566 29.2443 42.9647 29.2398L41.3013 29.1575C41.2187 29.1534 41.1485 29.2172 41.1446 29.2998L40.7202 38.3058C40.7198 38.3129 40.7138 38.3184 40.7067 38.318C40.7016 38.3178 40.6971 38.3145 40.6953 38.3098L36.6069 27.6736C36.5681 27.5727 36.6459 27.4653 36.7538 27.4706L38.6977 27.5667C38.79 27.5713 38.8643 27.4918 38.8535 27.4L38.1297 21.2384C38.1189 21.1466 38.1932 21.0671 38.2855 21.0717Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M20 41C39.7468 50.6358 53.4177 43.8907 60 41"
        stroke={secondaryAccentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
);

export const LowerBack = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Path
        d="M54.8488 34.5813C64.4875 44.6046 59.1252 51.7179 55.8202 54.3045C53.1247 61.0945 52.2931 64.4356 53.182 67.5612H41.1811L39.7722 63.0345C38.2034 64.8394 36.7093 66.4019 35.5141 67.5612H20.5131H20.0085C19.7326 67.6012 19.4417 67.6464 19.4143 67.5612C18.1369 63.5948 19.3392 53.8022 29.8468 44.6046C28.4083 43.0191 26.2157 39.5155 24.8719 34.5813C23.932 31.1301 23.4073 26.9789 23.8464 22.2947H43.848C46.4292 28.7622 50.4851 32.299 53.182 33.8211C53.8288 34.1862 54.3974 34.4354 54.8488 34.5813Z"
        fill={accentColor}
      />
      <Path
        d="M60.7076 10.5246L55.6799 8.65516C55.6031 8.62658 55.5168 8.65696 55.4747 8.72738L50.7306 16.6781C50.6761 16.7693 50.7177 16.8875 50.8173 16.9245L53.0266 17.746C53.1147 17.7788 53.1595 17.8769 53.1265 17.965L49.3535 28.0295C49.35 28.0389 49.3547 28.0493 49.3641 28.0528C49.3705 28.0552 49.3777 28.0538 49.3827 28.0492L59.6403 18.6125C59.7337 18.5266 59.7034 18.3723 59.5844 18.3281L57.0116 17.3714C56.9115 17.3342 56.8701 17.2149 56.9257 17.1237L60.7935 10.7723C60.8491 10.6811 60.8077 10.5618 60.7076 10.5246Z"
        fill={accentColor}
      />
      <Path
        d="M68.1313 24.4787L65.806 20.5309C65.7651 20.4615 65.6812 20.4303 65.6049 20.4562L58.9633 22.7087C58.8612 22.7433 58.8167 22.863 58.8714 22.9559L59.8757 24.661C59.9235 24.7421 59.8963 24.8465 59.8151 24.894L52.7741 29.0127C52.7665 29.0172 52.764 29.027 52.7684 29.0346C52.7713 29.0395 52.7766 29.0425 52.7823 29.0424L63.641 28.94C63.7718 28.9388 63.8522 28.7965 63.7859 28.6838L62.6277 26.7177C62.5727 26.6242 62.6181 26.5037 62.7212 26.4699L68.0379 24.7265C68.141 24.6926 68.1864 24.5722 68.1313 24.4787Z"
        fill={accentColor}
      />
      <Path
        d="M24.9609 34.2279C32.7102 28.2665 38.6711 30.4531 40.4594 31.2479C48.0895 36.0168 49.997 42.5734 49.997 44.9578M49.997 44.9578C48.2087 53.3033 43.4399 58.6682 39.8633 62.2448M49.997 44.9578C53.812 42.0965 53.9709 36.6123 53.5735 34.2279"
        stroke={secondaryAccentColor}
        strokeWidth="0.953754"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
);

export const Negative = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
      <Circle cx="40.0352" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Path
        d="M17 41H63"
        stroke={accentColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
);

export const NormalDigestion = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Circle cx="56.8441" cy="58.5714" r="9.42857" fill={secondaryAccentColor} />
      <Circle cx="56.9223" cy="58.6501" r="7.46429" fill={accentColor} />
      <Path
        d="M51.6968 23.6858H26.4365C25.5871 23.6858 24.7196 23.88 24.0848 24.4443C22.0441 26.2581 23.0071 28.2097 24.2517 29.2694C24.786 29.7243 25.5005 29.8545 26.2023 29.8545C33.3658 29.8545 42.9989 29.8545 48.3265 29.8545C49.416 29.8545 50.544 30.1785 51.1664 31.0729C52.307 32.712 51.7612 34.2165 50.9324 35.1428C50.4102 35.7264 49.5985 35.8891 48.8154 35.8891H26.6044C25.6498 35.8891 24.6709 36.1351 24.0203 36.8338C22.4101 38.563 23.1248 40.2252 24.1627 41.2505C24.7359 41.8167 25.5617 41.9907 26.3675 41.9907H47.6974C49.1553 41.9907 50.6614 42.6196 51.1315 43.9996C51.5952 45.3609 51.3622 46.4856 50.9253 47.2677C50.4831 48.0594 49.5263 48.2935 48.6195 48.2935H26.5811C25.641 48.2935 24.6814 48.5371 24.0187 49.2039C22.0302 51.2041 23.0559 53.133 24.3182 54.108C24.8182 54.4942 25.4642 54.5963 26.096 54.5963H37.0216C43.1255 55.0657 43.5151 57.7314 43.5151 58.4853C43.5151 61.3685 41.8917 63.7823 40.593 64.3858"
        stroke={secondaryAccentColor}
        strokeWidth="5.02857"
        strokeLinecap="round"
      />
      <Path
        d="M52.1294 59.0428L55.8491 61.2746C55.972 61.3483 56.1293 61.3295 56.2314 61.2289L61.6365 55.8999"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const No = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
        <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
        <Circle cx="40.0195" cy="40" r="39" stroke={strokeColor} strokeWidth={2} fill={fillColor}/>
        <Circle cx="39.789" cy="39.789" r="21.4101" stroke={accentColor} strokeWidth={4.7578} />
        <Path
          d="M50.5727 21.8684L29.9556 58.0277"
          stroke={accentColor}
          strokeWidth={4.7578}
          strokeLinecap="round"
        />
      </Svg>
  )
);

export const OilyScalp = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path 
        d="M38.476 63.1285C38.0651 62.6657 36.6544 60.749 39.9928 57.0513C40.0997 56.9329 40.2809 56.9131 40.4054 57.0128C41.969 58.2647 43.9086 60.8555 42.0946 63.0988C42.0789 63.1182 42.0604 63.1359 42.0406 63.1511C41.1113 63.8651 40.341 65.2286 38.476 63.1285Z" 
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path 
        d="M48.3745 58.1002C47.9635 57.6374 46.5529 55.7207 49.8912 52.023C49.9981 51.9046 50.1793 51.8848 50.3038 51.9845C51.8675 53.2364 53.807 55.8272 51.993 58.0705C51.9774 58.0899 51.9588 58.1076 51.9391 58.1228C51.0097 58.8368 50.2394 60.2003 48.3745 58.1002Z" 
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path 
        d="M19.2852 45.0576H32.2132C32.5222 45.0576 32.805 45.2464 32.9363 45.5261C37.8433 55.9836 43.9544 54.5609 47.913 45.5428C48.0404 45.2527 48.3272 45.0576 48.644 45.0576H61.8709" 
        stroke={secondaryAccentColor}
        strokeWidth="2.35714" 
        strokeLinecap="round"
      />
      <Path 
        d="M38.6987 47.4612C37.129 44.3885 37.6881 34.6144 40.3263 18.539C40.3848 18.1826 40.8971 18.1865 40.9433 18.5447C42.4747 30.4141 44.2306 44.5517 42.3663 47.4612C41.5763 49.1836 39.6467 49.782 38.6987 47.4612Z" 
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path 
        d="M28.5776 57.1568C28.1666 56.694 26.756 54.7773 30.0943 51.0796C30.2012 50.9612 30.3824 50.9415 30.507 51.0412C32.0706 52.293 34.0102 54.8838 32.1962 57.1271C32.1805 57.1465 32.1619 57.1642 32.1422 57.1794C31.2128 57.8934 30.4425 59.2569 28.5776 57.1568Z" 
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
    </Svg>
  )
);

export const NoneDischarge = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path d="M42.2284 47.7285L37.5142 51.4214" stroke={accentColor} strokeWidth="1.57143" strokeLinecap="round" />
      <Path
        d="M57.6288 34.0571H22.7431C22.6563 34.0571 22.5859 34.1275 22.5859 34.2143V40.6121C22.5859 40.6846 22.6325 40.7469 22.7028 40.7646C27.0499 41.8591 35.9581 46.3283 37.8818 55.7719C37.8968 55.8456 37.9616 55.9 38.0367 55.9H43.0931C43.1799 55.9 43.2501 55.8328 43.2517 55.746C43.3273 51.8181 46.2879 43.5861 57.664 40.7656C57.7344 40.7482 57.7859 40.6847 57.7859 40.6122V34.2143C57.7859 34.1275 57.7156 34.0571 57.6288 34.0571Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path d="M37.5132 43.635L42.856 49.6141" stroke={accentColor} strokeWidth="2.12355" strokeLinecap="round" />
      <Path d="M42.856 43.4856L37.5132 49.6142" stroke={accentColor} strokeWidth="2.12355" strokeLinecap="round" />
    </Svg>
  )
);

export const NormalFeces = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Ellipse cx="39.6836" cy="40.5618" rx="27.5" ry="27.5003" fill={accentColor} />
      <Path d="M41.4125 47.7902L36.6982 51.4831" stroke={accentColor} strokeWidth="1.57144" strokeLinecap="round" />
      <Path d="M22.3999 40.0906L36.6617 49.5469C36.7776 49.6237 36.9302 49.6153 37.0369 49.5261L56.9713 32.8619" stroke={secondaryAccentColor} strokeWidth="4" strokeLinecap="round" />
    </Svg>
  )
);

export const NormalSkin = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27." fill={accentColor}/>
      <Path
        d="M26.9326 36.0265C26.9326 31.9426 30.0751 30.6785 31.6464 30.9216C35.4174 30.9213 36.6744 34.568 36.3601 36.0265"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M44.2993 36.0256C44.2993 31.9416 47.4418 30.6775 49.0131 30.9206C52.7841 30.9203 54.0411 34.567 53.7268 36.0256"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M46.7095 48.7849C46.7095 53.1607 42.6691 54.5151 40.6489 54.2546C35.8004 54.2549 34.1842 50.3477 34.5882 48.7849"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const NormalScalp = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path
        d="M19.2852 45.0576H32.2132C32.5222 45.0576 32.805 45.2464 32.9363 45.5261C37.8433 55.9836 43.9544 54.5609 47.913 45.5428C48.0404 45.2527 48.3272 45.0576 48.644 45.0576H61.8709"     
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Path 
        d="M38.6987 47.4612C37.129 44.3885 37.6881 34.6144 40.3263 18.539C40.3848 18.1826 40.8971 18.1865 40.9433 18.5447C42.4747 30.4141 44.2306 44.5517 42.3663 47.4612C41.5763 49.1836 39.6467 49.782 38.6987 47.4612Z"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const OilySkin = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path 
        d="M27.1421 38.5639C27.1421 34.4799 30.2846 33.2158 31.8559 33.4589C35.6269 33.4587 36.8839 37.1053 36.5696 38.5639" 
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M44.5093 38.5622C44.5093 34.4782 47.6518 33.2141 49.223 33.4572C52.994 33.457 54.251 37.1036 53.9368 38.5622" 
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M46.9204 51.3211C46.9204 55.6968 42.88 57.0512 40.8598 56.7907C36.0113 56.791 34.3951 52.8838 34.7992 51.3211" 
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Ellipse cx="58.0199" cy="48.6714" rx="5.73571" ry="8.17143" fill={secondaryAccentColor}/>
      <Path 
        d="M52.722 19.7867C45.3664 18.8835 36.0818 18.5221 29.1903 19.8072C26.5216 20.3049 26.6169 23.5563 29.1542 24.5216C31.4856 25.4086 33.9704 26.3076 35.9928 26.8422C37.3425 27.199 38.4751 28.2431 38.7317 29.6153L39.7612 35.1215C39.8699 35.703 40.3776 36.1246 40.9692 36.1246C41.5259 36.1246 42.013 35.7505 42.1566 35.2128L43.4058 30.536C43.874 28.7831 45.3815 26.5905 47.1154 26.0561C48.6431 25.5853 50.6254 25.0322 52.7274 24.4863C55.8088 23.6861 55.882 20.1748 52.722 19.7867Z" 
        fill={secondaryAccentColor}
        stroke={accentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Ellipse cx="24.7064" cy="48.6714" rx="5.73571" ry="8.17143" fill={secondaryAccentColor}/>
    </Svg>
  )
);

export const Pad = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="39.9971" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Path
        d="M50.327 55.9112C48.2903 49.7548 47.4411 37.2698 50.8788 22.6573C51.0019 22.1339 51.104 21.5994 51.0787 21.0623C50.8928 17.1038 47.3285 11 38.717 11C33.7761 11 27.2337 14.1611 27.0029 21.4345C26.9764 22.2679 27.157 23.0905 27.4066 23.886C29.4712 30.4665 32.2263 41.7096 27.5789 56.1339C27.2288 57.2206 26.9685 58.3671 27.233 59.4777C28.2279 63.6553 32.6966 67.9794 38.717 67.9794C42.038 68.231 50.0639 66.6376 50.9979 59.7742C51.1749 58.4738 50.7502 57.1904 50.3378 55.9438L50.327 55.9112Z"
        fill={accentColor}
      />
      <Path
        d="M47.6453 53.5873C45.5433 48.5531 44.7655 38.0106 47.9118 25.3716C48.0765 24.7103 48.1594 24.0244 48.0472 23.3522C47.4955 20.0458 45.1629 14.9521 38.9948 14.9521C36.0384 15.3662 30.3148 17.8353 30.293 24.398C30.2915 24.8553 30.3731 25.3061 30.4935 25.7472C32.0551 31.4682 34.3098 41.555 30.5795 54.581C30.4073 55.1824 30.2924 55.8089 30.3747 56.4291C30.8764 60.2072 34.3005 64.3385 38.9948 64.3385C41.4734 64.5576 47.6727 62.7985 48.3479 56.7182C48.4677 55.6388 48.0638 54.5894 47.6453 53.5873Z"
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="0.886667"
      />
      <Path
        d="M37.4105 29.0772C36.901 27.8746 36.6262 25.6571 38.3299 22.8982C38.7708 22.1841 39.7754 22.2254 40.1744 22.9637C41.1308 24.7331 42.106 27.2881 41.6083 29.279C41.3338 30.4867 40.8837 34.2853 41.2789 39.8186C41.2789 41.136 41.5259 43.1122 42.1023 46.5705C42.4653 48.7485 43.2133 52.5263 40.3744 56.6375C39.9896 57.1948 39.2097 57.291 38.7349 56.808C37.1921 55.2384 35.363 52.116 36.6679 46.5705C36.8875 45.802 36.9583 43.6062 37.3263 39.8186C37.5002 38.0296 38.1451 35.4053 37.5266 29.503C37.5112 29.3564 37.468 29.2129 37.4105 29.0772Z"
        fill={secondaryAccentColor}
      />
    </Svg>
  )
);

export const Painkillers = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
        <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
        <Circle cx="40.0234" cy="39.999" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
        <Path
          d="M33.0976 21.3713L19.8069 32.3749L18.1253 33.7672C15.7403 30.9969 12.6259 25.8962 19.5262 20.1833C21.9244 18.6625 28.0518 15.2768 33.0976 21.3713Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
        <Path
          d="M20.0945 36.2056L33.5084 25.0999L35.2057 23.6947C37.5461 26.4101 40.478 32.0459 33.5137 37.8118C31.0998 39.3545 25.0427 42.1822 20.0945 36.2056Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
        <Path
          d="M35.8329 46.6211L22.5423 57.6246L20.8606 59.0169C18.4756 56.2467 15.3613 51.1459 22.2615 45.433C24.6598 43.9123 30.7871 40.5265 35.8329 46.6211Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
        <Path
          d="M22.8299 61.4553L36.2438 50.3497L37.941 48.9445C40.2814 51.6599 43.2133 57.2957 36.2491 63.0615C33.8352 64.6043 27.7781 67.432 22.8299 61.4553Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
        <Path
          d="M58.8193 33.1543L45.5286 44.1578L43.8469 45.5501C41.462 42.7799 38.3476 37.6791 45.2479 31.9662C47.6461 30.4455 53.7735 27.0597 58.8193 33.1543Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
        <Path
          d="M45.8162 47.9885L59.2301 36.8829L60.9274 35.4777C63.2678 38.1931 66.1997 43.8289 59.2354 49.5947C56.8215 51.1375 50.7644 53.9652 45.8162 47.9885Z"
          fill={accentColor}
          stroke={accentColor}
          strokeWidth="1.2"
        />
      </Svg>
  )
);

export const Period = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40.0029" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M66.0924 27.31C53.2476 28.8043 32.9315 29.8264 12.0411 27.1968C10.073 26.9491 8.83108 29.7943 10.3179 31.1074C17.63 37.5654 27.3595 47.9021 33.014 59.5523C33.3326 60.2086 33.9928 60.6338 34.7223 60.6338H45.0381C45.8701 60.6338 46.5969 60.0829 46.8761 59.2992C49.0092 53.3112 55.3673 41.8624 67.8007 31.4419C69.3564 30.138 68.1087 27.0754 66.0924 27.31Z"
        fill={accentColor}
      />
      <Path
        d="M11.5 30.5002C33.2143 37.4809 55.6429 30.3656 66.5 31.0002"
        stroke={secondaryAccentColor}
        strokeWidth="1.8684"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Positive = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
      <Circle cx="40.0234" cy="39.999" r="39" stroke={strokeColor} strokeWidth="2" />
      <Path
        d="M80.0195 40C80.0195 62.0914 62.1109 80 40.0195 80C17.9281 80 0.0195312 62.0914 0.0195312 40C0.0195312 17.9086 17.9281 0 40.0195 0C62.1109 0 80.0195 17.9086 80.0195 40Z"
        fill={fillColor}
      />
      <Path
        d="M39.0417 17V63M17 38.4667H63"
        stroke={accentColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
);

export const Removed = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 81 80" fill="none">
        <Circle cx="40.0547" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
        <Path
        d="M40.5195 11L40.5195 63M40.5195 63L57.0195 41.5M40.5195 63L24.0195 41.5"
        stroke={accentColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
    </Svg>
  )
);

export const Sociable = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
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
  )
);

export const Reserved = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40" cy="40" r="27.4055" fill={accentColor} stroke={accentColor} strokeWidth="0.18902" />
      <Path
        d="M44.0859 33.8715H54.4998"
        stroke={secondaryAccentColor}
        strokeWidth="1.72857"
        strokeLinecap="round"
      />
      <Path
        d="M25.543 33.8715H35.9568"
        stroke={secondaryAccentColor}
        strokeWidth="1.72857"
        strokeLinecap="round"
      />
      <Line
        x1="52.747"
        y1="48.4662"
        x2="52.8658"
        y2="53.338"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Line
        x1="33.2612"
        y1="48.4662"
        x2="33.38"
        y2="53.338"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Line
        x1="38.1328"
        y1="48.4662"
        x2="38.2516"
        y2="53.338"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Line
        x1="43.0043"
        y1="48.4662"
        x2="43.1232"
        y2="53.338"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Line
        x1="47.8754"
        y1="48.4662"
        x2="47.9943"
        y2="53.338"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M22.8716 50.84L57.2859 50.8427"
        stroke={secondaryAccentColor}
        strokeWidth="2.04286"
        strokeLinecap="round"
      />
      <Line
        x1="28.0756"
        y1="48.6233"
        x2="28.1945"
        y2="53.4952"
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Sad = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="39.5" cy="40.4971" r="27.5" fill={accentColor} />
      <Path
        d="M33.6001 52.7971C33.6001 48.4217 37.6624 47.0675 39.6935 47.3279C44.5683 47.3276 46.1932 51.2345 45.787 52.7971"
        stroke={secondaryAccentColor}
        strokeWidth="2.18022"
        strokeLinecap="round"
      />
      <Path
        d="M42.7998 37.0972H53.2131"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <Path
        d="M25.3999 36.9971H36.3999"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Salty = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="39.5" cy="40.5" r="27.5" fill={accentColor} />
      <Rect x="31.4043" y="32.6516" width="16.191" height="28.0562" rx="1.85393" fill={secondaryAccentColor} />
      <Rect x="33.3818" y="39.573" width="12.1124" height="16.4382" rx="1.85393" fill={accentColor} />
      <Circle cx="43.1459" cy="53.5394" r="0.741573" fill={secondaryAccentColor} />
      <Circle cx="36.5956" cy="26.7191" r="0.741573" fill={accentColor} />
      <Circle cx="38.6967" cy="50.5731" r="0.741573" fill={secondaryAccentColor} />
      <Path
        d="M46.2441 30.3651H39.3147H32.7525C32.3318 30.3651 32.0351 29.9506 32.1834 29.5569C34.4952 23.4192 38.2673 23.1348 39.809 23.1348C40.6992 23.1348 45.0443 23.9854 46.8207 29.5977C46.9424 29.9821 46.6473 30.3651 46.2441 30.3651Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.85393"
        strokeLinecap="round"
      />
      <Circle cx="36.5956" cy="52.7977" r="0.741573" fill={secondaryAccentColor} />
      <Circle cx="36.0393" cy="26.9045" r="0.926966" fill={accentColor} />
      <Circle cx="39.6237" cy="25.4214" r="0.926966" fill={accentColor} />
      <Circle cx="43.3313" cy="26.9045" r="0.926966" fill={accentColor} />
      <Circle cx="40.9213" cy="47.6068" r="0.741573" fill={secondaryAccentColor} />
      <Circle cx="35.8539" cy="49.09" r="0.741573" fill={secondaryAccentColor} />
      <Circle cx="40.1796" cy="53.5394" r="0.741573" fill={secondaryAccentColor} />
      <Circle cx="42.4047" cy="50.5731" r="0.741573" fill={secondaryAccentColor} />

    </Svg>
  )
);

export const SensitiveSkin = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor}/>
      <Path
        d="M56.5268 41.675L56.8973 48.0983L60.1929 44.6523L60.6025 50.8555"       
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path 
        d="M26.9326 36.0278C26.9326 31.9438 30.0751 30.6797 31.6464 30.9228C35.4174 30.9225 36.6744 34.5692 36.3601 36.0278"
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M44.2998 36.0268C44.2998 31.9428 47.4423 30.6787 49.0136 30.9218C52.7846 30.9216 54.0416 34.5682 53.7273 36.0268" 
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M46.709 48.7859C46.709 53.1617 42.6686 54.516 40.6484 54.2556C35.7999 54.2559 34.1837 50.3487 34.5878 48.7859"          
        stroke={secondaryAccentColor}
        strokeWidth="1.71303"
        strokeLinecap="round"
      />
      <Path 
        d="M20.2251 41.675L20.5955 48.0983L23.8911 44.6523L24.3007 50.8555" 
        stroke={secondaryAccentColor}
        strokeWidth="1.57143" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
);

export const Spicy = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27." fill={accentColor}/>
      <Path 
        d="M52.2028 34.0352L52.1875 34.0322L50.2152 33.6722L52.042 32.8717C52.0571 32.8651 52.0727 32.8596 52.0886 32.8551L53.0414 32.5906L53.0414 32.5907L53.0538 32.5869L54.3245 32.1993C54.7136 32.0806 55.0566 31.845 55.307 31.5244L55.6755 31.0528C55.8027 30.89 55.9036 30.7084 55.9746 30.5145L56.1692 29.9828L56.3975 29.3592L55.9199 29.1844L56.3975 29.3592C56.4172 29.3052 56.4419 29.2531 56.471 29.2036L56.916 28.4471L56.4776 28.1892L56.916 28.4471C56.9606 28.3714 57.0153 28.3022 57.0788 28.2415L57.3322 27.9991C57.3979 27.9363 57.4723 27.8832 57.553 27.8414L57.5644 27.8355C57.4371 28.026 57.3459 28.2426 57.2999 28.4756L57.275 28.6021L56.9771 29.585C56.9753 29.5907 56.9737 29.5963 56.9722 29.602L56.7873 30.2976L57.2834 30.4295L56.7873 30.2976C56.7518 30.431 56.7304 30.5677 56.7233 30.7055L56.6933 31.2938L57.206 31.32L56.6933 31.2938C56.6873 31.411 56.6918 31.5285 56.7066 31.6449L56.7238 31.7803C56.7796 32.2184 56.9804 32.6253 57.2941 32.9363L57.9596 33.596C57.9685 33.6048 57.9777 33.6133 57.9873 33.6215L59.1955 34.6552C59.3078 34.7513 59.3963 34.8722 59.4538 35.0083L59.8651 35.9807C59.8774 36.0098 59.885 36.0407 59.8877 36.0723L59.9953 37.3513L57.7873 35.8404C57.769 35.8279 57.7499 35.8166 57.7301 35.8065L56.3753 35.1175C56.2608 35.0593 56.1409 35.0124 56.0174 34.9774L54.2163 34.4671C54.2055 34.4641 54.1947 34.4614 54.1838 34.459L52.2028 34.0352ZM60.3865 37.674C60.3864 37.6738 60.3862 37.6736 60.3861 37.6734L60.3865 37.674Z" 
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        stroke-width="1.02667" 
        stroke-linejoin="round"
      />
      <Path 
        d="M58.4835 43.1531C54.5236 51.2198 37.5833 65.2997 22.2116 49.2222C6.99492 33.3069 35.8182 58.332 45.0796 39.5607C45.2633 39.1884 45.3074 38.732 45.4974 38.3629C47.024 35.398 60.4186 39.2102 58.4835 43.1531Z" 
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        stroke-width="2.2"
      />
    </Svg>
  )
);

export const STI = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Ellipse cx="39.7266" cy="39.7266" rx="26.7266" ry="26.7266" fill={accentColor} />
      <Path
        d="M26.9019 36.9971L35.3332 32.243"
        stroke={secondaryAccentColor}
        strokeWidth="1.83745"
        strokeLinecap="round"
      />
      <Path
        d="M33.7739 50.4173C33.7739 46.165 37.722 44.8488 39.696 45.102C44.4337 45.1017 46.0129 48.8987 45.6181 50.4173"
        stroke={secondaryAccentColor}
        strokeWidth="1.82093"
        strokeLinecap="round"
      />
      <Path
        d="M44.0015 32.2437L52.3726 37.103"
        stroke={secondaryAccentColor}
        strokeWidth="1.83745"
        strokeLinecap="round"
      />
      <Path
        d="M61.6076 66.2316C67.8506 66.2316 72.9116 61.1707 72.9116 54.9276C72.9116 48.6846 67.8506 43.6236 61.6076 43.6236C55.3645 43.6236 50.3035 48.6846 50.3035 54.9276C50.3035 61.1707 55.3645 66.2316 61.6076 66.2316Z"
        fill={accentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.82075"
      />
      <Path
        d="M63.111 48.4937C61.2886 49.9392 61.9951 52.6351 57.7554 54.0026C53.5156 55.37 55.7259 64.5938 59.9126 60.5273C61.8836 58.6128 63.2217 54.2616 66.458 54.9793C69.8051 55.7216 67.2464 45.2134 63.111 48.4937Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Ellipse cx="65.3264" cy="50.1961" rx="0.668166" ry="0.501123" fill={accentColor} />
      <Ellipse cx="66.3284" cy="52.5343" rx="0.835207" ry="0.334082" fill={accentColor} />
      <Ellipse cx="62.8199" cy="50.8639" rx="0.334083" ry="0.334082" fill={accentColor} />
      <Ellipse cx="62.7381" cy="54.038" rx="0.918728" ry="1.00225" fill={accentColor} />
      <Ellipse cx="59.4797" cy="55.7921" rx="0.668166" ry="0.918726" fill={accentColor} />
      <Ellipse cx="59.1473" cy="59.0491" rx="1.00225" ry="0.501123" fill={accentColor} />
      <Path
        d="M55.6415 59.706L54.2695 60.6877"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M56.4715 54.8731L55.3022 53.5367"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M58.1399 53.8708L57.1377 52.5344"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M60.1498 52.5346L58.9805 51.1982"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M61.4096 50.9108L60.5591 49.4221"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M62.6405 49.1506L61.79 47.662"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M65.5704 48.0308L66.4717 46.5748"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M66.8472 48.881L68.2773 47.9934"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M68.0123 53.3289L69.501 54.1055"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M67.4351 50.7025L69.0322 50.2111"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M67.7768 52.0011L69.4424 52.0175"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M55.4328 56.4192L53.9873 55.5588"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M55.3642 57.9371L53.7563 58.3892"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M56.7404 61.0638L55.5552 62.2803"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M58.1681 61.327L58.2075 63.0579"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M59.6976 60.8317L60.5625 62.3114"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M60.8151 59.6193L61.9146 60.9199"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M66.8277 54.9126L67.5669 56.4641"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M61.9396 58.144L63.0391 59.4446"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M63.0568 56.7464L64.1562 58.047"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Path
        d="M64.845 55.5038L65.7095 56.9838"
        stroke={secondaryAccentColor}
        strokeWidth="0.835206"
        strokeLinecap="round"
      />
      <Ellipse cx="57.1394" cy="57.5458" rx="0.668166" ry="0.501123" fill={accentColor} />
    </Svg>
  )
);

export const StickyDischarge = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40" cy="39.9971" r="27.4055" fill={accentColor} stroke={accentColor} strokeWidth="0.18902" />
      <Path d="M41.7284 47.2256L37.0142 50.9185" stroke={accentColor} strokeWidth="1.57143" strokeLinecap="round" />
      <Path
        d="M57.1288 33.5542H22.2431C22.1563 33.5542 22.0859 33.6246 22.0859 33.7113V40.1092C22.0859 40.1817 22.1325 40.2439 22.2028 40.2617C26.5499 41.3562 35.4581 45.8254 37.3818 55.269C37.3968 55.3426 37.4616 55.3971 37.5367 55.3971H42.5931C42.6799 55.3971 42.7501 55.3299 42.7517 55.2431C42.8273 51.3152 45.7879 43.0832 57.164 40.2627C57.2344 40.2453 57.2859 40.1818 57.2859 40.1093V33.7113C57.2859 33.6246 57.2156 33.5542 57.1288 33.5542Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
        strokeLinecap="round"
      />
      <Path
        d="M36.3893 39.9788C36.519 40.6601 36.4557 42.2796 35.4766 44.7734C35.2863 45.258 35.6335 45.7974 36.1541 45.7974C36.6113 45.7974 36.9539 45.3749 36.8868 44.9227C36.6792 43.5229 36.5414 41.3823 37.0298 39.8398C37.0388 39.8113 37.0435 39.7819 37.0435 39.752C37.0435 39.4901 36.7189 39.3681 36.5464 39.5652L36.4675 39.6554C36.3907 39.7432 36.3675 39.8642 36.3893 39.9788Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="0.80003"
        strokeLinecap="round"
      />
      <Path
        d="M40.9894 40.5789C41.1191 41.2602 41.0558 42.8796 40.0767 45.3735C39.8864 45.8581 40.2336 46.3974 40.7542 46.3974C41.2114 46.3974 41.554 45.9749 41.4869 45.5227C41.2793 44.123 41.1414 41.9823 41.6299 40.4399C41.6389 40.4114 41.6436 40.382 41.6436 40.3521C41.6436 40.0902 41.319 39.9682 41.1465 40.1653L41.0676 40.2555C40.9908 40.3433 40.9676 40.4643 40.9894 40.5789Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="0.80003"
        strokeLinecap="round"
      />
      <Path
        d="M34.643 45.1973C36.7369 43.602 41.7733 41.3705 45.2127 45.1632C45.2324 45.185 45.2587 45.2009 45.2873 45.2076C45.4463 45.245 45.4372 45.5399 45.2803 45.5856C44.1137 45.9254 42.8068 46.8009 43.1192 48.6304C43.1509 48.8165 43.1368 49.0119 43.0355 49.1712C42.625 49.8171 41.7872 50.6289 40.5262 50.9013C38.9896 51.2332 37.9524 49.6003 36.9625 48.379C36.5787 47.9055 36.0703 47.4701 35.4092 47.1591C34.4285 46.6978 32.8351 46.3241 33.7558 45.7523C33.9809 45.6125 34.2721 45.4322 34.643 45.1973Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="1.40005"
        strokeLinecap="round"
      />
      <Path
        d="M38.6896 38.7788C38.8193 39.4601 38.756 41.0795 37.7769 43.5734C37.5866 44.058 37.9338 44.5973 38.4544 44.5973C38.9116 44.5973 39.2542 44.1748 39.1871 43.7226C38.9795 42.3229 38.8416 40.1822 39.3301 38.6398C39.3391 38.6113 39.3438 38.5819 39.3438 38.5519C39.3438 38.29 39.0192 38.1681 38.8467 38.3652L38.7678 38.4554C38.691 38.5432 38.6678 38.6642 38.6896 38.7788Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="0.80003"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Stressed = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M56.7122 36.6419L48.5725 47.1555L57.8759 46.5737L50.0883 56.802"
        stroke={secondaryAccentColor}
        strokeWidth="3.16092"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M42.6094 17.91L35.5365 32.0914L45.13 29.8613L38.3854 43.6365"
        stroke={secondaryAccentColor}
        strokeWidth="3.16092"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.4139 36.1568L22.1817 49.4331L30.0597 44.2746L28.003 57.1252"
        stroke={secondaryAccentColor}
        strokeWidth="3.16092"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
);

export const Sweet = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.2086" cy="34.046" r="9.9" fill={secondaryAccentColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Line x1="40.7214" y1="40.4103" x2="41.1614" y2="60.0637" stroke={secondaryAccentColor} strokeWidth="1.46667" />
      <Path
        d="M44.5689 41.5081C44.3592 41.6665 44.1007 41.7425 43.8502 41.7194C43.5998 41.6962 43.378 41.5758 43.2336 41.3847C43.0892 41.1935 43.034 40.9472 43.0802 40.7C43.1264 40.4528 43.2701 40.2249 43.4799 40.0665C45.1208 38.8241 46.2455 37.0392 46.6072 35.1034C46.9688 33.1677 46.5379 31.239 45.409 29.7406C44.3968 28.4041 42.8442 27.5625 41.0919 27.4005C39.3395 27.2385 37.5305 27.7694 36.0618 28.8767C34.77 29.8548 33.8847 31.2599 33.6 32.7838C33.3153 34.3076 33.6545 35.8259 34.5432 37.0055C35.3143 38.0238 36.4973 38.665 37.8324 38.7884C39.1675 38.9119 40.5458 38.5074 41.6648 37.6638C42.6075 36.9501 43.2537 35.9248 43.4614 34.8127C43.6692 33.7006 43.4216 32.5927 42.773 31.7319C42.2428 31.0319 41.4295 30.5911 40.5116 30.5062C39.5938 30.4214 38.6462 30.6994 37.8769 31.2794C37.2826 31.7283 36.8753 32.374 36.7444 33.0744C36.6136 33.7748 36.7699 34.4726 37.1791 35.0143C37.4679 35.3966 37.9116 35.6374 38.4124 35.6837C38.9132 35.73 39.4303 35.578 39.8497 35.2611C40.0944 35.0763 40.2621 34.8104 40.316 34.522C40.3699 34.2336 40.3055 33.9462 40.137 33.7232C40.0889 33.6598 40.0152 33.6198 39.932 33.6121C39.9662 33.8181 39.9262 34.0356 39.8186 34.2289C39.711 34.4223 39.5422 34.5799 39.3398 34.6759C39.1375 34.7719 38.9137 34.8006 38.7051 34.7573C38.4966 34.7139 38.3158 34.6011 38.1925 34.4374C37.9518 34.1188 37.8598 33.7084 37.9368 33.2963C38.0137 32.8843 38.2533 32.5045 38.6029 32.2404C39.0923 31.8708 39.6955 31.6934 40.2798 31.7474C40.8641 31.8014 41.3816 32.0824 41.7186 32.5284C41.9451 32.8282 42.1045 33.1739 42.1879 33.5459C42.2712 33.9179 42.2769 34.3089 42.2044 34.6965C42.132 35.0841 41.983 35.4608 41.7658 35.805C41.5487 36.1492 41.2676 36.4543 40.9388 36.7027C40.0995 37.3355 39.0658 37.6388 38.0644 37.5463C37.0631 37.4537 36.1759 36.9728 35.5975 36.209C34.901 35.2845 34.6352 34.0945 34.8583 32.9001C35.0814 31.7057 35.7753 30.6044 36.7878 29.8378C37.9768 28.9413 39.4412 28.5115 40.8598 28.6427C42.2784 28.7738 43.5353 29.4551 44.3546 30.5371C45.2914 31.7805 45.649 33.3808 45.3489 34.9871C45.0488 36.5934 44.1155 38.0745 42.7538 39.1054C41.2152 40.2653 39.32 40.8214 37.4843 40.6517C35.6485 40.482 34.022 39.6004 32.9616 38.2003C31.7845 36.6382 31.3352 34.6275 31.7122 32.6093C32.0893 30.5911 33.2619 28.7303 34.9728 27.4351C36.8611 26.0115 39.187 25.329 41.44 25.5373C43.693 25.7455 45.6891 26.8275 46.9905 28.5458C48.4079 30.4268 48.9489 32.8479 48.4949 35.2779C48.0409 37.708 46.629 39.9486 44.5689 41.5081Z"
        fill={secondaryAccentColor}
      />
    </Svg>
  )
);

export const Tampon = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M22.4361 15.5865C21.4587 14.0507 21.1147 10.8195 26.4087 7.95668C28.1865 6.99534 32.2373 5.98859 34.2184 9.65226L50.8692 40.4438C51.931 42.4074 51.2 44.8599 49.2365 45.9217L44.7918 48.3252C42.8283 49.387 40.3757 48.656 39.3139 46.6924L22.848 16.2427C22.7251 16.0153 22.5748 15.8046 22.4361 15.5865Z"
        fill={accentColor}
      />
      <Path
        d="M44.4267 43.2271C46.8348 43.9454 46.5091 46.7017 45.9865 48.1882C45.9332 48.3399 45.8844 48.4941 45.8581 48.6527C45.3159 51.9186 47.4653 53.5404 48.7839 54.0142C48.9022 54.0567 49.0212 54.0975 49.1313 54.1583C50.836 55.0989 50.5726 57.5191 50.1081 59.0141C49.9993 59.3642 49.911 59.7319 50.0029 60.0868C50.244 61.0175 50.9949 61.7674 51.8276 62.3215C52.9546 63.0716 53.6209 64.413 54.0969 65.6804C54.5425 66.8668 55.5536 67.3537 56.1958 67.4495C58.5095 67.7942 58.8013 69.8085 58.3797 70.2581"
        stroke={accentColor}
        strokeLinecap="round"
      />
      <Path
        d="M29.3872 17.8481L42.8833 43.5347"
        stroke={secondaryAccentColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M32.9453 15.9402L45.8906 41.5486"
        stroke={secondaryAccentColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Ultra = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40.0029" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M40.072 65.6932C44.6643 65.6932 49.0685 63.869 52.3158 60.6218C55.563 57.3747 57.3873 52.9705 57.3873 48.3784C57.3873 45.5327 56.3132 42.1237 54.6356 38.5588C52.9649 35.0089 50.7302 31.375 48.4839 28.0992C46.2393 24.8259 43.9931 21.9245 42.3074 19.8409C41.4649 18.7994 40.7632 17.9633 40.2727 17.3882C40.2012 17.3044 40.1342 17.2261 40.072 17.1536C40.0097 17.2261 39.9427 17.3044 39.8712 17.3882C39.3808 17.9633 38.6791 18.7994 37.8365 19.8409C36.1508 21.9245 33.9047 24.8259 31.66 28.0992C29.4138 31.375 27.179 35.0089 25.5084 38.5588C23.8307 42.1237 22.7567 45.5327 22.7567 48.3784C22.7567 52.9705 24.5809 57.3747 27.8282 60.6218C31.0754 63.869 35.4797 65.6932 40.072 65.6932Z"
        stroke={accentColor}
        strokeWidth="1.51352"
      />
      <Path
        d="M44.7005 28.3613C43.1392 14.9601 27.2187 32.9809 25.9573 44.0133C24.2687 58.7819 35.159 63.6789 40.149 63.1311C52.3231 63.1311 54.5384 53.6667 54.5384 49.4041C54.5384 49.4041 54.5006 45.8132 52.7685 43.4113C49.5445 38.9406 46.214 41.3525 44.7005 28.3613Z"
        fill={accentColor}
      />
    </Svg>
  )
);

export const Unmotivated = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Ellipse cx="53.7749" cy="54.3593" rx="2.42337" ry="2.50992" fill={secondaryAccentColor} />
      <Ellipse cx="54.9362" cy="59.7065" rx="1.26437" ry="1.30952" fill={secondaryAccentColor} />
      <Path
        d="M21.3686 34.6997C19.2602 38.5188 17.8053 44.8917 25.4762 42.4486C26.3888 45.1042 28.9529 48.8208 33 42.4486C34.6501 45.65 39.2773 49.9154 43.4933 41.3606C47.9183 43.1074 55.2304 44.0691 49.0789 33.941C50.8003 30.9949 52.0938 25.3205 43.4959 26.192C42.9699 21.3176 39.9578 14.1001 32.117 24.2257C29.9048 21.8608 25.1852 19.1609 24.0035 27.2797C19.4729 27.2789 16.1007 30.2246 21.3686 34.6997Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M40.7422 34.6255H45.0951L41.4046 39.7219H45.6629"
        stroke={accentColor}
        strokeWidth="1.72224"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M32.3789 31.312H36.7318L33.0413 36.4084H37.2996"
        stroke={accentColor}
        strokeWidth="1.72224"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25 28H29.3529L25.6624 33.0964H29.9207"
        stroke={accentColor}
        strokeWidth="1.72224"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Ellipse cx="49.2469" cy="48.5756" rx="3.16092" ry="3.27381" fill={secondaryAccentColor} />
    </Svg>
  )
);

export const UTI = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="37.6667" cy="39.6667" r="26.6667" fill={accentColor} />
      <Path
        d="M24.8667 36.9432L33.2791 32.1998"
        stroke={secondaryAccentColor}
        strokeWidth="1.83333"
        strokeLinecap="round"
      />
      <Path
        d="M31.7241 50.3332C31.7241 46.0904 35.6633 44.7772 37.6329 45.0297C42.36 45.0295 43.9356 48.8179 43.5417 50.3332"
        stroke={secondaryAccentColor}
        strokeWidth="1.81685"
        strokeLinecap="round"
      />
      <Path
        d="M41.9331 32.1998L50.2854 37.0483"
        stroke={secondaryAccentColor}
        strokeWidth="1.83333"
        strokeLinecap="round"
      />
      <Circle cx="59.5832" cy="55.5832" r="9.50833" fill={accentColor} stroke={secondaryAccentColor} strokeWidth="1.81667" />
      <Path
        d="M55.4072 50.0506C56.2822 51.2193 55.3032 52.1833 54.7043 52.5193"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
      <Path
        d="M58.6877 56.4998C58.4378 53.8929 60.4583 54.1722 61.4998 54.6377"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
      <Path
        d="M55.1665 57.4998C54.8029 55.5415 53.3483 56.1646 52.6665 56.721"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
      <Path
        d="M65.7094 54.7495C65.7826 56.6253 64.3925 57.4432 63.6883 57.6177"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
      <Path
        d="M58.3335 62.9998C58.3335 60.6443 60.2224 61.2913 61.1668 61.9093"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
      <Path
        d="M62.7035 50.7102C60.9104 50.8667 60.6322 49.7394 60.7172 49.1562"
        stroke={secondaryAccentColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Vivid = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor}/>
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M33.1074 22.4288V27.1431C33.1074 27.577 32.7556 27.9288 32.3217 27.9288H28.713C28.279 27.9288 27.9272 28.2806 27.9272 28.7145V58.5716C27.9272 59.0056 28.279 59.3574 28.713 59.3574H52.4415C52.8755 59.3574 53.2272 59.0056 53.2272 58.5716V28.7145C53.2272 28.2806 52.8755 27.9288 52.4415 27.9288H48.6827C48.2488 27.9288 47.897 27.577 47.897 27.1431V22.4288C47.897 21.9948 47.5452 21.6431 47.1113 21.6431H33.8931C33.4591 21.6431 33.1074 21.9948 33.1074 22.4288Z"
        stroke={secondaryAccentColor}
        strokeWidth="2.82857"
      />
      <Rect x="30.5986" y="51.186" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      <Rect x="30.5986" y="44.9001" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      <Rect x="30.5986" y="38.6145" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
      <Rect x="30.5986" y="32.3289" width="19.9571" height="4.71429" rx="1.57143" fill={secondaryAccentColor} />
    </Svg>
  )
);

export const Vulvar = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Path
        d="M64.0675 19.4583L60.2405 17.0282C60.2012 17.0033 60.1517 17.0117 60.1236 17.048L54.8221 23.901C54.7867 23.9467 54.7994 24.0167 54.8488 24.048L56.5826 25.149C56.6269 25.1771 56.6425 25.2374 56.6175 25.2835L51.7824 34.176C51.7785 34.1831 51.7809 34.1924 51.7878 34.1968C51.7926 34.1999 51.7987 34.1997 51.8032 34.1964L61.8331 26.7173C61.8869 26.6772 61.8819 26.5901 61.8238 26.5532L59.7873 25.2601C59.7377 25.2286 59.7252 25.1582 59.7611 25.1125L64.0937 19.6059C64.1296 19.5602 64.1171 19.4898 64.0675 19.4583Z"
        fill={accentColor}
      />
      <Path
        d="M63.9049 63.9886L66.9736 60.5121C67.0042 60.4774 67.0072 60.4238 66.9807 60.3852L62.0556 53.2151C62.0219 53.1661 61.9557 53.1615 61.9168 53.2056L60.5252 54.7821C60.4905 54.8214 60.4328 54.8226 60.3964 54.7848L53.5321 47.6338C53.5263 47.6278 53.5171 47.628 53.5116 47.6342C53.5077 47.6386 53.5065 47.645 53.5086 47.6507L57.9037 59.9496C57.9278 60.0171 58.0084 60.0347 58.0544 59.9826L59.6873 58.1326C59.7264 58.0883 59.7931 58.0932 59.8266 58.1429L63.7657 63.9784C63.7992 64.028 63.8659 64.0329 63.9049 63.9886Z"
        fill={accentColor}
      />
      <Path
        d="M14.9276 19.2444L18.7547 16.8143C18.7939 16.7894 18.8434 16.7978 18.8716 16.8342L24.173 23.6871C24.2084 23.7329 24.1957 23.8028 24.1464 23.8342L22.4125 24.9351C22.3682 24.9633 22.3526 25.0235 22.3777 25.0696L27.2127 33.9621C27.2166 33.9693 27.2142 33.9786 27.2074 33.9829C27.2025 33.986 27.1965 33.9859 27.192 33.9825L17.162 26.5034C17.1083 26.4634 17.1132 26.3763 17.1713 26.3394L19.2078 25.0463C19.2574 25.0148 19.2699 24.9443 19.234 24.8987L14.9014 19.392C14.8655 19.3464 14.878 19.2759 14.9276 19.2444Z"
        fill={accentColor}
      />
      <Path
        d="M15.0946 63.7757L12.0259 60.2992C11.9953 60.2645 11.9923 60.2109 12.0188 60.1723L16.9439 53.0023C16.9776 52.9532 17.0438 52.9486 17.0827 52.9927L18.4743 54.5692C18.509 54.6085 18.5667 54.6097 18.6031 54.5719L25.4674 47.4209C25.4732 47.4149 25.4824 47.4151 25.4879 47.4213C25.4918 47.4257 25.493 47.4322 25.491 47.4378L21.0958 59.7368C21.0717 59.8042 20.9911 59.8218 20.9451 59.7697L19.3122 57.9197C19.2731 57.8754 19.2064 57.8803 19.173 57.93L15.2338 63.7655C15.2003 63.8151 15.1337 63.82 15.0946 63.7757Z"
        fill={accentColor}
      />
      <Path
        d="M39.6544 60.4273C34.855 59.8047 26.8358 48.3016 37.2944 22.1356C37.4379 21.7766 37.8693 21.622 38.2246 21.7747C39.033 22.1221 39.6526 22.1617 40.1057 22.058C40.469 21.9748 40.9038 22.0282 41.1044 22.3424C49.22 35.0582 47.5217 58.8879 39.8292 60.4209C39.7711 60.4325 39.7132 60.435 39.6544 60.4273Z"
        fill={accentColor}
      />
      <Path
        d="M45.1637 22.4473C45.0302 22.1167 45.0649 21.7541 44.8401 21.4077C44.5515 20.963 44.0141 21.4232 44.1803 21.9268C46.5635 29.1474 51.2714 41.8005 45.2538 59.0754C45.0417 59.6843 45.639 60.0896 46.038 59.5831C47.6164 57.579 49.2178 54.4256 49.4896 51.5241C49.4975 51.4391 49.4855 51.3547 49.4678 51.2712C49.3424 50.6774 49.4134 49.2374 50.5538 47.2828C50.5742 47.2478 50.5979 47.2156 50.6237 47.1842C51.3406 46.3112 52.3404 43.4124 50.9069 38.3485C50.8899 38.2884 50.8641 38.2311 50.8306 38.1783C50.0704 36.9792 48.5981 34.287 48.3302 32.369C48.3214 32.3061 48.3238 32.2436 48.3336 32.1809C48.5144 31.0268 48.5159 28.3027 47.1723 25.8267C47.1478 25.7816 47.1176 25.7401 47.0834 25.7019C46.6014 25.1627 45.6198 23.848 45.1637 22.4473Z"
        fill={accentColor}
      />
      <Path
        d="M33.8905 21.8067C34.024 21.4761 33.9893 21.1135 34.2141 20.7671C34.5027 20.3223 35.0401 20.7826 34.8739 21.2861C32.4907 28.5068 27.7828 41.1599 33.8004 58.4348C34.0125 59.0437 33.4152 59.449 33.0162 58.9425C31.4378 56.9384 29.8364 53.785 29.5646 50.8835C29.5567 50.7984 29.5687 50.7141 29.5864 50.6305C29.7118 50.0368 29.6408 48.5967 28.5004 46.6422C28.48 46.6071 28.4563 46.5749 28.4305 46.5436C27.7136 45.6706 26.7138 42.7718 28.1473 37.7079C28.1643 37.6478 28.1901 37.5904 28.2236 37.5377C28.9838 36.3386 30.4561 33.6464 30.724 31.7284C30.7328 31.6655 30.7304 31.603 30.7206 31.5403C30.5398 30.3862 30.5383 27.6621 31.8819 25.186C31.9064 25.141 31.9366 25.0995 31.9708 25.0613C32.4528 24.5221 33.4344 23.2074 33.8905 21.8067Z"
        fill={accentColor}
      />
      <Path
        d="M38.6478 56.0414C37.1525 53.109 35.6635 47.1732 38.5875 42.206C38.8467 41.7657 39.4747 41.8494 39.6324 42.3354C41.0183 46.607 42.4168 53.77 39.4665 56.2351C39.1985 56.459 38.8065 56.3526 38.6478 56.0414Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M38.782 34.8204C38.422 34.3187 38.1801 33.3776 38.6201 32.2101C38.8082 31.7111 39.4538 31.8109 39.5499 32.3353C39.7576 33.4688 39.8045 34.7099 39.2005 34.9668C39.0487 35.0314 38.8782 34.9544 38.782 34.8204Z"
        fill={secondaryAccentColor}
      />
    </Svg>
  )
);

export const Running = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path d="M23.9214 50.9502L16.6143 50.8716" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" />
      <Path d="M29.2644 55.7427H25.1001" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" />
      <Path d="M21.9572 55.7427H19.6001" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" />
      <Path
        d="M42.3431 28.0658C39.1697 28.2925 32.9289 29.9835 31.054 24.4815C31.0276 24.4041 30.9888 24.3277 30.944 24.2593C29.9691 22.769 30.8837 21.0664 27.2322 22.4959C26.223 22.891 23.7715 24.1159 20.4091 32.9101C20.2993 33.1974 20.3678 33.5271 20.5849 33.7449L32.6951 45.8925L42.6951 55.0646C42.84 55.1976 43.0296 55.2713 43.2262 55.2713H57.9174C58.0344 55.2713 58.1495 55.2464 58.2534 55.1928C59.2992 54.6537 60.4871 53.6388 60.9182 52.2208C61.1874 51.3355 54.5975 44.107 53.6928 44.3012C53.4823 44.3464 53.1726 44.3792 52.9759 44.2919C48.8222 42.4488 47.3372 42.1319 43.0959 28.6046C42.993 28.2763 42.6863 28.0412 42.3431 28.0658Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="3.14286"
        strokeLinecap="round"
      />
      <Path d="M45.5284 31.0713L39.2427 32.3284" stroke={accentColor} strokeWidth="3.14286" strokeLinecap="round" />
      <Path d="M47.7287 35.7856L41.6001 37.1999" stroke={accentColor} strokeWidth="3.14286" strokeLinecap="round" />
      <Path d="M50.8712 39.8716L44.7427 41.2859" stroke={accentColor} strokeWidth="3.14286" strokeLinecap="round" />
      <Path d="M18.9712 37.8286L40.6933 58.8222C40.8398 58.9638 41.0356 59.0429 41.2393 59.0429H57.9426" stroke={secondaryAccentColor} strokeWidth="3.14286" strokeLinecap="round" />
      <Path d="M17.3999 47.7285H15.5142" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" />
      <Path d="M33.6641 58.9644H29.1855" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" />
      <Path d="M26.3572 59.043H22.2715" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" />
    </Svg>
  )
);

export const Yoga = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M37.0756 28.3438V35.5298V42.4695C37.0756 42.5896 37.1032 42.7082 37.1562 42.816L37.8436 44.2147C38.1003 44.7368 37.7203 45.347 37.1385 45.347H34.0116C33.7785 45.347 33.5575 45.4505 33.4082 45.6295L24.0036 56.9049C23.737 57.2245 23.7659 57.6965 24.0695 57.9813L24.4556 58.3434C24.7742 58.6421 25.2753 58.6238 25.5711 58.3025L34.3135 48.8087C34.4622 48.6472 34.6718 48.5553 34.8914 48.5553H39.8452H44.0611C44.1791 48.5553 44.2956 48.5818 44.4019 48.633L47.7918 50.2645C47.9108 50.3218 48.0135 50.4082 48.0903 50.5157L52.6057 56.8352C52.8191 57.1338 53.2107 57.245 53.5491 57.1029L54.053 56.8913C54.5169 56.6966 54.6808 56.1222 54.3895 55.712L49.8999 49.3894L47.9733 47.3361L45.9181 45.5011C45.8055 45.4005 45.7242 45.2696 45.684 45.124L44.3203 40.1826C44.2688 39.9961 44.2879 39.7973 44.374 39.624L46.0482 36.2539C46.2451 35.8574 46.7306 35.7018 47.1213 35.91L49.4837 37.1688C49.7399 37.3053 49.8999 37.572 49.8999 37.8622V46.6552C49.8999 46.846 49.9693 47.0302 50.0951 47.1736L50.2697 47.3725C50.7479 47.9172 51.6459 47.579 51.6459 46.8541V37.3906V36.3812C51.6459 36.0937 51.4889 35.8292 51.2365 35.6915L39.6838 29.3897C39.2832 29.1711 39.1524 28.6583 39.3994 28.2746L45.7106 18.4707C45.8979 18.1798 45.8204 17.7927 45.5356 17.5963C45.2502 17.3995 44.86 17.4654 44.655 17.7451L37.2276 27.8794C37.1288 28.0141 37.0756 28.1768 37.0756 28.3438Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M51.5785 27.3001C51.5785 29.5176 49.8856 31.3072 47.807 31.3072C45.7285 31.3072 44.0356 29.5176 44.0356 27.3001C44.0356 25.0825 45.7285 23.2929 47.807 23.2929C49.8856 23.2929 51.5785 25.0825 51.5785 27.3001Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="0.157143"
      />    </Svg>
  )
);

export const Strength = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40" cy="39.9971" r="27.5" fill={accentColor} />
      <Path
        d="M26.6416 51.6257V32.2001C26.6416 31.7662 26.9934 31.4144 27.4273 31.4144H32.0291C32.463 31.4144 32.8148 31.7662 32.8148 32.2001V38.0706C32.8148 38.5046 33.1665 38.8564 33.6005 38.8564H47.0383C47.4723 38.8564 47.824 38.5046 47.824 38.0706V31.6685C47.824 31.2346 48.1758 30.8828 48.6097 30.8828H52.7273C53.1613 30.8828 53.513 31.2346 53.513 31.6685V51.6257C53.513 52.0596 53.1613 52.4114 52.7273 52.4114H48.6097C48.1758 52.4114 47.824 52.0596 47.824 51.6257V46.1538C47.824 45.7199 47.4723 45.3681 47.0383 45.3681H33.6005C33.1665 45.3681 32.8148 45.7199 32.8148 46.1538V51.6257C32.8148 52.0596 32.463 52.4114 32.0291 52.4114H27.4273C26.9934 52.4114 26.6416 52.0596 26.6416 51.6257Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x="19.1772" y="35.6757" width="5.18571" height="13.5143" rx="1.49286" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.157143" strokeLinejoin="round" />
      <Rect x="55.7915" y="35.6757" width="5.18571" height="13.5143" rx="1.49286" fill={secondaryAccentColor} stroke={secondaryAccentColor} strokeWidth="0.157143" strokeLinejoin="round" />
    </Svg>
  )
);

export const Biking = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M35.5484 45.6072C35.5484 50.5568 31.6762 54.5644 26.9055 54.5644C22.1348 54.5644 18.2627 50.5568 18.2627 45.6072C18.2627 40.6577 22.1348 36.6501 26.9055 36.6501C31.6762 36.6501 35.5484 40.6577 35.5484 45.6072Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="0.157143"
      />
      <Path
        d="M63.2056 45.6072C63.2056 50.5568 59.3335 54.5644 54.5627 54.5644C49.792 54.5644 45.9199 50.5568 45.9199 45.6072C45.9199 40.6577 49.792 36.6501 54.5627 36.6501C59.3335 36.6501 63.2056 40.6577 63.2056 45.6072Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="0.157143"
      />
      <Path
        d="M26.8271 45.5288L32.8104 30.4141M39.2108 27.1431H34.6393C34.317 27.1431 34.0274 27.3399 33.9087 27.6396L32.8104 30.4141M32.8104 30.4141L45.4027 33.5724M32.8104 30.4141L38.9968 43.2788C39.1276 43.551 39.4029 43.724 39.7049 43.724H52.1017C52.7658 43.724 53.1304 42.9512 52.7081 42.4387L45.4027 33.5724M45.4027 33.5724L44.3055 31.5787C44.0173 31.055 44.3962 30.4141 44.9939 30.4141H52.2455C53.1814 30.4141 53.3332 31.7569 52.4209 31.9658L45.4027 33.5724Z"
        stroke={secondaryAccentColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Walking = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M28.0287 44.6113L37.6558 42.6122C38.1874 42.5018 38.6569 42.9631 38.5563 43.5C36.1712 56.228 29.4231 49.5676 27.491 45.624C27.2817 45.1969 27.5608 44.7084 28.0287 44.6113Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Path
        d="M37.0428 38.6948L26.9874 40.6216C26.5257 40.71 26.0949 40.3406 26.0709 39.8701C24.3309 5.76143 36.1859 26.5017 37.6752 37.843C37.7287 38.2499 37.4456 38.6176 37.0428 38.6948Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Path
        d="M45.548 55.05L55.3136 56.0558C55.8534 56.1114 56.1762 56.6943 55.9321 57.1771C50.1365 68.6415 45.5135 60.2157 44.7527 55.8549C44.6704 55.3832 45.0728 55.001 45.548 55.05Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Path
        d="M55.6151 52.318L45.4595 51.113C44.9927 51.0577 44.6819 50.5738 44.7886 50.1166C52.5334 16.9364 58.1598 40.3869 56.4563 51.695C56.3952 52.1004 56.0225 52.3663 55.6151 52.318Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const RestDay = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M24.8981 23.8428H34.524C35.2441 23.8428 35.5849 24.7308 35.0496 25.2125L23.9506 35.2016C23.4154 35.6833 23.7562 36.5713 24.4762 36.5713H33.9899"
        stroke={secondaryAccentColor}
        strokeWidth="3.61429"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M38.5742 38.1428H46.0676C46.7783 38.1428 47.1238 39.0113 46.6073 39.4995L38.0067 47.629C37.4902 48.1172 37.8357 48.9857 38.5464 48.9857H45.9487"
        stroke={secondaryAccentColor}
        strokeWidth="3.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M49.7715 51.3428H55.6153C56.3673 51.3428 56.6896 52.2977 56.0914 52.7535L49.8945 57.4749C49.2963 57.9307 49.6186 58.8856 50.3707 58.8856H56.1358"
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
);

export const Protected = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="39.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M39.9523 23.1245C37.9399 26.8959 32.2206 32.9558 22.6318 31.6038C21.8635 36.282 25.1764 53.6033 40.0124 60.7937C40.1881 60.8789 40.3912 60.8794 40.5633 60.7873C46.5408 57.5915 57.6391 47.6941 56.5548 31.9372C56.5425 31.7577 56.3823 31.6235 56.2033 31.6421C52.0916 32.0698 43.8564 30.913 40.5784 23.1523C40.4685 22.8921 40.0852 22.8753 39.9523 23.1245Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M22.6312 31.6037C32.2204 32.9561 37.9398 26.8959 39.9523 23.1245C40.0852 22.8753 40.4685 22.8921 40.5784 23.1523C43.8564 30.913 52.0916 32.0698 56.2033 31.6421C56.3823 31.6235 56.5425 31.7577 56.5548 31.9372C57.6391 47.6941 46.5408 57.5915 40.5633 60.7873C40.3912 60.8794 40.1881 60.8789 40.0124 60.7937C25.1764 53.6033 21.8635 36.2818 22.6318 31.6037"
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Path
        d="M32.2715 43.7214L39.2869 47.6866C39.4122 47.7575 39.5697 47.7341 39.669 47.6299L49.1643 37.6714"
        stroke={accentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Unprotected = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="39.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M39.9508 23.1248C37.9384 26.8961 32.2192 32.9561 22.6303 31.604C21.862 36.2822 25.175 53.6036 40.0109 60.794C40.1866 60.8791 40.3897 60.8796 40.5619 60.7876C46.5394 57.5917 57.6377 47.6943 56.5534 31.9375C56.541 31.7579 56.3808 31.6237 56.2019 31.6423C52.0901 32.0701 43.8549 30.9132 40.5769 23.1525C40.467 22.8923 40.0838 22.8756 39.9508 23.1248Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M22.6297 31.6039C32.2189 32.9563 37.9384 26.8962 39.9508 23.1248C40.0838 22.8756 40.467 22.8923 40.5769 23.1525C43.8549 30.9132 52.0901 32.0701 56.2018 31.6423C56.3808 31.6237 56.541 31.7579 56.5534 31.9375C57.6377 47.6943 46.5394 57.5917 40.5619 60.7876C40.3897 60.8796 40.1866 60.8791 40.0109 60.794C25.1749 53.6035 21.862 36.282 22.6303 31.6039"
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Path
        d="M34.7852 37.8281L45.3923 47.7281"
        stroke={accentColor}
        strokeWidth="3.14286"
        strokeLinecap="round"
      />
      <Path
        d="M44.8411 37.8281L34.3125 47.7281"
        stroke={accentColor}
        strokeWidth="3.14286"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const HighLibido = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M58.9049 45.6965C55.5853 26.1582 29.0485 21.7476 22.9977 45.6667C22.9478 45.8638 23.0954 46.0632 23.2987 46.0632L58.598 46.0631C58.7905 46.0631 58.9372 45.8863 58.9049 45.6965Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="7.85714"
        strokeLinecap="round"
      />
      <Path d="M48.7017 26.9873L47.5716 28.7427" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M53.2588 29.3445L52.1288 31.0999" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M57.0229 32.8391L55.4288 34.1871" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M59.7192 36.1311L57.9255 37.1992" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M61.4648 40.4775L59.6711 41.5457" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M62.6401 45.4878L60.6142 45.9918" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M43.3936 25.4143L43.0852 27.4791" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M37.5737 25.8857L38.3403 27.8276" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M32.252 27.3L33.4878 28.9826" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M27.1636 30.2856L28.8863 31.4649" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path
        d="M54.7997 39.4002C53.3338 40.293 52.0129 41.0389 50.8242 41.6692C45.9099 44.68 43.5278 46.9429 42.0636 47.2989C41.1102 47.6325 40.4777 47.312 41.3762 46.3028C42.3536 45.0704 45.0043 44.755 50.8242 41.6692C51.9976 40.9502 53.3155 40.1886 54.7997 39.4002Z"
        fill={secondaryAccentColor}
        stroke={accentColor}
        strokeWidth="1.57143"
      />
      <Path d="M18.6572 43.8L20.6215 44.5072" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M20.543 39.2429L22.5073 39.9501" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M22.8999 34.8428L24.8642 35.5499" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
    </Svg>
  )
);

export const LowLibido = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Ellipse cx="40.5" cy="40.3279" rx="27.5" ry="27.3279" fill={accentColor} />
      <Path
        d="M58.9045 45.4898C55.5831 26.0767 29.0504 21.6947 22.9984 45.4599C22.9482 45.6571 23.0958 45.8567 23.2993 45.8567L58.5976 45.8567C58.7903 45.8567 58.937 45.6797 58.9045 45.4898Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="7.85714"
        strokeLinecap="round"
      />
      <Path d="M48.7017 26.9001L47.5716 28.6446" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M53.2588 29.2424L52.1288 30.9869" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M57.0229 32.7153L55.4288 34.0549" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M59.7192 35.9866L57.9255 37.048" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M61.4648 40.3059L59.6711 41.3673" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M62.6401 45.2847L60.6142 45.7855" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
      <Path d="M43.3936 25.3369L43.0852 27.3888" stroke={accentColor} strokeWidth="1.1" strokeLinecap="round" />
    </Svg>
  )
);

export const Orgasm = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Ellipse cx="40.5" cy="40.5" rx="27.5" ry="27.5" fill={accentColor} />
      <Path
        d="M58.2706 41.3814L41.2898 62.2874C41.1667 62.439 40.9367 62.4428 40.8086 62.2954L22.5185 41.2385C22.4966 41.2132 22.4784 41.1838 22.4656 41.1529C17.3777 28.8995 27.5508 18.0536 40.84 36.0821C40.9824 36.2752 41.2935 36.2497 41.3992 36.0343C49.2269 20.0726 65.1815 25.2051 58.3161 41.3056C58.3047 41.3324 58.289 41.3588 58.2706 41.3814Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="0.785714"
        strokeLinecap="round"
      />
      <Path
        d="M33.5859 44.8215L40.6014 48.7867C40.7267 48.8576 40.8841 48.8342 40.9835 48.73L50.4788 38.7715"
        stroke={accentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const NoOrgasm = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M58.2706 41.3814L41.2898 62.2874C41.1667 62.439 40.9367 62.4428 40.8086 62.2954L22.5185 41.2385C22.4966 41.2132 22.4784 41.1838 22.4656 41.1529C17.3777 28.8995 27.5508 18.0536 40.84 36.0821C40.9824 36.2752 41.2935 36.2497 41.3992 36.0343C49.2269 20.0726 65.1815 25.2051 58.3161 41.3056C58.3047 41.3324 58.289 41.3588 58.2706 41.3814Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="0.785714"
        strokeLinecap="round"
      />
      <Path
        d="M35.4712 39.3999L46.0783 49.2999"
        stroke={accentColor}
        strokeWidth="3.14286"
        strokeLinecap="round"
      />
      <Path
        d="M45.5286 39.3999L35 49.2999"
        stroke={accentColor}
        strokeWidth="3.14286"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const Masturbation = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M39.2642 37.7377H24.8858M24.8858 37.7377H22.1504C22.0705 37.7377 21.9933 37.7672 21.9382 37.825C21.2004 38.5991 20.2987 40.5864 21.9332 43.115C21.9898 43.2025 22.0884 43.2551 22.1926 43.2551H39.2642H24.9887C24.9219 43.2551 24.8564 43.2757 24.8047 43.3181C24.0384 43.945 23.0886 45.65 24.7919 48.0311C24.8495 48.1117 24.9441 48.1595 25.0432 48.1595H39.2642H29.0643C29.003 48.1595 28.9433 48.1768 28.893 48.2118C27.824 48.9564 26.4489 50.7994 28.8853 52.6924C28.939 52.7341 29.0024 52.7573 29.0705 52.7573C31.1734 52.7573 39.4655 52.7573 56.8645 52.7573C56.945 52.7573 57.0229 52.7284 57.0801 52.6718C59.3326 50.444 62.3462 44.0421 56.9919 35.4899L50.7998 26.4209C50.7886 26.4046 50.7762 26.3896 50.7621 26.3757C49.5654 25.1978 47.2208 23.9663 47.1887 28.2483C47.1883 28.305 47.2037 28.3634 47.2328 28.412L49.8691 32.8334M24.8858 37.7377C22.6236 34.3431 23.9032 33.0663 24.8537 32.8406C24.8752 32.8355 24.897 32.8334 24.9191 32.8334H39.2642H43.8386H49.8691M51.6814 42.5399C50.4231 41.2341 48.4963 37.8346 50.6676 34.5357C50.7357 34.4323 50.7422 34.2975 50.6787 34.1911L49.8691 32.8334"
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Path
        d="M55.5686 51.0844L49.3987 57.9709C49.2746 58.1094 49.058 58.1105 48.9326 57.9731L42.6286 51.0705C42.5859 51.0238 42.5579 50.9639 42.5499 50.901C42.0162 46.7255 45.2881 44.5251 49.0423 49.5838C51.3325 46.2354 55.5967 44.1279 55.6484 50.8706C55.649 50.948 55.6203 51.0267 55.5686 51.0844Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
    </Svg>
  )
);

export const RestDaySex = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path d="M42.2284 47.7285L37.5142 51.4214" stroke={accentColor} strokeWidth="1.57143" strokeLinecap="round" />
      <Path
        d="M39.9046 21.6253C40.2097 21.1161 40.9476 21.1161 41.2526 21.6253L59.0969 51.4105C59.4107 51.9342 59.0334 52.6 58.4229 52.6H22.7343C22.1238 52.6 21.7466 51.9342 22.0603 51.4105L39.9046 21.6253Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.57143"
      />
      <Path
        d="M43.5692 32.1714H37.9068C37.7055 32.1714 37.5561 32.3581 37.6002 32.5545L40.0411 43.4274C40.226 44.2507 41.4017 44.2435 41.5764 43.418L43.8767 32.5508C43.9181 32.3553 43.769 32.1714 43.5692 32.1714Z"
        fill={accentColor}
        stroke={accentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
      />
      <Circle cx="40.6569" cy="49.3" r="2.35714" fill={accentColor} />
    </Svg>
  )
);

export const PartyNight = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M29.9322 33.359C27.593 30.9592 28.684 29.7723 29.9322 29.2418C29.2756 24.0013 31.6079 24.6094 32.8562 25.5685C33.2151 20.6864 36.5324 20.8701 37.3189 22.0333C39.4221 17.503 42.6367 20.3803 43.1667 22.0333C47.1063 20.7599 47.6809 23.5434 47.4757 25.0943C50.9228 25.0943 50.5536 27.5431 49.938 28.7675C52.4823 30.9224 50.9981 32.7264 49.938 33.359M29.9322 33.359H34.7541H40.3454H45.1417H49.938M29.9322 33.359V42.8481L29.9322 57.7858H37.3189H40.3454H43.2181H49.938V33.359"
        stroke={secondaryAccentColor}
        strokeWidth="3.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M35 40.6572V50.8715" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M39.5571 40.6572V50.8715" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M44.5859 40.6572V50.8715" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M50.7144 39.9C60.858 39.2259 59.8333 50.6854 50.7144 49.8888" stroke={secondaryAccentColor} strokeWidth="3.14286" strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M29.9322 33.3588C27.729 31.0985 28.5687 29.9142 29.7167 29.3409C29.8424 29.2781 29.9191 29.14 29.9041 29.0003C29.4306 24.6161 31.7358 25.7495 33.1173 26.7188C33.322 26.8624 33.6119 26.7283 33.6422 26.48C34.0867 22.8488 35.8995 23.6575 36.8508 24.6626C37.0189 24.8402 37.3335 24.8093 37.4465 24.5926C39.3449 20.9533 41.2357 22.3623 41.8821 23.8624C41.9509 24.022 42.1287 24.1128 42.295 24.0619C45.6421 23.0371 45.936 23.9631 45.8062 25.2934C45.7878 25.4824 45.9342 25.6495 46.1241 25.6549C49.0155 25.7373 49.1768 26.8318 48.6978 27.9401C48.6402 28.0734 48.672 28.2304 48.7799 28.3274C51.1295 30.4392 50.9714 32.7421 49.938 33.3588M29.9322 33.3588H34.7541H40.3454H45.1417H49.938M29.9322 33.3588V42.8479L29.9322 57.4713C29.9322 57.6449 30.0729 57.7856 30.2465 57.7856H37.3189H40.3454H43.2181H49.6237C49.7973 57.7856 49.938 57.6449 49.938 57.4713V33.3588"
        stroke={secondaryAccentColor}
        strokeWidth="3.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M35 40.6572V50.8715" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M39.5571 40.6572V50.8715" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M44.5859 40.6572V50.8715" stroke={secondaryAccentColor} strokeWidth="2.35714" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M50.7144 39.9C60.858 39.2259 59.8333 50.6854 50.7144 49.8888" stroke={secondaryAccentColor} strokeWidth="3.14286" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
);

export const LightDrinking = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M41.0847 41.0655L27.1158 27.8857C27.0124 27.7881 27.0814 27.6143 27.2237 27.6143H53.7989C53.9378 27.6143 54.0084 27.7814 53.9115 27.881L41.0847 41.0655ZM41.0847 41.0655V58.7966M41.0847 58.7966L34.6205 62.0453C34.4725 62.1197 34.5254 62.3428 34.691 62.3428H47.2412C47.4055 62.3428 47.4596 62.1224 47.3139 62.0464L41.0847 58.7966Z"
        stroke={secondaryAccentColor}
        strokeWidth="2.35714"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M41.3984 37.1745C41.2174 37.3698 40.9108 37.3765 40.7214 37.1894L36.0169 32.5421C35.7207 32.2495 35.9215 31.7446 36.3378 31.7354L45.5377 31.5329C45.954 31.5237 46.1769 32.0193 45.8939 32.3247L41.3984 37.1745Z"
        fill={secondaryAccentColor}
      />
    </Svg>
  )
);

export const Hangover = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M58.1696 49.4494C58.8172 50.3533 58.8263 50.7438 58.8248 50.8117C58.7832 50.8609 58.5311 51.1293 57.5053 51.2511C56.3788 51.3849 54.7486 51.2776 52.6836 50.8853C48.5775 50.1053 43.097 48.2668 37.2418 45.5301C31.3866 42.7934 26.361 39.7214 22.9714 36.998C21.2668 35.6283 20.0484 34.4042 19.3372 33.4116C18.6896 32.5076 18.6805 32.1171 18.682 32.0492C18.7237 32 18.9757 31.7317 20.0016 31.6098C21.128 31.4761 22.7582 31.5834 24.8233 31.9756C28.9293 32.7556 34.4098 34.5941 40.265 37.3308C46.1202 40.0675 51.1459 43.1395 54.5354 45.8629C56.2401 47.2326 57.4585 48.4567 58.1696 49.4494Z"
        stroke={secondaryAccentColor}
        strokeWidth="3.14286"
        strokeLinejoin="round"
      />
      <Path
        d="M22.3013 51.1745C21.2835 51.0831 21.0209 50.8265 20.9751 50.7765C20.9727 50.7046 20.979 50.3133 21.5997 49.4003C22.2886 48.3869 23.4796 47.1277 25.1531 45.7093C28.4808 42.889 33.4362 39.6736 39.2282 36.7698C45.0202 33.866 50.4582 31.8707 54.5463 30.9732C56.6023 30.5218 58.2303 30.3677 59.3602 30.4692C60.3781 30.5607 60.6407 30.8172 60.6865 30.8673C60.6889 30.9391 60.6826 31.3304 60.0619 32.2434C59.373 33.2568 58.182 34.516 56.5085 35.9344C53.1808 38.7547 48.2254 41.9701 42.4334 44.8739C36.6413 47.7778 31.2034 49.773 27.1153 50.6706C25.0593 51.122 23.4313 51.2761 22.3013 51.1745Z"
        stroke={secondaryAccentColor}
        strokeWidth="3.14286"
        strokeLinejoin="round"
      />
      <Path
        d="M26.0931 22.654C26.0992 22.3426 26.4967 22.2157 26.6649 22.4714L27.6792 24.0129C27.7542 24.127 27.8947 24.1761 28.0259 24.1343L29.7549 23.5822C30.0416 23.4907 30.2694 23.819 30.0913 24.067L28.9813 25.613C28.9032 25.7219 28.8991 25.8671 28.971 25.9765L30.0084 27.5533C30.1751 27.8065 29.9183 28.1365 29.6355 28.0325L27.9649 27.418C27.8343 27.37 27.6859 27.4173 27.6023 27.5338L26.5331 29.0231C26.3521 29.2752 25.9655 29.1506 25.9715 28.8422L26.0092 26.9222C26.0118 26.789 25.9323 26.6704 25.8102 26.6255L24.0759 25.9877C23.7977 25.8853 23.8154 25.4786 24.1021 25.3871L25.831 24.8351C25.9622 24.7932 26.0535 24.67 26.0562 24.5311L26.0931 22.654Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M61.4717 38.9257C61.4701 38.6062 61.8819 38.4747 62.0479 38.7417L62.395 39.3C62.4686 39.4184 62.612 39.4707 62.7459 39.4279L63.3812 39.2251C63.6611 39.1357 63.8889 39.4483 63.7258 39.698L63.2838 40.3745C63.215 40.4798 63.2125 40.6149 63.2774 40.7194L63.6918 41.386C63.8536 41.6463 63.5821 41.9717 63.3016 41.8534L62.7682 41.6284C62.6303 41.5703 62.4688 41.6219 62.3844 41.751L62.0581 42.2505C61.8865 42.5131 61.4899 42.4011 61.4883 42.0895L61.4841 41.292C61.4834 41.167 61.4106 41.056 61.298 41.0085L60.5755 40.7038C60.3089 40.5914 60.3348 40.1978 60.6147 40.1084L61.25 39.9056C61.384 39.8628 61.476 39.7354 61.4752 39.5936L61.4717 38.9257Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M43.2092 53.8031C43.4024 53.5677 43.7822 53.7377 43.7568 54.0481L43.6034 55.9232C43.5921 56.0618 43.6698 56.1943 43.7952 56.2504L45.4581 56.9943C45.7333 57.1174 45.708 57.5258 45.4208 57.5962L43.6373 58.0333C43.5109 58.0643 43.4192 58.1743 43.4083 58.3081L43.2519 60.219C43.2267 60.527 42.8313 60.6096 42.6771 60.3391L41.7616 58.7325C41.6907 58.6082 41.5496 58.545 41.4158 58.5778L39.6871 59.0015C39.396 59.0729 39.1769 58.7154 39.3686 58.4818L40.5579 57.033C40.6412 56.9315 40.6521 56.7854 40.5851 56.6679L39.6406 55.0104C39.4885 54.7435 39.7483 54.4401 40.0236 54.5632L41.6864 55.307C41.8118 55.3631 41.956 55.3299 42.0422 55.2248L43.2092 53.8031Z"
        fill={secondaryAccentColor}
      />
      <Ellipse cx="18.5785" cy="43.9572" rx="1.17857" ry="1.1" fill={secondaryAccentColor} />
      <Circle cx="31.0715" cy="54.3286" r="1.41429" fill={secondaryAccentColor} />
      <Ellipse cx="48.907" cy="27.2214" rx="1.33571" ry="1.49286" fill={secondaryAccentColor} />
    </Svg>
  )
);

export const Vacation = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.5" r="27.5" fill={accentColor} />
      <Path
        d="M27.8929 43.9146H19M31.5453 34.7041L25.5109 29.1461M39.9618 31.8457V22M49.3311 34.7041L54.8891 29.1461M52.1895 43.9146H61.2412"
        stroke={secondaryAccentColor}
        strokeWidth="1.58801"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M29.6744 53.6816C29.6744 53.5876 29.7118 53.4974 29.7782 53.4309C29.8447 53.3645 29.9349 53.3271 30.0289 53.3271H49.8828C49.9768 53.3271 50.067 53.3645 50.1335 53.4309C50.2 53.4974 50.2373 53.5876 50.2373 53.6816C50.2373 53.7757 50.2 53.8658 50.1335 53.9323C50.067 53.9988 49.9768 54.0362 49.8828 54.0362H30.0289C29.9349 54.0362 29.8447 53.9988 29.7782 53.9323C29.7118 53.8658 29.6744 53.7757 29.6744 53.6816ZM33.9288 57.936C33.9288 57.842 33.9662 57.7518 34.0326 57.6853C34.0991 57.6189 34.1893 57.5815 34.2833 57.5815H45.6284C45.7224 57.5815 45.8126 57.6189 45.8791 57.6853C45.9456 57.7518 45.9829 57.842 45.9829 57.936C45.9829 58.0301 45.9456 58.1202 45.8791 58.1867C45.8126 58.2532 45.7224 58.2906 45.6284 58.2906H34.2833C34.1893 58.2906 34.0991 58.2532 34.0326 58.1867C33.9662 58.1202 33.9288 58.0301 33.9288 57.936Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.41813"
      />
      <Path
        d="M31.5667 49.0737H32.7647L32.1883 48.0235C31.4477 46.6739 31.0713 45.1546 31.0964 43.6152C31.1214 42.0759 31.547 40.5696 32.3312 39.2448C33.1154 37.9199 34.2311 36.8221 35.5686 36.0596C36.906 35.2971 38.419 34.8961 39.9585 34.8961C41.4981 34.8961 43.0111 35.2971 44.3485 36.0596C45.6859 36.8221 46.8017 37.9199 47.5859 39.2448C48.3701 40.5696 48.7956 42.0759 48.8207 43.6152C48.8457 45.1546 48.4694 46.6739 47.7287 48.0235L47.1524 49.0737H48.3503H54.1392C54.2332 49.0737 54.3234 49.1111 54.3898 49.1776C54.4563 49.2441 54.4937 49.3342 54.4937 49.4283C54.4937 49.5223 54.4563 49.6125 54.3898 49.679C54.3234 49.7455 54.2332 49.7828 54.1392 49.7828H25.7765C25.6825 49.7828 25.5923 49.7455 25.5258 49.679C25.4593 49.6125 25.422 49.5223 25.422 49.4283C25.422 49.3342 25.4593 49.2441 25.5258 49.1776C25.5923 49.1111 25.6825 49.0737 25.7765 49.0737H31.5667Z"
        fill={secondaryAccentColor}
        stroke={secondaryAccentColor}
        strokeWidth="1.41813"
      />
    </Svg>
  )
);

export const WorkTrip = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
    <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">
      <Circle cx="40" cy="40" r="39" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
      <Circle cx="40.5" cy="40.4971" r="27.5" fill={accentColor} />
      <Path
        d="M25.6002 55.2014C24.6101 55.2014 23.7623 54.8486 23.0566 54.143C22.351 53.4373 21.9988 52.5901 22 51.6013V31.8004C22 30.8104 22.3528 29.9626 23.0584 29.2569C23.7641 28.5513 24.6113 28.1991 25.6002 28.2003H32.8004V24.6002C32.8004 23.6101 33.1533 22.7623 33.8589 22.0566C34.5645 21.351 35.4118 20.9988 36.4006 21H43.6009C44.5909 21 45.4388 21.3528 46.1444 22.0584C46.85 22.7641 47.2022 23.6113 47.201 24.6002V28.2003H54.4013C55.3914 28.2003 56.2392 28.5531 56.9448 29.2587C57.6505 29.9644 58.0027 30.8116 58.0015 31.8004V51.6013C58.0015 52.5913 57.6487 53.4391 56.943 54.1448C56.2374 54.8504 55.3902 55.2026 54.4013 55.2014H25.6002ZM36.4006 28.2003H43.6009V24.6002H36.4006V28.2003Z"
        fill={secondaryAccentColor}
      />
      <Path
        d="M45.0742 30.1638C55.711 30.1638 55.711 29.8366 55.711 38.1824"
        stroke={accentColor}
        strokeWidth="1.63643"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M35.2539 53.5647C24.6171 53.5647 24.6171 53.8919 24.6171 45.5462"
        stroke={accentColor}
        strokeWidth="1.63643"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
);

export const Template = createIcon(
  ({ fillColor, strokeColor, accentColor, secondaryAccentColor, width, height }) => (
  <Svg width={width} height={height} viewBox="0 0 91 90" fill="none">

  </Svg>
  )
);