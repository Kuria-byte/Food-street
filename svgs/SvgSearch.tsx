import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.688 15.737a.996.996 0 01.765.293l2.233 2.232a1.004 1.004 0 11-1.42 1.42l-2.232-2.231a1.003 1.003 0 01-.293-.766l-.123-.124a9.433 9.433 0 11.946-.947l.123.123zm-7.25.632a6.936 6.936 0 100-13.871 6.936 6.936 0 000 13.871z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={19.98}
          y1={0}
          x2={0.004}
          y2={0}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={props.noColor ? '#7D8699' : "#82D84E"} />
          <Stop offset={1} stopColor={props.noColor ? '#7D8699' : "#0EAD69"} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgSearch = React.memo(SvgComponent);
export default SvgSearch;
