import colors from '../ultis/colors';
import Svg, {Path} from 'react-native-svg';
import React from 'react';

interface Props {
  onFocus: boolean;
}

function SvgComponent(props: Props) {
  return (
    <Svg width={12} height={16} viewBox="0 0 12 16" fill="none">
      <Path
        opacity={0.5}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.912.667c.144 0 .282.029.413.087.206.084.37.216.492.397.122.181.183.381.183.601v12.495c0 .22-.06.42-.183.601-.122.181-.286.314-.492.398a1.025 1.025 0 01-.412.077c-.3 0-.56-.103-.779-.31L6 10.903l-4.134 4.11c-.225.213-.485.32-.779.32-.143 0-.28-.029-.412-.087a1.063 1.063 0 01-.492-.398 1.053 1.053 0 01-.183-.6V1.752c0-.22.06-.42.183-.6C.305.97.469.837.675.753.806.696.944.667 1.087.667h9.825z"
        fill={props.onFocus ? colors.orangeLight : '#7D8699'}
      />
    </Svg>
  );
}

const SvgBookMark = React.memo(SvgComponent);
export default SvgBookMark;
