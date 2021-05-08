import * as React from 'react';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { StyleSheet, Text, View } from 'react-native';
import FONTS from'app/ultis/fonts';

function SvgComponent() {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <Rect width={32} height={32} rx={16} fill="url(#paint0_linear)" />
      <View style={styles.container}>
        <Text style={styles.txt}>1</Text>
      </View>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={32}
          y1={0}
          x2={0}
          y2={0}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#82D84E" />
          <Stop offset={1} stopColor="#0EAD69" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const SvgStep = React.memo(SvgComponent);
export default SvgStep;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
  txt: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: FONTS.Montserrat.Medium,
  },
});
