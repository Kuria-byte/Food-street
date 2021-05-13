import React, {memo, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FONTS from'../assets/ultis/fonts';
interface TagItemProps {
  tagName: string;
  onPress: (index: number) => void;
  index: number;
  isChosen: boolean;
}
const TagItem = memo((props: TagItemProps) => {
  const onPress = useCallback(() => {
    props.onPress && props.onPress(props.index);
  }, [props]);
  const itemColor = props.isChosen ? '#FE9870' : '#F7F7FB';
  const titleColor = props.isChosen ? '#fff' : '#7D8699';
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: itemColor}]}
      onPress={onPress}>
      <Text style={[styles.title, {color: titleColor}]}>{props.tagName}</Text>
    </TouchableOpacity>
  );
});
export default TagItem;
const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 8,

    borderRadius: 17,
    marginTop: 4,
    marginRight: 4,
  },
  title: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: FONTS.Montserrat.Medium,
  },
});
