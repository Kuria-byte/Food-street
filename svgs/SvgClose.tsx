import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.3775 12.0011L20.4433 6.93464C21.1862 6.19168 21.1862 4.97581 20.4433 4.23285L19.7682 3.55779C19.0252 2.81407 17.8093 2.81407 17.0663 3.55779L12.0006 8.62422L6.93405 3.55779C6.19186 2.81484 4.97595 2.81484 4.23298 3.55779L3.55714 4.23285C2.81494 4.97581 2.81494 6.19168 3.55714 6.93464L8.6229 12.0003L3.55714 17.0667C2.81494 17.8097 2.81494 19.0255 3.55714 19.7677L4.23298 20.4428C4.97595 21.1857 6.19186 21.1857 6.93405 20.4428L12.0006 15.3779L17.0663 20.4428C17.8093 21.1857 19.0252 21.1857 19.7682 20.4428L20.4433 19.7677C21.1862 19.0248 21.1862 17.8089 20.4433 17.0667L15.3775 12.0011Z"
                fill="url(#paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1={21.0005}
                    y1={3}
                    x2={3.00049}
                    y2={3}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#7D8699" />
                    <Stop offset={1} stopColor="#7D8699" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

const SvgClose = React.memo(SvgComponent)
export default SvgClose
