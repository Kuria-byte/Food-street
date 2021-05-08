import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={1} height={64} viewBox="0 0 1 64" fill="none">
      <Path d="M0.5 0V64" stroke="#7D8699" strokeDasharray="1 1" />
    </Svg>
  );
}

const SvgLine = React.memo(SvgComponent);
export default SvgLine;
