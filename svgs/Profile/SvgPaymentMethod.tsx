import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.247 19.898l-5.692 3.884C1.591 23.782 0 18.306 0 16.342c0-.982.398-1.87 1.042-2.514a3.543 3.543 0 012.513-1.041h23.152a3.015 3.015 0 013.016 3.015v1.512"
        fill="#CE6209"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.509 2.07v17.828H3.873V2.069C3.873.926 4.799 0 5.943 0h13.496a2.07 2.07 0 012.07 2.07z"
        fill="#3C3F4D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.784 4.664v15.233H5.597V4.664c0-.576.467-1.044 1.044-1.044H18.74c.577 0 1.044.468 1.044 1.044z"
        fill="#C4E2F2"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.784 4.664V23.56c0 .576-.468 1.044-1.044 1.044h-1.476c.576 0 1.044-.468 1.044-1.044V4.664c0-.577-.468-1.044-1.044-1.044h1.476c.576 0 1.044.467 1.044 1.044z"
        fill="#83B2C6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.31 8.127H14.007a2.269 2.269 0 00-2.27 2.27v9.718a2.269 2.269 0 002.27 2.269H31.31c1.358 0 2.458-1.101 2.458-2.459v-9.34c0-1.357-1.1-2.458-2.458-2.458z"
        fill="#83B2C6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.055 8.127H15.752a2.269 2.269 0 00-2.27 2.27v9.718a2.269 2.269 0 002.27 2.269h17.303c1.357 0 2.458-1.101 2.458-2.459v-9.34c0-1.357-1.1-2.458-2.458-2.458z"
        fill="#FF491F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.483 11.336h22.03v2.982h-22.03v-2.982z"
        fill="#2D303B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.287 17.314h29.751v17.12H8.288v-17.12z"
        fill="#83B2C6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.249 17.314H40v17.12H10.249v-17.12z"
        fill="#32CC77"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.425 28.694v-5.641a3.165 3.165 0 01-3.164-3.165H15.987a3.164 3.164 0 01-3.164 3.165v5.641a3.164 3.164 0 013.165 3.164H34.26a3.164 3.164 0 013.164-3.164z"
        fill="#1FB25E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.544 26.486h-1.962a.613.613 0 110-1.226h1.962a.613.613 0 010 1.226z"
        fill="#32CC77"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.425 20.5c-.539 0-.815-.68-.424-1.054a.62.62 0 01.673-.118c.243.108.394.37.36.635a.618.618 0 01-.608.538zM37.426 32.471c-.55 0-.823-.706-.406-1.072a.62.62 0 01.68-.088.618.618 0 01.33.649.62.62 0 01-.604.511z"
        fill="#1FB25E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.723 22.913v14.071A3.015 3.015 0 0126.708 40H3.555A3.555 3.555 0 010 36.444V16.342a3.555 3.555 0 003.555 3.556h23.152a3.015 3.015 0 013.016 3.015z"
        fill="#FF8E1D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.873 19.898V40h-.318A3.555 3.555 0 010 36.444V16.342a3.555 3.555 0 003.555 3.556h.318z"
        fill="#E2720E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.29 29.789a2.33 2.33 0 11-4.66 0 2.33 2.33 0 014.66 0z"
        fill="#FFBE1D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.29 29.789a2.33 2.33 0 01-1.735 2.253 2.331 2.331 0 010-4.506 2.33 2.33 0 011.735 2.253z"
        fill="#FFE14D"
      />
    </Svg>
  );
}

const SvgPaymentMethod = React.memo(SvgComponent);
export default SvgPaymentMethod;
