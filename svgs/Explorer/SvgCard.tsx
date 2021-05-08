import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1H24V3C24 4.10457 23.1046 5 22 5H2C0.89543 5 0 4.10457 0 3V1ZM0 21C0 19.8954 0.895431 19 2 19H22C23.1046 19 24 19.8954 24 21V23H0V21ZM2 7C0.895431 7 0 7.89543 0 9V15C0 16.1046 0.89543 17 2 17H22C23.1046 17 24 16.1046 24 15V9C24 7.89543 23.1046 7 22 7H2Z"
                fill="url(#paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1={24}
                    y1={1}
                    x2={0}
                    y2={1}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#82D84E" />
                    <Stop offset={1} stopColor="#0EAD69" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

const SvgCard = React.memo(SvgComponent)
export default SvgCard
