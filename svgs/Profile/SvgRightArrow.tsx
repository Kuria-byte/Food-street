import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.774 7.422L7.79 3.244A.71.71 0 007.24 3a.71.71 0 00-.55.244l-.464.481A.807.807 0 006 4.303c0 .222.075.417.226.584L9.196 8l-2.97 3.12a.807.807 0 00-.226.577c0 .223.075.417.226.584l.464.481c.151.159.335.238.55.238.216 0 .4-.08.55-.238l3.984-4.178A.844.844 0 0012 8a.807.807 0 00-.226-.578z"
        fill="#7D8699"
      />
    </Svg>
  );
}

const SvgRightArrow = React.memo(SvgComponent);
export default SvgRightArrow;
