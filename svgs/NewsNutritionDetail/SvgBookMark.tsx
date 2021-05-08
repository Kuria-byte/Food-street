import * as React from "react";
import Svg, {Path} from "react-native-svg";
import colors from "app/ultis/colors";

interface Props {
    color:boolean;
}

function SvgComponent(props:Props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path opacity={0.01} fill="#000" d="M0 0h24v24H0z"/>
            <Path opacity={0.5} fillRule="evenodd" clipRule="evenodd"
                  d="M19.369 1c.215 0 .422.044.619.13.309.127.555.326.738.597.183.271.274.572.274.902V21.37c0 .33-.091.63-.274.902-.183.271-.43.47-.738.596a1.537 1.537 0 01-.62.116c-.45 0-.838-.155-1.166-.465L12 16.355 5.798 22.52c-.337.32-.726.48-1.167.48a1.51 1.51 0 01-.619-.13 1.594 1.594 0 01-.738-.597A1.58 1.58 0 013 21.371V2.63c0-.33.091-.63.274-.902.183-.271.43-.47.739-.596A1.51 1.51 0 014.63 1H19.37z"
                  fill={props.color?colors.orangeLight:'#7D8699'}/>
        </Svg>
    );
}

const SvgBookMark = React.memo(SvgComponent);
export default SvgBookMark;
