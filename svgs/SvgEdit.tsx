import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path opacity={0.01} fill="#000" d="M0 0h24v24H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.348 20.524c.534 0 .965.448.965 1s-.43 1-.965 1H3.278c-.533 0-.965-.448-.965-1s.432-1 .965-1h17.07zm-10.62-3.102a4.515 4.515 0 01-2.589-.817l-3.088 3.087H2.916v-1.135l3.088-3.088L16.542 4.93 5.37 14.123a4.483 4.483 0 01-.185-1.245c0-2.508 12.254-11.355 14.762-11.355 1.136 0 1.136 0 1.136 1.136 0 2.507-8.847 14.762-11.355 14.762z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={21.313}
          y1={1.524}
          x2={2.313}
          y2={1.524}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#82D84E" />
          <Stop offset={1} stopColor="#0EAD69" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgEdit = React.memo(SvgComponent);
export default SvgEdit;
