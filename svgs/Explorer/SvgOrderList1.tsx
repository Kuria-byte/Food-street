import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
function SvgComponent() {
    return (
        <Svg width={120} height={96} viewBox="0 0 120 96" fill="none" >
            <Path
                d="M0 12C0 5.37258 5.37258 0 12 0H120V96H12C5.37259 96 0 90.6274 0 84V12Z"
                fill="url(#pattern0)"
            />
            <Defs>
                <Pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use
                        xlinkHref="#image0"
                        transform="translate(-0.0532258) scale(0.00107527 0.00134409)"
                    />
                </Pattern>
                <Image
                    id="image0"
                    width={1029}
                    height={744}
                />
            </Defs>
        </Svg>
    )
}
const SvgOrderList1 = React.memo(SvgComponent)
export default SvgOrderList1