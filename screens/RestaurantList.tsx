import React, { memo, useCallback } from 'react';
import { Text, TextInput, StyleSheet, FlatList, View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import RestaurantItem from '../components/RestaurantItem';
import colors from '../assets/ultis/colors';
import keyExtractor from '../assets/ultis/KeyExtractor';
import CategorySlider from '../components/CategorySlider';

import { widthScreen } from '../assets/ultis/layout';



const data = [
  {
    img: require('../assets/Community/Traditional.jpg'),
    title: 'Traditional',
  },
  {
    img: require('../assets/Community/pizza.jpg'),
    title: 'Pizza',
  },
  {
    img: require('../assets/Community/noodles.jpg'),
    title: 'Chinese',
  },
  {
    img: require('../assets/Community/rice.jpg'),
    title: 'Sides',
  },
  {
    img: require('../assets/Community/cakes.jpg'),
    title: 'Desserts',
  },
  {
    img: require('../assets/Community/coffee1.jpg'),
    title: 'Bevarages',
  },
  {
    img: require('../assets/Community/starters.jpg'),
    title: 'Starters',
  },
];

const data1 = [
  {
    id: '0',
    img: require('../assets/Community/restaurant6.jpg'),
    title: 'Restaurant 1',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Restaurant - Opened',
  },
  {
    id: '1',
    img: require('../assets/Community/restaurant2.jpg'),
    title: 'Restaurant 2',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Restaurant - Opened',
  },
  {
    id: '2',
    img: require('../assets/Community/Restaurant3.jpg'),
    title: 'Restaurant 3',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Restaurant - Opened',
  },
  {
    id: '3',
    img: require('../assets/Community/restaurant4.jpg'),
    title: 'Restaurant 4',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Restaurant - Closed',
  },
  {
    id: '4',
    img: require('../assets/Community/Restaurant5.jpg'),
    title: 'Restaurant 5',
    tag: ['#nutrition', '#lowcarb'],
    time: 'Restaurant - Opened',
  },
];



const RestaurantLists = memo(() => {
  const renderItem = useCallback(({ item }) => {
    const { img, title } = item;
    return <View>
      <CategorySlider img={img} title={title} />
     <View style={styles.category}>
       <Text style={styles.categoryText} >{title}</Text>
     </View>
    </View>

  }
    , []);

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
        <View style={styles.searchBar}>

          <TextInput
            style={styles.input}
            inlineImageLeft='search_icon'
            placeholder={"Search restaurants ..."}
          />

        </View>

        <Text style={styles.txtHottest}>20 Restautants Near You</Text>
      </>
    );
  };


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
  category:{
    marginTop:6,
    flex:1,
    justifyContent: "center",
    alignItems: "center",
 
    
  },
  categoryText:{
    fontFamily: "Montserrat",
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
    marginLeft: -1,
  }
  ,
  input: {
    height: 40,
    fontFamily: "Montserrat",
    fontWeight: '400',
    paddingLeft: 15,
    fontSize: 14,
    color: colors.title,
    marginLeft: 15,
    marginBottom: 15,
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 6,
    minHeight: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0,
  },
  searchBar: {
    marginTop: 15,
    marginBottom: -17,
    marginRight: 15,
    paddingRight: 15,
    width: widthScreen,


  },

  txtMayYouLike: {
    fontFamily: "Montserrat",
    fontWeight: '600',
    fontSize: 13,
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
