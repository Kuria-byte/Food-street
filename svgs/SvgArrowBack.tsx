import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.79305 8.63416L10.8822 4.68745C10.8822 3.75695 10.15 3 9.24977 3C8.84485 3 8.45376 3.16042 8.15084 3.45151C8.15084 3.45151 2.35624 8.90931 0.376233 10.9621C0.13392 11.2148 0 11.5828 0 11.9997C0 12.4166 0.13392 12.7847 0.376233 13.0379C2.35624 15.0901 8.15084 20.5479 8.15084 20.5479C8.45376 20.8391 8.84485 20.9994 9.24977 20.9994C10.1499 20.9994 10.8822 20.2425 10.8822 19.312L9.79305 15.3785C14.2224 14.7644 17.9712 13.8222 23.0178 12.5518C23.531 12.4227 23.5338 11.6304 23.0178 11.5131C17.9631 10.3642 14.2287 9.40453 9.79305 8.63416Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={23.4324}
          y1={3}
          x2={0}
          y2={3}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#82D84E" />
          <Stop offset={1} stopColor="#0EAD69" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgArrowBack = React.memo(SvgComponent);
export default SvgArrowBack;
