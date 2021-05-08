import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={18} viewBox="0 0 24 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.79305 5.63416L10.8822 1.68745C10.8822 0.756952 10.15 0 9.24977 0C8.84485 0 8.45376 0.160419 8.15084 0.451513C8.15084 0.451513 2.35624 5.90931 0.376233 7.96206C0.13392 8.21476 0 8.5828 0 8.99972C0 9.41664 0.13392 9.78467 0.376233 10.0379C2.35624 12.0901 8.15084 17.5479 8.15084 17.5479C8.45376 17.8391 8.84485 17.9994 9.24977 17.9994C10.1499 17.9994 10.8822 17.2425 10.8822 16.312L9.79305 12.3785C14.2224 11.7644 17.9712 10.8222 23.0178 9.55182C23.531 9.42265 23.5338 8.63042 23.0178 8.51313C17.9631 7.36419 14.2287 6.40453 9.79305 5.63416Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={23.4324}
          y1={0}
          x2={0}
          y2={0}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#ffff" />
          <Stop offset={1} stopColor="#ffff" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgArrowHeader = React.memo(SvgComponent);
export default SvgArrowHeader;
