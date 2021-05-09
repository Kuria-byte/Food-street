import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
 import  Rating  from '../components/Rating';

import SvgBookMark from '../svgs/SvgBookMark';
import SvgOption from '../svgs/SvgOption';
import SvgRightArrow from '../svgs/Profile/SvgRightArrow';
import FONTS from'../assets/ultis/fonts';
import colors from '../assets/ultis/colors/index';
import {widthScreen} from '../assets/ultis/layout';
import {useNavigation} from '@react-navigation/native';
import ROUTES from '../assets/ultis/routes';


interface Props {
  id: string;
  img: any;
  title: string;
  tag: string[];
  time: string;
  saved?: boolean;
  noSave?: boolean;
}

const RestaurantItem = (props: Props) => {
  const [focus, setFocus] = useState(props.noSave ? false : true);
  const onFocus = useCallback(() => {
    setFocus(!focus);
  }, [focus]);

  const navigation = useNavigation();

  const onNewsNutritionDetail = useCallback(() => {
    navigation.navigate(ROUTES.NewsNutritionDetail);
  }, [navigation]);

  return (
    <TouchableOpacity
      onPress={onNewsNutritionDetail}
      style={styles.RestaurantItem}>
      <Image style={styles.img} source={props.img} />
      <Text style={styles.txtTitle}>{props.title} -  <Rating rate={4} /></Text>
      {/* <View style={styles.rateView}>
          <Rating rate={5} />
          <Text style={styles.txtNumber}>
          </Text>
        </View> */}
      <View style={styles.tagView}>
       
   <Text style={styles.txtTag}>This BBQ is famous in Town for having the most unique and flavorful BBQ items for our visitors.</Text>

      </View>
   
      <View style={styles.bottomView}>
        <Text style={styles.txtTime}>{props.time}</Text>
        <View style={styles.setRow}>
          <TouchableOpacity onPress={onFocus} style={styles.svgBookMark}>
        
            <Text></Text>
      
          </TouchableOpacity>
          <TouchableOpacity style={styles.svgOption}>
          <SvgRightArrow />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  RestaurantItem: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.while,
    marginBottom: 16,
    overflow: 'hidden',
    marginHorizontal: 16,
  },
  txtTitle: {
    marginHorizontal: 16,
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
    color: colors.title,
    marginTop: 12,
    marginBottom: 8,
  },
  txtNumber: {
    marginLeft: 16,
    fontSize: 10,
    lineHeight: 17,
    fontFamily: "Montserrat",
    color: '#1D1E2C',
  },
  txtUnit: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Montserrat-Regular",
    color: '#1D1E2C',
  },
  rateView: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 16,
  },
  txtTag: {
    // fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: colors.title,
    fontStyle: 'normal',
    fontWeight: '500',
    marginRight: 4,
    flex: 1,
    flexWrap: 'wrap'
  },
  txtTime: {
    // fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: colors.gray0,
    fontWeight: '500',
  },
  img: {
    width: widthScreen,
    height: 150,
  },
  tagView: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  bottomView: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 6,
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'center',
  },
  setRow: {
    flexDirection: 'row',
  },
  svgBookMark: {
    marginRight: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgOption: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
