import React, {memo} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements'
import SvgOption from '../svgs/SvgOption';
import FONTS from'../assets/ultis/fonts';
import {widthScreen} from '../assets/ultis/layout';
import SvgAdd from '../svgs/SvgAdd';
import SvgSub from '../svgs/SignUp/SvgSub';
import SvgCloseLinear from '../svgs/SvgCloseLinear';
import SvgDelete from '../svgs/SelectDeliveryAddress/SvgDelete';
import { TextInput } from 'react-native-gesture-handler';
interface RIProps {
  img: ImageSourcePropType;
  recipeName: string;
  numServing: number;
}
const CheckOutItem = memo((props: RIProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={props.img} style={styles.img} />
      <View style={styles.info}>
        <View style={styles.flexRow}>
          <Text style={styles.txtName}>{props.recipeName}</Text>
          <TouchableOpacity style={styles.btnOption}>
        
          <Icon  size={20} color="red" name='trash' style={styles.minusBtn}
  type='font-awesome' />
          <Text style={styles.qtyText}> 2 </Text>
          <Icon size={20} color="black" name='plus' style={styles.AddBtn}
  type='font-awesome' />
           
          </TouchableOpacity>
        </View>
        <Text style={styles.txtNumServing}>Rs. 50 </Text>
      </View>
    </TouchableOpacity>
  );
});

export default CheckOutItem;
const styles = StyleSheet.create({
  img: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  AddBtn:{
    marginTop: 1,
    paddingLeft: 4

  },
  minusBtn:{
    paddingRight: 4

  }, qtyText:{
    color: '#1D1E2C',
    fontSize: 12,
    marginTop: 2,
   
    fontFamily: "Montserrat",
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthScreen - 48,
    marginBottom: 16,
  },
  info: {
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 16,
  },
  flexRow: {
    flexDirection: 'row',
  },
  txtName: {
    color: '#1D1E2C',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Montserrat",
    flex: 1,
  },
  btnOption: {
    padding: 0,
    marginLeft: 16,
    flexDirection: 'row',

  },
  txtNumServing: {
    color: '#7D8699',
    fontSize: 12,
    lineHeight: 15,
    fontFamily: "Montserrat",
  },
});
