import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z"
        fill="#FF6238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.52 31.526a.823.823 0 01-.196.09l1.556-1.367 1.23-1.176 4.827 3.317c.59.405 1.432.103 1.582-.567l3.197-14.308c.157-.701-.58-1.285-1.293-1.025l-18.726 6.83h-.002a.627.627 0 00.057 1.208l4.759 1.316 1.775 5.275a.764.764 0 00.335.413l.005.002a.875.875 0 00.698.082c.015-.004.03-.01.044-.015l.008-.003a.873.873 0 00.142-.07l.001-.002zm-.427-5.033l8.698-7.2c.208-.172-.034-.477-.27-.339L17.25 24.917a.424.424 0 00-.2.501l1.4 5.758c.029.088.164.076.176-.015l.312-4.389a.426.426 0 01.155-.28z"
        fill="#fff"
      />
    </Svg>
  );
}

const SvgEmail = React.memo(SvgComponent);
export default SvgEmail;
