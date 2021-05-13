import React, { memo, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FONTS from '../assets/ultis/fonts';
import TagItem from './TagItem';
import SvgFilterMarker from '../svgs/SvgFilterMarker';
import { widthScreen } from '../assets/ultis/layout';

interface FCProps {
  data: string[];
  name: string;
  isChange?: boolean;
}
const FilterCriteria = memo((props: FCProps) => {
  const [values, setValue] = useState([50, 250]);
  const [chosenIndex, setIndex] = useState(0);
  const onChoose = useCallback((index) => {
    console.log('index', index);
    setIndex(index);
  }, []);
  const renderItem = useCallback(
    (item, index) => {
      return (
        <TagItem
          tagName={item}
          key={index}
          onPress={onChoose}
          index={index}
          isChosen={index === chosenIndex}
        />
      );
    },
    [onChoose, chosenIndex],
  );
  const onValueChange = useCallback((values) => {
    setValue(values);
  }, []);
  const renderCustomMarker = useCallback(() => {
    return (
      <View style={styles.marker}>
        <SvgFilterMarker />
      </View>
    );
  }, []);
  return (
    <View style={styles.filterCriteria}>
      <View style={styles.titleView}>
        <Text style={styles.titleCriteria}>{props.name}</Text>
        {props.isChange ? (
          <Text style={styles.txtValue}>
            {values[0]} cal - {values[1]} cal
          </Text>
        ) : null}
      </View>
      {props.data ? (
        <View style={styles.tagsList}>{props.data.map(renderItem)}</View>
      ) : null}
      {props.isChange ? (
        <View style={styles.slider}>
    
        </View>
      ) : null}
    </View>
  );
});

export default FilterCriteria;
const styles = StyleSheet.create({
  filterCriteria: {
    marginBottom: 32,
  },
  tagsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 24,
  },
  titleCriteria: {
    color: '#1D1E2C',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONTS.Montserrat.Medium,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 24,
  },
  txtValue: {
    marginLeft: 9,
    fontSize: 14,
    lineHeight: 17,
    color: '#1D1E2C',
    fontFamily: FONTS.Montserrat.Regular,
  },
  slider: {
    paddingHorizontal: 24,
  },
  marker: {
    marginTop: 4,
    width: 32,
    height: 32,
    alignItems: 'center',
  },
  selectedStyle: {
    height: 4,
    backgroundColor: '#FE9870',
  },
  unselectedStyle: {
    height: 4,
    backgroundColor: '#E5E5E5',
  },
});
