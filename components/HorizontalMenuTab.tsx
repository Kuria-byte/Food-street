import React, { memo, useCallback } from 'react';
import { Text, TextInput, StyleSheet, FlatList, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import RestaurantItem from '../components/RestaurantItem';
import colors from '../assets/ultis/colors';
import FONTS from '../assets/ultis/fonts';
import keyExtractor from '../assets/ultis/KeyExtractor';
import CategorySlider from '../components/CategorySlider';
import CustomButton from '../components/CustomButton';
import { widthScreen } from '../assets/ultis/layout';
import SvgFilterSmall from '../svgs/Explorer/SvgFilterSmall';
import MenuItem from '../screens/MenuItem';
import SvgOrderList from'../svgs/Explorer/SvgOrderList';
import SvgOrderList1 from'../svgs/Explorer/SvgOrderList1';
import SvgOrderList2 from'../svgs/Explorer/SvgOrderList2';
import SvgOrderList3 from'../svgs/Explorer/SvgOrderList3';
import SvgOrderList4 from'../svgs/Explorer/SvgOrderList4';
import SvgOrderList5 from'../svgs/Explorer/SvgOrderList5';
import MenuCategorySlider from './Menuslider';


const dataListOrder = [
  {
    id: '0',
    name: 'Boneless Grilled Chicken & Biriyani Rice',
    rate: 4.5,
    svgName: <SvgOrderList />,
  },
  {
    id: '1',
    name: 'Za’atar Chicken and Couscous',
    rate: 4.5,
    svgName: <SvgOrderList2 />,
  },
  {
    id: '2',
    name: 'Sweet and Smoky Chicken Breasts',
    rate: 4.5,
    svgName: <SvgOrderList3 />,
  },
  {
    id: '3',
    name: 'Mexican Chicken and Rice Bowl',
    rate: 4.5,
    svgName: <SvgOrderList1 />,
  },
  {
    id: '4',
    name: 'Crispy Honey Chicken Cutlets',
    rate: 4.5,
    svgName: <SvgOrderList5 />,
  },
  {
    id: '5',
    name: 'Cheesy Chicken Shepherd’s Pie',
    rate: 4.5,
    svgName: <SvgOrderList4 />,
  },
  {
    id: '6',
    name: 'Cheesy Chicken Shepherd’s Pie',
    rate: 4.5,
    svgName: <SvgOrderList4 />,
  },
  {
    id: '7',
    name: 'Cheesy Chicken Shepherd’s Pie',
    rate: 4.5,
    svgName: <SvgOrderList4 />,
  },
  {
    id: '8',
    name: 'Cheesy Chicken Shepherd’s Pie',
    rate: 4.5,
    svgName: <SvgOrderList4 />,
  },
];

const data = [
  {
    img: require('../assets/Community/Restaurant.jpg'),
    title: 'All',
  },
  {
    img: require('../assets/Community/Traditional.jpg'),
    title: 'Soups',
  },
  {
    img: require('../assets/Community/pizza.jpg'),
    title: 'Pizza',
  },
  {
    img: require('../assets/Community/noodles.jpg'),
    title: 'Noodles',
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



const ScrollMenuTab = memo(() => {
    
  const renderCategoryItem = useCallback(({ item }) => {
    const { img, title } = item;
    return <View >
    
      <MenuCategorySlider img={img} title={title}/>
     <View style={styles.category}>
       <Text style={styles.categoryText} >{title}</Text>
     </View>
    </View>
  }
    , []);


  const listHeaderComponent = () => {
    return (
      <>
        <Text style={styles.txtMayYouLike}>Our Category</Text>
        <FlatList
          contentContainerStyle={styles.contentContainerStyleFlatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderCategoryItem}
          keyExtractor={keyExtractor}
           
        />
  
      </>
    );
  };


  const renderMenuItem = useCallback(({ item }) => {
;
    return (
      <MenuItem
      svgName={item.svgName} rate={item.rate} name={item.name}
      />
    );
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={listHeaderComponent}
        showsVerticalScrollIndicator={false}
        data={dataListOrder}
        renderItem={renderMenuItem}
        keyExtractor={keyExtractor}
      
      />
    </View>
  );
});

export default ScrollMenuTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },
  MenuSlider:{
height: 120,

    backgroundColor: colors.while,
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
    paddingBottom: 10
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
