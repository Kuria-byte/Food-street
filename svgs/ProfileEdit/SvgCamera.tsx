import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={24} height={21} viewBox="0 0 24 21" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8.393c.992 0 1.84.352 2.544 1.056A3.463 3.463 0 0115.6 11.99c0 .99-.352 1.838-1.056 2.541A3.469 3.469 0 0112 15.588c-.992 0-1.84-.352-2.544-1.056A3.463 3.463 0 018.4 11.991c0-.991.352-1.838 1.056-2.542A3.469 3.469 0 0112 8.393zm8.8-5.196c.883 0 1.637.313 2.262.937A3.08 3.08 0 0124 6.395v11.191a3.08 3.08 0 01-.938 2.261 3.084 3.084 0 01-2.262.937H3.2a3.084 3.084 0 01-2.263-.937A3.08 3.08 0 010 17.587V6.394c0-.883.313-1.636.938-2.26A3.084 3.084 0 013.2 3.196H6L6.638 1.5c.158-.408.447-.76.868-1.056C7.927.148 8.358 0 8.8 0h6.4c.442 0 .873.148 1.294.443.42.296.71.648.869 1.056L18 3.197h2.8zM12 17.587c1.542 0 2.86-.548 3.956-1.643S17.6 13.53 17.6 11.99s-.548-2.859-1.644-3.954C14.86 6.942 13.542 6.395 12 6.395c-1.542 0-2.86.547-3.956 1.642C6.948 9.132 6.4 10.45 6.4 11.991c0 1.54.548 2.858 1.644 3.953 1.096 1.095 2.414 1.642 3.956 1.642z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={24}
          y1={0}
          x2={0}
          y2={0}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#82D84E" />
          <Stop offset={1} stopColor="#0EAD69" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgCamera = React.memo(SvgComponent);
export default SvgCamera;
