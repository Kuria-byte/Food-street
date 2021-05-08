import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Rect opacity={0.01} width={24} height={24} fill="black" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 19C6 20.105 6.895 21 8 21H16C17.105 21 18 20.105 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
        fill="#FF001F"
      />
    </Svg>
  );
}

const SvgDelete = React.memo(SvgComponent);
export default SvgDelete;
