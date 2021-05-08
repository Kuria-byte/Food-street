import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.66673 14C2.75057 14.0005 2.00049 13.3332 2.00048 12.4166L2 11.5832C1.99999 10.6675 2.75005 10.0005 3.66621 10H20.3333C21.2504 9.99953 22.0005 10.6668 22 11.5839L22 12.4168C22 13.3334 21.25 14 20.3333 14H3.66673Z"
        fill="white"
      />
    </Svg>
  );
}

const SvgSub = React.memo(SvgComponent);
export default SvgSub;
