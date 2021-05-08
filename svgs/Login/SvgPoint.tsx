import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={1} height={8} viewBox="0 0 1 8" fill="none">
      <Rect width={1} height={8} rx={0.5} fill="#E5E5E5" />
    </Svg>
  );
}

const SvgPoint = React.memo(SvgComponent);
export default SvgPoint;
