import React, { memo, useCallback } from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import RestaurantItem from '../components/RestaurantItem';
import colors from '../assets/ultis/colors';
import FONTS from '../assets/ultis/fonts';
import keyExtractor from '../assets/ultis/KeyExtractor';
import CategorySlider from '../components/CategorySlider';
import CustomButton from '../components/CustomButton';

const data = [
  {
    img: require('../assets/Community/LowCarb.png'),
    title: 'Carbs',
  },
  {
    img: require('../assets/Community/HighProtein.png'),
    title: 'Beef',
  },
  {
    img: require('../assets/Community/Vegetarian.png'),
    title: 'Vegean',
  },
  {
    img: require('../assets/Community/HighProtein.png'),
    title: 'Healthy',
  },
  {
    img: require('../assets/Community/Vegetarian.png'),
    title: 'Vegetan',
  },
  {
    img: require('../assets/Community/LowCarb.png'),
    title: 'Rice',
  },
  {
    img: require('../assets/Community/Vegetarian.png'),
    title: 'Vegetan',
  },
];

const data1 = [
  {
    id: '0',
    img: require('../assets/Community/Img.png'),
    title: 'Restaurant 1',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Restaurant - Opened',
  },
  {
    id: '1',
    img: require('../assets/Community/Img.png'),
    title: 'Restaurant 2',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Restaurant - Opened',
  },
  {
    id: '2',
    img: require('../assets/Community/Img.png'),
    title: 'Restaurant 3',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Restaurant - Opened',
  },
  {
    id: '3',
    img: require('../assets/Community/Img.png'),
    title: 'Restaurant 4',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Restaurant - Closed',
  },
  {
    id: '4',
    img: require('../assets/Community/Img.png'),
    title: 'Restaurant 5',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Restaurant - Opened',
  },
];

const RestaurantLists = memo(() => {
  const renderItem = useCallback(({ item }) => {
    const { img, title } = item;
    return <CategorySlider img={img} title={title} />;

    return(
      <Text> Category</Text>
  )

  }
  ,  []);

  const renderItem1 = useCallback(({ item }) => {
    const { img, title, tag, time, id } = item;
    return (
      <RestaurantItem
        id={id}
        img={img}
        title={title}
        tag={tag}
        time={time}
        noSave={true}
      />
    );
  }, []);

  const listHeaderComponent = () => {
    return (
      <>
        <Text style={styles.txtMayYouLike}>Browse Category</Text>
        <FlatList
          contentContainerStyle={styles.contentContainerStyleFlatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
        <Text style={styles.txtHottest}>20 Restautants Near You</Text>
      </>
    );
  };

  // return(
  
  //   <SearchBar
  //       placeholder="Type Here..."
  //       onChangeText={() =>{ console.log("searched")}}
  //       value={"search"}
  //     />
 

  // );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={listHeaderComponent}
        showsVerticalScrollIndicator={false}
        data={data1}
        renderItem={renderItem1}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default RestaurantLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },
  customButton: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },
  txtMayYouLike: {
    fontFamily: "Montserrat",
    fontWeight: '600',
    fontSize: 14,
    color: colors.title,
    marginLeft: 15,
    marginBottom: 15,
  },
  contentContainerStyleFlatList: {
    paddingLeft: 16,
  },
  txtHottest: {
    fontFamily: "Montserrat",
    fontWeight: '600',
    color: colors.title,
    fontSize: 13,
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 34,
  },
  contentContainerStyle: {
    paddingTop: 24,
    paddingBottom: getBottomSpace() + 24,
  },
});
