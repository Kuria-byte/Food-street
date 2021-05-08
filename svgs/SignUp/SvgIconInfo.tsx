import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Rect opacity={0.01} width={16} height={16} fill="black" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.66671 6.00001H7.33337V4.66668H8.66671V6.00001ZM8.66671 11.3333H7.33337V7.33334H8.66671V11.3333ZM8.00004 1.33334C4.32004 1.33334 1.33337 4.32001 1.33337 8.00001C1.33337 11.68 4.32004 14.6667 8.00004 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00001C14.6667 4.32001 11.68 1.33334 8.00004 1.33334Z"
        fill="#FE9870"
      />
    </Svg>
  );
}

const SvgIconInfo = React.memo(SvgComponent);
export default SvgIconInfo;
