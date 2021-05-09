import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import SvgFullRate from '../svgs/SignUp/SvgRate';
import SvgHalfRate from '../svgs/SignUp/SvgHalfRate';
import SvgEmptyRate from '../svgs/SignUp/SvgEmptyRate';

interface StarIconProps {
  fillFull: boolean;
  fillHalf: boolean;
}
const StarIcon = memo((props: StarIconProps) => {
  return (
    <View style={styles.star}>
      {props.fillFull ? (
        <SvgFullRate />
      ) : props.fillHalf ? (
        <SvgHalfRate />
      ) : (
        <SvgEmptyRate />
      )}
    </View>
  );
});

export default StarIcon;

const styles = StyleSheet.create({
  star: {marginLeft: 3,fontSize: 2},
});
