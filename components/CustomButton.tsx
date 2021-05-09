import React, {memo, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
// import FONTS from'app/ultis/fonts';

interface BtnColorProps {
  title: string;
  style?: ViewStyle;
  onPress: () => void;
}
const CustomButton = memo((props: BtnColorProps) => {
  const onPress = useCallback(() => {
    props.onPress && props.onPress();
  }, [props]);
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={onPress}>
      <Text style={styles.txt}>{props.title}</Text>
    </TouchableOpacity>
  );
});

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE9870',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  txt: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Montserrat-Bold',
  },
});
