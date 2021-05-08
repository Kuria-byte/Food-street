import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import FONTS from'../assets/ultis/fonts';
import colors from '../assets/ultis/colors';
import SvgRightArrow from '../svgs/Profile/SvgRightArrow';

interface Props {
  svg: any;
  title: string;
  onPress?: any;
}

const SecondMenuItem = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.secondMenuItem}>
      <View style={styles.contentView}>
        {props.svg}
        <Text style={styles.txtTitle}>{props.title}</Text>
      </View>
   <SvgRightArrow/>
    </TouchableOpacity>
  );
};
export default SecondMenuItem;

const styles = StyleSheet.create({
  secondMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 24,
    overflow: 'hidden',
  },
  txtTitle: {
    marginLeft: 16,
    fontFamily: FONTS.Montserrat.Medium,
    fontSize: 14,
    color: colors.title,
    fontWeight: '600',
  },
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
