import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path opacity={0.01} fill="#000" d="M0 0h16v16H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6.173a1.827 1.827 0 110 3.655 1.827 1.827 0 010-3.655zm5.506 0a1.827 1.827 0 110 3.655 1.827 1.827 0 010-3.655zm-11.012 0a1.827 1.827 0 110 3.655 1.827 1.827 0 010-3.655z"
        fill="#7D8699"
      />
    </Svg>
  );
}

const SvgOption = React.memo(SvgComponent);
export default SvgOption;
