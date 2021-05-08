import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" >
            <Rect opacity={0.01} width={24} height={24} fill="black" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 2C0 0.89543 0.895431 0 2 0H4C5.10457 0 6 0.895431 6 2V4C6 5.10457 5.10457 6 4 6H2C0.89543 6 0 5.10457 0 4V2ZM9 2.5C9 1.67157 9.67157 1 10.5 1H22.5C23.3284 1 24 1.67157 24 2.5C24 3.32843 23.3284 4 22.5 4H10.5C9.67157 4 9 3.32843 9 2.5ZM0 11C0 9.89543 0.895431 9 2 9H4C5.10457 9 6 9.89543 6 11V13C6 14.1046 5.10457 15 4 15H2C0.89543 15 0 14.1046 0 13V11ZM9 11.5C9 10.6716 9.67157 10 10.5 10H22.5C23.3284 10 24 10.6716 24 11.5C24 12.3284 23.3284 13 22.5 13H10.5C9.67157 13 9 12.3284 9 11.5ZM0 20C0 18.8954 0.895431 18 2 18H4C5.10457 18 6 18.8954 6 20V22C6 23.1046 5.10457 24 4 24H2C0.89543 24 0 23.1046 0 22V20ZM9 20.5C9 19.6716 9.67157 19 10.5 19H22.5C23.3284 19 24 19.6716 24 20.5C24 21.3284 23.3284 22 22.5 22H10.5C9.67157 22 9 21.3284 9 20.5Z"
                fill="url(#paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1={24}
                    y1={0}
                    x2={0}
                    y2={0}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#82D84E" />
                    <Stop offset={1} stopColor="#0EAD69" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

const SvgList = React.memo(SvgComponent)
export default SvgList
