import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.044 24.498c0 .068.014.137.045.201l1.985 4.106a.473.473 0 00.852 0l1.985-4.106a.461.461 0 00.045-.201h-4.912z"
        fill="#FFC89F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.873 28.098H5.099a.47.47 0 00-.472.468v2.904c0 .174.098.334.254.415.156.08.345.068.49-.032l1.115-.772 1.116.772a.476.476 0 00.49.032.467.467 0 00.253-.415v-2.904a.47.47 0 00-.472-.468z"
        fill="#FFA304"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.939 0H2.513a.47.47 0 00-.473.467v28.099a.47.47 0 00.473.467h18.426c1.302 0 2.362-1.048 2.362-2.337V2.337C23.301 1.048 22.241 0 20.94 0z"
        fill="#FF434D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.939 0h-2.142C20.1 0 21.16 1.048 21.16 2.337v24.359c0 1.289-1.06 2.337-2.363 2.337h2.142c1.302 0 2.362-1.048 2.362-2.337V2.337C23.301 1.048 22.241 0 20.94 0z"
        fill="#DD3646"
      />
      <Path fill="#DD3646" d="M15.082 0h1.103v29.033h-1.103z" />
      <Path fill="#FFD039" d="M16.185 0h2.89v29.033h-2.89z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.074 28.805a.473.473 0 00.852 0l1.985-4.105a.461.461 0 00.045-.202H27.91l-1.46 3.018.624 1.29z"
        fill="#F7B081"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.96 24.498V5.302a.47.47 0 00-.473-.468h-3.974a.47.47 0 00-.472.468v19.196h4.918z"
        fill="#FFD039"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.96 5.302a.47.47 0 00-.473-.468h-1.574v19.66l-.003.004h2.05V5.302z"
        fill="#FFA304"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.926 28.805l1.25-2.585h-3.352l1.25 2.585a.473.473 0 00.852 0z"
        fill="#3C5156"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.077 26.22l-.627 1.296.624 1.289a.473.473 0 00.852 0l1.25-2.585h-2.099z"
        fill="#304144"
      />
      <Path fill="#FF6137" d="M25.041 2.708h4.919v3.061h-4.919z" />
      <Path fill="#E04F32" d="M27.912 2.708h2.048v3.061h-2.048z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.528 0h-2.056c-.79 0-1.431.634-1.431 1.416v2.227h4.918V1.416C29.96.634 29.32 0 28.53 0z"
        fill="#546F7A"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.528 0h-2.05c.79 0 1.432.634 1.432 1.416v2.227h2.05V1.416C29.96.634 29.319 0 28.527 0z"
        fill="#475D63"
      />
    </Svg>
  );
}

const SvgSavedArticle = React.memo(SvgComponent);
export default SvgSavedArticle;
