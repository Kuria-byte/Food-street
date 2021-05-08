import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function SvgComponent() {
    return <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" ><Path opacity={0.01} fill="#000" d="M0 0h24v24H0z" /><Path fillRule="evenodd" clipRule="evenodd" d="M22.181 2.011H5.744c-.986 0-1.775.811-1.775 1.776V14c0 .987.81 1.776 1.775 1.776h11.332l2.564 2.586c.11.11.241.175.395.175.306 0 .57-.24.57-.57v-2.191h1.578c.986 0 1.775-.811 1.775-1.776V3.787c0-.987-.811-1.776-1.776-1.776zm-13.917 8.79A1.656 1.656 0 016.62 9.155c0-.898.745-1.643 1.644-1.643.898 0 1.644.745 1.644 1.643 0 .9-.724 1.644-1.644 1.644zm4.12-1.645c0 .9.745 1.644 1.644 1.644.899 0 1.644-.745 1.644-1.644 0-.898-.745-1.643-1.644-1.643-.899 0-1.644.745-1.644 1.643zM19.77 10.8a1.656 1.656 0 01-1.643-1.644c0-.898.745-1.643 1.643-1.643.9 0 1.644.745 1.644 1.643 0 .9-.745 1.644-1.644 1.644zm-16.81-.24v3.484a2.788 2.788 0 002.783 2.784h7.386v1.665a1.17 1.17 0 01-1.161 1.162H4.516l-1.688 1.688a.363.363 0 01-.263.11.384.384 0 01-.373-.373v-1.447h-1.03a1.152 1.152 0 01-1.161-1.205V11.72a1.17 1.17 0 011.161-1.162H2.96z" fill="url(#prefix__paint0_linear)" /><Defs><LinearGradient id="prefix__paint0_linear" x1={23.957} y1={2.011} x2={0} y2={2.011} gradientUnits="userSpaceOnUse"><Stop stopColor="#82D84E" /><Stop offset={1} stopColor="#0EAD69" /></LinearGradient></Defs></Svg>;
}

const SvgComment = React.memo(SvgComponent);
export default SvgComment;