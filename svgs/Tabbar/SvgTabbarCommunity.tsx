import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

interface PropsTabar {
    color?: string
}

function SvgComponent(props: PropsTabar) {
    return (
        <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" >
            <Rect opacity={0.01} width={24} height={24} fill="black" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.2846 0.49015L19.6416 3.11788C19.8725 3.37528 20 3.7077 20 4.05209V24.0181H1.41925C0.635455 24.0181 0 23.3885 0 22.6118V1.42437C0 0.6477 0.635455 0.0181134 1.41925 0.0180664H16.2238C16.6292 0.0180664 17.0153 0.189887 17.2846 0.49015ZM4 4.01807C3.44772 4.01807 3 4.46578 3 5.01807C3 5.57035 3.44772 6.01807 4 6.01807H11C11.5523 6.01807 12 5.57035 12 5.01807C12 4.46578 11.5523 4.01807 11 4.01807H4ZM3 11.0181C3 10.4658 3.44772 10.0181 4 10.0181H16C16.5523 10.0181 17 10.4658 17 11.0181C17 11.5704 16.5523 12.0181 16 12.0181H4C3.44772 12.0181 3 11.5704 3 11.0181ZM4 14.0181C3.44772 14.0181 3 14.4658 3 15.0181C3 15.5704 3.44772 16.0181 4 16.0181H16C16.5523 16.0181 17 15.5704 17 15.0181C17 14.4658 16.5523 14.0181 16 14.0181H4ZM3 19.0181C3 18.4658 3.44772 18.0181 4 18.0181H16C16.5523 18.0181 17 18.4658 17 19.0181C17 19.5704 16.5523 20.0181 16 20.0181H4C3.44772 20.0181 3 19.5704 3 19.0181ZM21 7.01807H22.4974C23.3272 7.01807 24 7.66118 24 8.45443V21.3949C24 22.8437 22.7714 24.0181 21.2558 24.0181H21V7.01807Z"
                fill="url(#paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1={24}
                    y1={0.0180664}
                    x2={0}
                    y2={0.0180664}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor={props.color} />
                    <Stop offset={1} stopColor={props.color} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

const SvgTabbarCommunity = React.memo(SvgComponent)
export default SvgTabbarCommunity
