import React, {memo, useCallback} from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import FONTS from'../assets/ultis/fonts';
interface btnProps {
  title?: string;
  style?: ViewStyle;
  onPress: () => void;
  children?: any;
  styleLinear?: ViewStyle;
}
const ButtonLinear = memo((props: btnProps) => {
  const onPress = useCallback(() => {
    props.onPress && props.onPress();
  }, [props]);
  return (
    <TouchableOpacity
      style={[styles.touch, props.style]}
      activeOpacity={0.3}
      onPress={onPress}>
      <LinearGradient
        colors={['#0EAD69', '#82D84E']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[styles.btnLinear, props.styleLinear]}>
        {props.title ? <Text style={styles.textBtn}>{props.title}</Text> : null}
        {props.children ? props.children : null}
      </LinearGradient>
    </TouchableOpacity>
  );
});

export default ButtonLinear;

const styles = StyleSheet.create({
  touch: {
    width: '100%',
    shadowColor: '#000',

  },
  btnLinear: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 25,
    width: '100%',
  },
  textBtn: {
    color: '#fff',
    fontFamily: FONTS.Montserrat.Bold,
    fontSize: 14,
    textTransform: 'uppercase',
  },
});
