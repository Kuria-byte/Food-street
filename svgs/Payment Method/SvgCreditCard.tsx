import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.071 13.64l-8.657-8.659v34.7H48v-19.01c0-2.64-1.054-5.17-2.929-7.03z"
        fill="#FFB782"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.767 33.358L.222 16.398a3.303 3.303 0 011.9-4.271L33.011.245a3.311 3.311 0 014.279 1.897l6.545 16.961a3.303 3.303 0 01-1.9 4.272l-30.89 11.879a3.313 3.313 0 01-4.28-1.897z"
        fill="#DE4C3C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.65 8.253L2.61 22.586l2.467 6.391 37.04-14.326-2.467-6.398z"
        fill="#7A4930"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 21.505V3.33A3.308 3.308 0 013.31.024h33.104c1.828 0 3.31 1.48 3.31 3.305v18.176a3.308 3.308 0 01-3.31 3.305H3.311A3.308 3.308 0 010 21.505z"
        fill="#4398D1"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.414.024h-3.517L8.069 24.81h28.345c1.828 0 3.31-1.48 3.31-3.305V3.33a3.308 3.308 0 00-3.31-3.305z"
        fill="#3E8CC7"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.31 13.243h3.31v1.653H3.31v-1.653zM3.31 18.2h3.31v1.653H3.31v-1.652zM18.207 18.2h3.31v1.653h-3.31v-1.652zM8.276 13.243h3.31v1.653h-3.31v-1.653zM13.242 13.243h3.31v1.653h-3.31v-1.653zM18.207 13.243h3.31v1.653h-3.31v-1.653zM33.931 3.33h1.655v2.478h-1.655V3.329zM30.62 3.33h1.656v2.478H30.62V3.329zM27.31 3.33h1.656v2.478H27.31V3.329zM24 3.33h1.655v2.478H24V3.329z"
        fill="#5EB3D1"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.103 39.681H48v8.262H33.103V39.68z"
        fill="#88B337"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.675 14.95a3.592 3.592 0 00-5.074.009 3.577 3.577 0 00-.107 4.943l6.782 7.387a11.126 11.126 0 00.226 11.431l.602.961h10.758V28.115L30.675 14.949z"
        fill="#FFB782"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.586 42.16h1.656v1.653h-1.656V42.16z"
        fill="#6B962A"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.31 8.617V4.65c0-.73.593-1.322 1.325-1.322h3.972c.732 0 1.324.592 1.324 1.322v3.966c0 .73-.592 1.322-1.324 1.322H4.635A1.323 1.323 0 013.31 8.617z"
        fill="#FDB62F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.31 5.808h2.483V7.46H3.311V5.808zM7.449 5.808H9.93V7.46H7.45V5.808z"
        fill="#FD7B2F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.034 28.115a.827.827 0 01-.584-.242l-3.31-3.305a.825.825 0 01.02-1.168.828.828 0 011.15 0l3.31 3.305a.826.826 0 01-.586 1.41z"
        fill="#F2A46F"
      />
    </Svg>
  );
}

const SvgCreditCard = React.memo(SvgComponent);
export default SvgCreditCard;
