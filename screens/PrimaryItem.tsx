import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FONTS from'../assets/ultis/fonts';
import colors from '../assets/ultis/colors';

interface Props {
  svg: any;
  title: string;
  onPress?: any;
}

const PrimaryItem = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.primaryItem}>
      <View>{props.svg}</View>
      <Text style={styles.txtTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};
export default PrimaryItem;

const styles = StyleSheet.create({
  primaryItem: {
    alignItems: 'center',
  },
  txtTitle: {
    fontFamily: FONTS.Montserrat.Medium,
    fontSize: 12,
    color: colors.title,
    marginTop: 12,
    fontWeight: '600',
    lineHeight: 18,
    textAlign: 'center',
  },
});
