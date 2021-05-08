import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function SvgComponent() {
    return <Svg width={24} height={24} viewBox="0 0 24 24" fill="none"><Path opacity={0.01} fill="#000" d="M0 0h24v24H0z" /><Path fillRule="evenodd" clipRule="evenodd" d="M22.506 3.018a.742.742 0 00-.542-.229c-.104 0-.322.086-.654.254-.333.168-.687.355-1.058.565a7.664 7.664 0 01-1.323.564c-.509.168-.98.254-1.413.254-.4 0-.753-.077-1.057-.23-1.01-.472-1.888-.825-2.633-1.057a8.041 8.041 0 00-2.405-.35c-1.482 0-3.17.482-5.061 1.444-.39.195-.67.346-.852.456l-.18-1.318a1.91 1.91 0 00.669-1.447 1.924 1.924 0 10-3.849 0c0 .693.37 1.296.92 1.635l2.6 19.06a1.132 1.132 0 002.243-.306l-1.045-7.66c1.896-.94 3.536-1.415 4.915-1.415.585 0 1.156.087 1.713.264.557.178 1.02.369 1.389.576.367.21.803.402 1.304.577.501.177.996.265 1.485.265 1.234 0 2.712-.465 4.436-1.394a1.77 1.77 0 00.475-.331c.1-.108.15-.263.15-.462V3.559a.742.742 0 00-.227-.54z" fill="url(#prefix__paint0_linear)" /><Defs><LinearGradient id="prefix__paint0_linear" x1={22.733} y1={0} x2={2.148} y2={0} gradientUnits="userSpaceOnUse"><Stop stopColor="#82D84E" /><Stop offset={1} stopColor="#0EAD69" /></LinearGradient></Defs></Svg>;
}

const SvgReport = React.memo(SvgComponent);
export default SvgReport;