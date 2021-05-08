import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent() {
  return <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" ><Path fillRule="evenodd" clipRule="evenodd" d="M9.793 8.634l1.09-3.947C10.882 3.757 10.15 3 9.25 3c-.405 0-.796.16-1.1.452 0 0-5.794 5.457-7.774 7.51C.134 11.215 0 11.582 0 12c0 .417.134.785.376 1.038 1.98 2.052 7.775 7.51 7.775 7.51.303.291.694.451 1.099.451.9 0 1.632-.756 1.632-1.687l-1.089-3.934c4.43-.614 8.178-1.556 13.225-2.826.513-.13.516-.922 0-1.039-5.055-1.149-8.79-2.108-13.225-2.879z" fill="#fff" /></Svg>;
}

const SvgBackArrow = React.memo(SvgComponent);
export default SvgBackArrow;