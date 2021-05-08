import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
interface ArrowProps {
  color?: string;
}
function SvgComponent(props: ArrowProps) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7738 7.4223L7.79037 3.24388C7.64367 3.08127 7.46048 3 7.24045 3C7.02042 3 6.83723 3.08136 6.69053 3.24388L6.2262 3.72533C6.07546 3.88366 6.00009 4.07613 6.00009 4.30291C6.00009 4.52541 6.07543 4.72016 6.2262 4.887L9.19551 8.00002L6.22607 11.1195C6.07537 11.2778 6 11.4703 6 11.6971C6 11.9195 6.07535 12.1144 6.22607 12.2811L6.69045 12.7625C6.84117 12.9208 7.02455 13 7.24036 13C7.45627 13 7.6396 12.9208 7.79028 12.7625L11.7738 8.58408C11.9246 8.4172 12 8.2225 12 8C12 7.77321 11.9246 7.58064 11.7738 7.4223Z"
        fill={props.color || 'white'}
      />
    </Svg>
  );
}

const SvgArrowNext = React.memo(SvgComponent);
export default SvgArrowNext;
