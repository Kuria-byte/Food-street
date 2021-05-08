import * as React from 'react';
import Svg, {Path, Rect, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={120} height={120} viewBox="0 0 120 120" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 26.5284V65.2632H72.8421V26.5284C72.8421 11.8989 60.0926 0 44.4211 0C28.7495 0 16 11.8989 16 26.5284ZM64.4211 26.5284V56.8421H24.4211V26.5284C24.4211 16.5432 33.3937 8.42105 44.4211 8.42105C55.4484 8.42105 64.4211 16.5432 64.4211 26.5284Z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M16 65.2632H15V66.2632H16V65.2632ZM72.8421 65.2632V66.2632H73.8421V65.2632H72.8421ZM64.4211 56.8421V57.8421H65.4211V56.8421H64.4211ZM24.4211 56.8421H23.4211V57.8421H24.4211V56.8421ZM17 65.2632V26.5284H15V65.2632H17ZM72.8421 64.2632H16V66.2632H72.8421V64.2632ZM71.8421 26.5284V65.2632H73.8421V26.5284H71.8421ZM44.4211 1C59.6064 1 71.8421 12.5151 71.8421 26.5284H73.8421C73.8421 11.2828 60.5789 -1 44.4211 -1V1ZM17 26.5284C17 12.5151 29.2357 1 44.4211 1V-1C28.2633 -1 15 11.2828 15 26.5284H17ZM65.4211 56.8421V26.5284H63.4211V56.8421H65.4211ZM24.4211 57.8421H64.4211V55.8421H24.4211V57.8421ZM23.4211 26.5284V56.8421H25.4211V26.5284H23.4211ZM44.4211 7.42105C32.9373 7.42105 23.4211 15.8996 23.4211 26.5284H25.4211C25.4211 17.1867 33.8501 9.42105 44.4211 9.42105V7.42105ZM65.4211 26.5284C65.4211 15.8996 55.9048 7.42105 44.4211 7.42105V9.42105C54.992 9.42105 63.4211 17.1867 63.4211 26.5284H65.4211Z"
        fill="#C7CAC7"
      />
      <Rect y={53} width={88.4211} height={67} fill="url(#paint1_linear)" />
      <Rect
        opacity={0.2}
        x={44.2104}
        y={52.6316}
        width={44.2105}
        height={67}
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72.8124 117.895L86.3156 104.392V96.842H74.5556L53.5029 117.895H72.8124Z"
        fill="url(#paint2_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.10547 96.842V112.813L18.076 96.842H2.10547Z"
        fill="#1D1E2C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.5497 117.895L68.6023 96.842H49.2929L28.2402 117.895H47.5497Z"
        fill="#1D1E2C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.3392 96.842H24.0297L3.59389 117.278C3.18336 117.688 2.64442 117.895 2.10547 117.895H22.2865L43.3392 96.842Z"
        fill="url(#paint3_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.3156 117.895V110.345L78.7661 117.895H86.3156Z"
        fill="#1D1E2C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.2108 101.924L28.2402 117.895H44.2108V101.924Z"
        fill="#1D1E2C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M99.9614 39.9228C110.986 39.9228 119.923 30.9858 119.923 19.9614C119.923 8.93702 110.986 0 99.9614 0C88.937 0 80 8.93702 80 19.9614C80 30.9858 88.937 39.9228 99.9614 39.9228Z"
        fill="url(#paint4_linear)"
      />
      <Path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M83.6333 22.686C83.6333 11.6618 92.5701 2.72499 103.594 2.72499C107.269 2.72499 110.71 3.71875 113.667 5.4506C110.092 2.07205 105.269 0 99.961 0C88.9368 0 80 8.93684 80 19.961C80 27.311 83.9731 33.7319 89.8882 37.1963C86.037 33.5573 83.6333 28.4027 83.6333 22.686Z"
        fill="#1D1E2C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.877 18.2484L109.863 6.95581L106.998 9.82068C105.218 8.7615 103.146 8.16291 100.961 8.16291C97.9834 8.16291 95.1401 9.27526 92.9547 11.2949C90.7823 13.3026 89.4503 16.0268 89.2041 18.9656L94.6351 19.4207C94.7673 17.8426 95.4842 16.3782 96.6537 15.2973C97.8291 14.2109 99.3587 13.6127 100.961 13.6127C101.634 13.6127 102.287 13.7194 102.902 13.9165L100.584 16.2346L111.877 18.2484Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M89.2041 21.6735L91.218 32.9662L94.0829 30.1013C95.8629 31.1605 97.9343 31.7591 100.12 31.7591C103.097 31.7591 105.941 30.6468 108.126 28.6271C110.298 26.6195 111.63 23.8953 111.877 20.9564L106.446 20.5013C106.313 22.0794 105.597 23.5438 104.427 24.6247C103.252 25.7111 101.722 26.3093 100.12 26.3093C99.4467 26.3093 98.794 26.2026 98.1788 26.0055L100.497 23.6874L89.2041 21.6735Z"
        fill="white"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={16}
          y1={0}
          x2={16}
          y2={65.2632}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E5E7E5" />
          <Stop offset={1} stopColor="#C7CAC7" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={88.4211}
          y1={53}
          x2={0}
          y2={53}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6D92C9" />
          <Stop offset={1} stopColor="#3B5998" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={53.5029}
          y1={117.895}
          x2={86.3156}
          y2={117.895}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFCD02" />
          <Stop offset={1} stopColor="#FFDB4C" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1={2.10547}
          y1={117.895}
          x2={43.3392}
          y2={117.895}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFCD02" />
          <Stop offset={1} stopColor="#FFDB4C" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1={119.923}
          y1={0}
          x2={80}
          y2={0}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#82D84E" />
          <Stop offset={1} stopColor="#0EAD69" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgIconRecovery = React.memo(SvgComponent);
export default SvgIconRecovery;
