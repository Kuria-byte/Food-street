import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C5.93515 1 1 5.9346 1 12C1 18.0654 5.93515 23 12 23C18.066 23 23 18.0654 23 12C23 5.9346 18.066 1 12 1Z"
        fill="url(#paint0_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8497 10.8312L12.1401 15.5414C11.8123 15.8687 11.3827 16.0326 10.9532 16.0326C10.5247 16.0326 10.0946 15.8687 9.76737 15.5414L7.15047 12.9245C6.49542 12.2695 6.49542 11.2074 7.15047 10.5524C7.80552 9.8968 8.86702 9.8968 9.52317 10.5524L10.9532 11.9824L14.4776 8.45855C15.1315 7.80405 16.1952 7.80405 16.8497 8.45855C17.5048 9.1136 17.5048 10.1762 16.8497 10.8312Z"
        fill="white"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={23}
          y1={1}
          x2={1}
          y2={1}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#82D84E" />
          <Stop offset={1} stopColor="#0EAD69" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgChecked = React.memo(SvgComponent);
export default SvgChecked;
