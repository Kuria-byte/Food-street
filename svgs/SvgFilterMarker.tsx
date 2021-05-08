import * as React from 'react';
import Svg, {G, Rect, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent() {
  return (
    <Svg width={42} height={39} viewBox="0 0 42 39" fill="none">
      <G>
        <Rect x={5} width={32} height={32} rx={16} fill="#FE9870" />
        <Rect
          x={6.5}
          y={1.5}
          width={29}
          height={29}
          rx={14.5}
          stroke="white"
          strokeWidth={3}
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

const SvgFilterMarker = React.memo(SvgComponent);
export default SvgFilterMarker;
