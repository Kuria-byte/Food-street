import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.36478 11.3958C9.59776 11.6471 9.72567 11.9753 9.72567 12.3148V22.319C9.72567 22.9211 10.4589 23.2267 10.8929 22.8034L13.7092 19.6052C14.0861 19.157 14.2939 18.9352 14.2939 18.4916V12.317C14.2939 11.9775 14.4241 11.6493 14.6548 11.3981L22.7361 2.70887C23.3414 2.05701 22.8754 1 21.98 1H2.03955C1.14417 1 0.675919 2.05475 1.2835 2.70887L9.36478 11.3958Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={23.0093}
          y1={1}
          x2={1.00928}
          y2={1}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#82D84E" />
          <Stop offset={1} stopColor="#0EAD69" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgFilterSmall = React.memo(SvgComponent);
export default SvgFilterSmall;
