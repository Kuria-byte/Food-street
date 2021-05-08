import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" >
            <Rect opacity={0.01} width={24} height={24} fill="black" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 9.25903C13.5138 9.25903 14.741 10.4862 14.741 12C14.741 13.5138 13.5138 14.741 12 14.741C10.4862 14.741 9.259 13.5138 9.259 12C9.259 10.4862 10.4862 9.25903 12 9.25903ZM20.259 9.25903C21.7728 9.25903 23 10.4862 23 12C23 13.5138 21.7728 14.741 20.259 14.741C18.7452 14.741 17.518 13.5138 17.518 12C17.518 10.4862 18.7452 9.25903 20.259 9.25903ZM3.741 9.25903C5.25481 9.25903 6.482 10.4862 6.482 12C6.482 13.5138 5.25481 14.741 3.741 14.741C2.22719 14.741 1 13.5138 1 12C1 10.4862 2.22719 9.25903 3.741 9.25903Z"
                fill="url(#paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1={23}
                    y1={9.25903}
                    x2={1}
                    y2={9.25903}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#7D8699" />
                    <Stop offset={1} stopColor="#7D8699" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

const SvgDots = React.memo(SvgComponent)
export default SvgDots
