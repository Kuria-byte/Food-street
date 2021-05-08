import * as React from 'react';
import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Rect opacity={0.01} width={24} height={24} fill="black" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.3481 20.5238C20.8819 20.5238 21.313 20.9717 21.313 21.5238C21.313 22.0759 20.8819 22.5238 20.3481 22.5238H3.2779C2.74517 22.5238 2.31299 22.0759 2.31299 21.5238C2.31299 20.9717 2.74519 20.5238 3.2779 20.5238H20.3481ZM9.72854 17.4213C8.76514 17.4213 7.87352 17.1167 7.13902 16.6048L4.05071 19.6919H2.91539V18.5566L6.00368 15.4683L16.5417 4.93037L5.37053 14.1235C5.25663 13.7283 5.18605 13.3121 5.18605 12.8788C5.18605 10.3713 17.4402 1.52379 19.9477 1.52379C21.0842 1.52379 21.0842 1.52379 21.0842 2.65968C21.0841 5.16723 12.2366 17.4213 9.72854 17.4213Z"
        fill="url(#paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={21.313}
          y1={1.52379}
          x2={2.31299}
          y2={1.52379}
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
