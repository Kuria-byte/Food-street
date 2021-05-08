import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
import {StyleSheet, View} from 'react-native';
interface BgProps {
  children?: any;
}
function SvgComponent(props: BgProps) {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none">
      <Rect
        x={0.5}
        y={0.5}
        width={55}
        height={55}
        rx={7.5}
        fill="white"
        stroke="#7D8699"
        strokeDasharray="1 1"
      />
      <View style={styles.container}>{props.children}</View>
    </Svg>
  );
}

const SvgBgAddedRecipe = React.memo(SvgComponent);
export default SvgBgAddedRecipe;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
  },
});
