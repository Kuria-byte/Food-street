import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager,
} from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../assets/ultis/colors';
import MenuItem from './MenuItem';
import MenuList from './MenuList';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}


export default function RestaurantSection() {
  return (
    <View style={styles.secondMenu}>
      <Item />
      <Item />
      <Item />
     
    </View>
  );
}


function Item() {
  const [open, setopen] = useState(false);
  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setopen(!open);
  };
  return (
    <TouchableOpacity style={[styles.item, !open && { height: 40 }]} onPress={onPress} activeOpacity={1}>
      <Text>Fries</Text>
      {open && (
        <View style={styles.MenuItem} >
        <MenuItem name={"grilled chicken and rice"} rate={10}/>
        <MenuItem name={"grilled chicken and rice"} rate={10}/>
    
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  
  },
  secondMenu: {
    marginHorizontal: 24,
    backgroundColor: colors.while,
    borderRadius: 5,
    shadowColor: 'rgba(141, 151, 158, 0.4)',
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    marginTop: 16,

},
  item: {
    width: '100%',
    paddingHorizontal: 20,
    overflow: 'hidden',
    paddingVertical: 10,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 1,

  },
  MenuItem:{
   
    
  }
});
