import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={41} height={40} viewBox="0 0 41 40" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.159 40H1L3.797 10.24h24.27l.516 4.967L31.159 40z"
        fill="#FF491F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.346 19.864h16.87L37.364 40H16.196l2.15-20.136z"
        fill="#ED3618"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.034 19.864h16.87L39.054 40H17.884l2.15-20.136z"
        fill="#FFE14D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.583 15.208a5.9 5.9 0 01-4.06-4.967h3.544l.516 4.967z"
        fill="#ED3618"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.483 9.593a5.895 5.895 0 11-11.79 0 5.895 5.895 0 0111.79 0z"
        fill="#32CC77"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.12 13.217a.603.603 0 01-.528-.31l-1.608-2.895a.603.603 0 111.055-.585l1.045 1.88 2.307-4.746a.603.603 0 111.085.528l-2.814 5.788a.603.603 0 01-.526.34h-.017z"
        fill="#E5E5E5"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.48 13.755a.603.603 0 01-.603-.603V7.151a5.951 5.951 0 00-5.945-5.945 5.951 5.951 0 00-5.944 5.945v6.001a.603.603 0 01-1.207 0V7.151C8.781 3.208 11.99 0 15.932 0c3.943 0 7.15 3.208 7.15 7.15v6.002c0 .333-.27.603-.602.603zM28.47 31.96a4.518 4.518 0 01-4.514-4.514v-3.91a.603.603 0 111.206 0v3.91a3.311 3.311 0 003.307 3.307 3.31 3.31 0 003.307-3.307v-3.91a.603.603 0 011.206 0v3.91a4.518 4.518 0 01-4.513 4.513z"
        fill="#3C3F4D"
      />
    </Svg>
  );
}

const SvgOrderHistory = React.memo(SvgComponent);
export default SvgOrderHistory;
