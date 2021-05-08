import * as React from 'react';
import Svg, {Path, Rect, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={120} height={120} viewBox="0 0 120 120" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 26.5284V65.2632H88.8421V26.5284C88.8421 11.8989 76.0926 0 60.4211 0C44.7495 0 32 11.8989 32 26.5284ZM80.4211 26.5284V56.8421H40.4211V26.5284C40.4211 16.5432 49.3937 8.42105 60.4211 8.42105C71.4484 8.42105 80.4211 16.5432 80.4211 26.5284Z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M32 65.2632H31V66.2632H32V65.2632ZM88.8421 65.2632V66.2632H89.8421V65.2632H88.8421ZM80.4211 56.8421V57.8421H81.4211V56.8421H80.4211ZM40.4211 56.8421H39.4211V57.8421H40.4211V56.8421ZM33 65.2632V26.5284H31V65.2632H33ZM88.8421 64.2632H32V66.2632H88.8421V64.2632ZM87.8421 26.5284V65.2632H89.8421V26.5284H87.8421ZM60.4211 1C75.6064 1 87.8421 12.5151 87.8421 26.5284H89.8421C89.8421 11.2828 76.5789 -1 60.4211 -1V1ZM33 26.5284C33 12.5151 45.2357 1 60.4211 1V-1C44.2633 -1 31 11.2828 31 26.5284H33ZM81.4211 56.8421V26.5284H79.4211V56.8421H81.4211ZM40.4211 57.8421H80.4211V55.8421H40.4211V57.8421ZM39.4211 26.5284V56.8421H41.4211V26.5284H39.4211ZM60.4211 7.42105C48.9373 7.42105 39.4211 15.8996 39.4211 26.5284H41.4211C41.4211 17.1867 49.8501 9.42105 60.4211 9.42105V7.42105ZM81.4211 26.5284C81.4211 15.8996 71.9048 7.42105 60.4211 7.42105V9.42105C70.992 9.42105 79.4211 17.1867 79.4211 26.5284H81.4211Z"
        fill="#C7CAC7"
      />
      <Rect
        x={16}
        y={53}
        width={88.4211}
        height={67}
        fill="url(#paint1_linear)"
      />
      <Rect
        opacity={0.2}
        x={60.2104}
        y={52.6316}
        width={44.2105}
        height={67}
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88.8124 117.895L102.316 104.392V96.842H90.5556L69.5029 117.895H88.8124Z"
        fill="url(#paint2_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1055 96.842V112.813L34.076 96.842H18.1055Z"
        fill="#1D1E2C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.5497 117.895L84.6023 96.842H65.2929L44.2402 117.895H63.5497Z"
        fill="#1D1E2C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.3392 96.842H40.0297L19.5939 117.278C19.1834 117.688 18.6444 117.895 18.1055 117.895H38.2865L59.3392 96.842Z"
        fill="url(#paint3_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M102.316 117.895V110.345L94.7661 117.895H102.316Z"
        fill="#1D1E2C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.2108 101.924L44.2402 117.895H60.2108V101.924Z"
        fill="#1D1E2C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M94 13.5172C94.0358 9.57962 95.1454 6.50904 97.3289 4.30542C99.5123 2.1018 102.519 1 106.349 1C109.964 1 112.81 1.83086 114.886 3.49261C116.962 5.15436 118 7.48439 118 10.4828C118 12.3974 117.57 13.9869 116.711 15.2512C115.852 16.5156 114.6 17.8703 112.953 19.3153C111.521 20.6158 110.465 21.7447 109.785 22.702C109.105 23.6593 108.765 24.8062 108.765 26.1429H101.624C101.624 24.6979 101.83 23.4335 102.242 22.3498C102.653 21.266 103.154 20.3719 103.745 19.6675C104.336 18.9631 105.096 18.1593 106.027 17.2562C107.065 16.2808 107.834 15.4228 108.336 14.6823C108.837 13.9417 109.087 13.0657 109.087 12.0542C109.087 9.85056 107.87 8.74877 105.436 8.74877C102.752 8.74877 101.391 10.3563 101.356 13.5714L94 13.5172ZM105.97 29.5714C107.494 29.5714 108.737 30.0471 109.699 30.9983C110.662 31.9496 111.143 33.1784 111.143 34.6846C111.143 36.1908 110.662 37.4294 109.699 38.4005C108.737 39.3716 107.494 39.8571 105.97 39.8571C104.486 39.8571 103.263 39.3716 102.301 38.4005C101.338 37.4294 100.857 36.1908 100.857 34.6846C100.857 33.1784 101.328 31.9496 102.271 30.9983C103.213 30.0471 104.446 29.5714 105.97 29.5714Z"
        fill="url(#paint4_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={32}
          y1={0}
          x2={32}
          y2={65.2632}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E5E7E5" />
          <Stop offset={1} stopColor="#C7CAC7" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={104.421}
          y1={53}
          x2={16}
          y2={53}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6D92C9" />
          <Stop offset={1} stopColor="#3B5998" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={69.5029}
          y1={117.895}
          x2={102.316}
          y2={117.895}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFCD02" />
          <Stop offset={1} stopColor="#FFDB4C" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1={18.1055}
          y1={117.895}
          x2={59.3392}
          y2={117.895}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFCD02" />
          <Stop offset={1} stopColor="#FFDB4C" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1={94}
          y1={1}
          x2={94}
          y2={39.8571}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FF9B69" />
          <Stop offset={1} stopColor="#FF6238" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgIconForgotPW = React.memo(SvgComponent);
export default SvgIconForgotPW;
