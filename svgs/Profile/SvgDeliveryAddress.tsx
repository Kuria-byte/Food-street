import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.874 12.061h34.253v27.873H2.874V12.06z"
        fill="#E6E6E6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.086 23.874v-11.73H21.819v11.73h-2.024v16.06h18.164v-16.06h-2.873z"
        fill="#CCC"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.874 12.061h34.253v3.826H2.874v-3.826z"
        fill="#CCC"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.103.04H2.897L0 13.764h40L37.103.039z"
        fill="#2C92BF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.127 12.145H23.86v11.729l13.267 3.657V12.145z"
        fill="#FF8E1D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.013 17.91H17.89v22.023H6.013V17.911z"
        fill="#2C92BF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.836 23.874H40v16.06H21.836v-16.06z"
        fill="#FF8E1D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.101 31.547l-3.183-1.796-3.184 1.796v-7.673h6.367v7.673zM32.819 17.749l-2.326-1.312-2.325 1.312v-5.604h4.65v5.604z"
        fill="#FF491F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.727 20.714h6.448v8.571H8.727v-8.571z"
        fill="#C4E2F2"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.726 29.898h6.45a.612.612 0 00.612-.612v-8.572a.612.612 0 00-.613-.612H8.726a.612.612 0 00-.612.612v8.572c0 .338.274.612.612.612zm5.837-1.224H9.34v-7.348h5.224v7.348zM15.175 32.919h-1.134a.612.612 0 010-1.225h1.134a.612.612 0 010 1.225z"
        fill="#E6E6E6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.951 29.898a.612.612 0 01-.612-.612v-8.572a.612.612 0 111.224 0v8.572a.612.612 0 01-.612.612z"
        fill="#E6E6E6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.175 25.612H8.726a.612.612 0 010-1.224h6.45a.612.612 0 110 1.224z"
        fill="#E6E6E6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.081 9.735H3.918a.612.612 0 110-1.225h32.163a.612.612 0 110 1.225zM33.715 5.392H6.285a.612.612 0 010-1.225h27.43a.612.612 0 110 1.225z"
        fill="#1F81A3"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.836 39.934l9.082-2.118L40 39.934H21.836zM23.86 23.874l6.634-1.853 6.633 1.853H23.86z"
        fill="#E2720E"
      />
    </Svg>
  );
}

const SvgDeliveryAddress = React.memo(SvgComponent);
export default SvgDeliveryAddress;
