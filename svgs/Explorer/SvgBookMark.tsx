import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

interface Props {
    isActive: boolean
    width: number
    height: number
}
function SvgComponent(props: Props) {
    return (
        <Svg width={props.width || 24} height={props.height || 24} viewBox="0 0 24 24" fill="none" >
            <Rect opacity={0.01} width={24} height={24} fill="black" />
            <Path
                opacity={0.5}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.3687 1C19.5844 1 19.7906 1.04362 19.9875 1.13087C20.2969 1.25688 20.543 1.45561 20.7258 1.72703C20.9086 1.99846 21 2.29896 21 2.62855V21.3714C21 21.701 20.9086 22.0015 20.7258 22.273C20.543 22.5444 20.2969 22.7431 19.9875 22.8691C19.8094 22.9467 19.6031 22.9855 19.3687 22.9855C18.9187 22.9855 18.5297 22.8304 18.2016 22.5202L12 16.3549L5.79844 22.5202C5.46094 22.8401 5.07188 23 4.63125 23C4.41562 23 4.20938 22.9564 4.0125 22.8691C3.70313 22.7431 3.45703 22.5444 3.27422 22.273C3.09141 22.0015 3 21.701 3 21.3714V2.62855C3 2.29896 3.09141 1.99846 3.27422 1.72703C3.45703 1.45561 3.70313 1.25688 4.0125 1.13087C4.20938 1.04362 4.41562 1 4.63125 1L19.3687 1Z"
                fill={props.isActive ? '#FE9870' : "#7D8699"}
            />
        </Svg>
    )
}

const SvgBookMark = React.memo(SvgComponent)
export default SvgBookMark
