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
        d="M16.8498 10.8313L12.1402 15.5415C11.8124 15.8687 11.3828 16.0326 10.9533 16.0326C10.5248 16.0326 10.0947 15.8687 9.76749 15.5415L7.15059 12.9246C6.49554 12.2695 6.49554 11.2075 7.15059 10.5524C7.80564 9.89681 8.86714 9.89681 9.52329 10.5524L10.9533 11.9824L14.4777 8.45856C15.1316 7.80406 16.1953 7.80406 16.8498 8.45856C17.5049 9.11361 17.5049 10.1762 16.8498 10.8313Z"
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
