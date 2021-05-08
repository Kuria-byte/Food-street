import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path opacity={0.01} fill="#000" d="M0 0h24v24H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.051 20.07H5.278c-.966 0-1.702-.352-2.058-.98-.356-.627-.28-1.43.228-2.232l.94-1.48c.23-.377.484-1.105.509-1.556l.406-5.194c.255-2.886 2.288-5.37 5.083-6.298.254-.803.94-1.33 1.779-1.33.838 0 1.524.527 1.779 1.33 2.795.928 4.828 3.412 5.056 6.298l.407 5.194c.025.451.28 1.179.508 1.555l.94 1.48c.509.803.61 1.606.255 2.233-.356.628-1.093.98-2.059.98zm-4.345.5H9.878c-.178 0-.356.101-.432.252-.102.15-.077.351 0 .502.127.225 1.397 2.258 2.846 2.258 1.474 0 2.719-2.033 2.846-2.258a.451.451 0 000-.502.526.526 0 00-.432-.251z"
        fill="#F7F7FB"
      />
    </Svg>
  );
}

const SvgNotification = React.memo(SvgComponent);
export default SvgNotification;
