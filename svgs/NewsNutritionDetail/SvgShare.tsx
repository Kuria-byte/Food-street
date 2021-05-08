import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function SvgComponent() {
    return <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"><Path opacity={0.01} fill="#000" d="M0 0h24v24H0z" /><Path fillRule="evenodd" clipRule="evenodd" d="M23.98 20.356C23.898 13.684 18.147 8.25 10.99 8.008V4.5c0-.827-.672-1.5-1.499-1.5-.371 0-.73.143-1.009.401 0 0-6.32 5.852-8.138 7.676C.123 11.302 0 11.63 0 12c0 .37.123.697.345.922 1.818 1.825 8.138 7.676 8.138 7.676a1.48 1.48 0 001.01.401c.826 0 1.498-.672 1.498-1.5v-3.496c7.194.101 11.99 2.372 11.99 4.497a.5.5 0 00.52.5.5.5 0 00.479-.644z" fill="url(#prefix__paint0_linear)" /><Defs><LinearGradient id="prefix__paint0_linear" x1={24} y1={3} x2={0} y2={3} gradientUnits="userSpaceOnUse"><Stop stopColor="#82D84E" /><Stop offset={1} stopColor="#0EAD69" /></LinearGradient></Defs></Svg>;
}

const SvgShare = React.memo(SvgComponent);
export default SvgShare;