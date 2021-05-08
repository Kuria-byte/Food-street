import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.953 47.906c13.23 0 23.953-10.724 23.953-23.953S37.182 0 23.953 0 0 10.724 0 23.953c0 13.23 10.724 23.953 23.953 23.953z"
        fill="#3B5998"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.817 33.1l.014-8.166H18.71a.5.5 0 01-.5-.499l-.01-2.632a.5.5 0 01.5-.502h2.118v-2.544c0-2.951 1.803-4.558 4.436-4.558h2.16a.5.5 0 01.5.5v2.22a.5.5 0 01-.5.5l-1.326.001c-1.431 0-1.709.68-1.709 1.679v2.202h3.147a.5.5 0 01.497.56l-.312 2.631a.5.5 0 01-.497.442h-2.82l-.015 8.166h-3.561z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgFacebook = React.memo(SvgComponent);
export default SvgFacebook;
