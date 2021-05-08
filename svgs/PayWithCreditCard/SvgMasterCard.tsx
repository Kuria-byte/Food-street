import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={48} height={30} viewBox="0 0 48 30" fill="none">
      <Path
        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
        fill="#F52825"
      />
      <Path
        d="M33 30C41.2843 30 48 23.2843 48 15C48 6.71573 41.2843 0 33 0C24.7157 0 18 6.71573 18 15C18 23.2843 24.7157 30 33 30Z"
        fill="#FCB031"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3C20.3532 5.75608 18 10.1059 18 15C18 19.8941 20.3532 24.2439 24 27C27.6468 24.2439 30 19.8941 30 15C30 10.1059 27.6468 5.75608 24 3Z"
        fill="#FF7814"
      />
    </Svg>
  );
}

const SvgMasterCard = React.memo(SvgComponent);
export default SvgMasterCard;
