import * as React from 'react';
import Svg, {Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SvgBtnProps} from'app/svgs/SeeAllTips/SvgCamera';

function SvgComponent(props: SvgBtnProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Rect opacity={0.01} width={24} height={24} fill="black" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.44721 22.2764C1.78231 22.6088 1 22.1253 1 21.382V15.2123C1 14.7687 1.2923 14.3781 1.71794 14.2529L9.38095 12L1.71794 9.74707C1.2923 9.62194 1 9.23133 1 8.78768V2.61803C1 1.87465 1.78231 1.39116 2.44721 1.72361L21.2111 11.1056C21.9482 11.4741 21.9482 12.5259 21.2111 12.8944L2.44721 22.2764Z"
          fill="url(#paint0_linear)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear"
            x1={23}
            y1={1}
            x2={1}
            y2={1}
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#82D84E" />
            <Stop offset={1} stopColor="#0EAD69" />
          </LinearGradient>
        </Defs>
      </Svg>
    </TouchableOpacity>
  );
}

const SvgSend = React.memo(SvgComponent);
export default SvgSend;
const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
});
