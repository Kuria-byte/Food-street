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
                d="M6 6.00003V7.00003H5V9.00003H7V11.0639H5V13H7V15H5V17H6V18H11V23.0882C10.3555 23.6767 9.53166 24.03 8.63523 24.03C6.97793 24.03 5.53149 22.8004 5.06183 21.0818C3.11286 20.8325 1.59432 18.9865 1.59432 16.7527C1.59432 16.3881 1.63448 16.0302 1.7139 15.6824C0.656805 14.8787 0 13.5283 0 12.0803C0 10.6948 0.575104 9.42908 1.54 8.61473C1.32046 8.12175 1.20361 7.57547 1.20361 7.01852C1.20361 5.03544 2.65415 3.42248 4.43697 3.42248C4.61087 3.42248 4.78477 3.43822 4.95593 3.46919C5.26129 1.5181 6.7949 0.0300293 8.63523 0.0300293C9.53166 0.0300293 10.3555 0.383389 11 0.971813V6.00003H6ZM8 16V8.00003H16V16H8ZM10 10.03H14V14.03H10V10.03ZM22.46 8.61473C23.4249 9.42908 24 10.6948 24 12.0803C24 13.5283 23.3432 14.8787 22.2861 15.6824C22.3655 16.0302 22.4057 16.3881 22.4057 16.7527C22.4057 18.9865 20.8871 20.8325 18.9382 21.0818C18.4685 22.8004 17.0221 24.03 15.3648 24.03C14.4683 24.03 13.6445 23.6767 13 23.0882V18H18V17H19V15H17V13H19V11.0639H17V9.00003H19V7.00003H18V6.00003H13V0.971813C13.6445 0.383389 14.4683 0.0300293 15.3648 0.0300293C17.2051 0.0300293 18.7387 1.5181 19.0441 3.46919C19.2152 3.43822 19.3891 3.42248 19.563 3.42248C21.3458 3.42248 22.7964 5.03544 22.7964 7.01852C22.7964 7.57547 22.6795 8.12175 22.46 8.61473Z"
                fill="url(#paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1={24}
                    y1={0.0300293}
                    x2={0}
                    y2={0.0300293}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor={props.color} />
                    <Stop offset={1} stopColor={props.color} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

const SvgTabbarChef = React.memo(SvgComponent)
export default SvgTabbarChef
