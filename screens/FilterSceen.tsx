import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TagItem from'../components/TagItem';
import FONTS from'../assets/ultis/fonts';
import FilterCriteria from'../components/FilterCriteria';
import ButtonLinear from'../components/GradientButton';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const filterList = [
  {
    id: '0',
    name: 'Popular Tags',
    tags: [
      'Chicken',
      'Beef',
      'Mutton',
      'Spicy',
      'Chilly',
      'Creamy',
      'Vegetables',
      'Pizza',
      'Raita',
    ],
  },
  {
    id: '1',
    name: 'Rating',
    tags: ['1 ', '2', '3', '4', '5'],
  },

  {
    id: '2',
    name: 'Sweet Tooth',
    tags: ['Tea', 'Coffee', 'Soft Drink', 'Ice Cream', 'Cake',],
  },
//   {
//     id: '3',
//     name: 'Calories',
//     isChange: true,
//   },
];
const FilterScreen = memo(() => {
  const onShowMore = useCallback(() => {}, []);
  const _renderItem = useCallback(({item}) => {
    return (
      <FilterCriteria
        data={item.tags}
        name={item.name}
        isChange={item.isChange}
      />
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={filterList}
        renderItem={_renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <ButtonLinear
        title={'Filter Restraunts'}
        onPress={onShowMore}
        style={styles.btnBtm}
      />
    </View>
    
  );
});
export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnBtm: {
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: getBottomSpace() + 8,
  },
  listContainer: {
    paddingTop: 24,
    paddingBottom: getBottomSpace() + 58,
  },
});
