import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent() {
  return (
    <Svg width={42} height={42} viewBox="0 0 42 42" fill="none">
      <G filter="url(#filter0_d)">
        <Path
          d="M37 19C37 10.1634 29.8366 3 21 3C12.1634 3 5 10.1634 5 19C5 27.8366 12.1634 35 21 35C29.8366 35 37 27.8366 37 19Z"
          fill="black"
        />
      </G>
      <Path
        d="M35.5 19C35.5 10.9919 29.0081 4.5 21 4.5C12.9919 4.5 6.5 10.9919 6.5 19C6.5 27.0081 12.9919 33.5 21 33.5C29.0081 33.5 35.5 27.0081 35.5 19Z"
        fill="#FE9870"
        stroke="white"
        strokeWidth={3}
      />
      <Defs></Defs>
    </Svg>
  );
}

const SvgPinSlider = React.memo(SvgComponent);
export default SvgPinSlider;
