import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 14V20.3338C14.0005 21.25 13.3334 22 12.4168 22L11.5839 22C10.6673 22 10 21.2499 10 20.3333V14H3.66673C2.75057 14.0005 2.00049 13.3332 2.00048 12.4166L2 11.5832C1.99999 10.6675 2.75005 10.0005 3.66621 10H10V3.66669C10.0005 2.75052 10.6671 2.00047 11.5832 2L12.4166 2.00048C13.3332 2.00049 14.0005 2.75057 14 3.66673V10H20.3333C21.2504 9.99953 22.0005 10.6668 22 11.5839L22 12.4168C22 13.3334 21.25 14 20.3333 14H14Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={22}
          y1={2}
          x2={2}
          y2={2}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#82D84E" />
          <Stop offset={1} stopColor="#0EAD69" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgAdd = React.memo(SvgComponent);
export default SvgAdd;
