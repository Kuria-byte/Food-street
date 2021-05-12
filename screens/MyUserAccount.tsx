import React, {memo, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {widthScreen} from '../assets/ultis/layout';
import colors from '../assets/ultis/colors';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';


import SvgRightArrow from '../svgs/Profile/SvgRightArrow';
import PrimaryItem from'./PrimaryItem';
import SvgOrderHistory from '../svgs/Profile/SvgOrderHistory';

import SvgPaymentMethod from '../svgs/Profile/SvgPaymentMethod';
import SvgDeliveryAddress from '../svgs/Profile/SvgDeliveryAddress';
import SecondMenuItem from'./SecondMenuItem';
import {useNavigation} from '@react-navigation/native';
import ROUTES from '../assets/ultis/routes';
import SvgProfile from '../svgs/Profile/SvgProfile';
import SvgInvite from '../svgs/Profile/SvgInvite';
import SvgIcon2People from '../svgs/SignUp/SvgIcon2People';
import SvgAdd from '../svgs/SvgAdd';
import SvgIconRecovery from '../svgs/Login/SvgIconRecovery';
import SvgLogo from '../svgs/Login/SvgLogo';
import SvgIconInfo from '../svgs/SignUp/SvgIconInfo';
import SvgChecked from '../svgs/SvgChecked';
import SvgSettings from '../svgs/Profile/SvgSettings';


const data = {
  avatar: require('../assets/Profile/avatar.png'),
  userName: 'Ian Kuria',
  gmail: 'ian@gmail.com',
  numberNotification: '3',
  walaPoint: '+601-456-4500',
  orderHistory: true,
};

const Profile = memo(() => {
  const navigation = useNavigation();

  const onOrderHistory = useCallback(() => {
    navigation.navigate('ProfileOrderHistory');
  }, [navigation]);

  const onPaymentMethod = useCallback(() => {
    navigation.navigate(ROUTES.ProfilePaymentMethod);
  }, [navigation]);

  const onProfileMyAddress = useCallback(() => {
    navigation.navigate(ROUTES.ProfileMyAddress);
  }, [navigation]);

  const onMyProfile = useCallback(() => {
    navigation.navigate('MyProfileEdit');
  }, [navigation]);

  // const onSavedArticle = useCallback(() => {
  //   navigation.navigate(ROUTES.ProfileSaveArticle);
  // }, [navigation]);

  // const onSettings = useCallback(() => {
  //   navigation.navigate(ROUTES.ProfileSettings);
  // }, [navigation]);

  // const onProfileInvite = useCallback(() => {
  //   navigation.navigate(ROUTES.ProfileInvite);
  // }, [navigation]);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={styles.contentContainerStyle}>
      <ImageBackground
        style={styles.imgBackGround}
        source={require('../assets/Profile/bg.png')}>
        <View style={styles.avatarView}>
          <Image source={data.avatar} />
          <View style={styles.information}>
            <Text style={styles.txtUserName}>{data.userName}</Text>
            <Text style={styles.txtGmail}>{data.gmail}</Text>
          </View>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.notificationView}>

        {/* <View style={styles.numberNotificationView}>
          <Text style={styles.numberNotification}>
            {data.numberNotification}
          </Text>
        </View> */}
      </TouchableOpacity>
      <View style={styles.primaryMenu}>
        <View style={styles.walaPointView}>
          <Text style={styles.txtPoint}>
            <Text style={styles.txtWalaPoint}></Text>
            {data.walaPoint}
          </Text>
          <TouchableOpacity style={styles.getMoreView}>
            <Text style={styles.txtGetMore}>Edit info </Text>
            <View style={styles.svg}>
              <SvgRightArrow />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.primaryItemView}>
          <PrimaryItem
            onPress={onOrderHistory}
            svg={<SvgOrderHistory />}
            title={'Order\nHistory'}
          />
          <PrimaryItem
            onPress={onPaymentMethod}
            svg={<SvgPaymentMethod />}
            title={'Payment\nMethod'}
          />
          <PrimaryItem
            onPress={onProfileMyAddress}
            svg={<SvgDeliveryAddress />}
            title={'Delivery\nAddress'}
          />
        </View>
      </View>
      <View style={styles.secondMenu}>
        <SecondMenuItem
          onPress={onMyProfile}
          svg={<SvgProfile />}
          title={'My Profile'}
        />
     
        <SecondMenuItem
          
          svg={<SvgChecked/>}
          title={'About Us'}
        />
        <SecondMenuItem
         
          svg={<SvgSettings/>}
          title={'Get Help'}
        />
      </View>
    </ScrollView>
  );
});

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  imgBackGround: {
    width: widthScreen,
    height: 270,
  },
  avatarView: {
    top: getStatusBarHeight() + 44,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  information: {
    marginLeft: 20,
  },
  txtUserName: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '500',
    fontSize: 20,
    color: colors.while,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 0,
  },
  txtGmail: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: colors.while,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 0,
  },
  notificationView: {
    position: 'absolute',
    right: 0,
    top: 54,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberNotificationView: {
    position: 'absolute',
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    top: 5,
  },
  primaryMenu: {
    marginHorizontal: 24,
    backgroundColor: colors.while,
    borderRadius: 12,
    shadowColor: 'rgba(141, 151, 158, 0.4)',
    shadowRadius: 30,
    marginTop: -80,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
  },
  walaPointView: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    paddingBottom: 13,
  },
  txtPoint: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    fontSize: 14,
    color: colors.title,
  },
  txtWalaPoint: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    color: colors.title,
    fontWeight: 'normal',
  },
  getMoreView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtGetMore: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: colors.orangeLight,
    fontWeight: 'normal',
  },
  svg: {
    marginTop: 2,
  },
  primaryItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 45,
    marginTop: 24,
    marginBottom: 16,
  },
  secondMenu: {
    marginHorizontal: 24,
    backgroundColor: colors.while,
    borderRadius: 12,
    shadowColor: 'rgba(141, 151, 158, 0.4)',
    shadowRadius: 30,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    marginTop: 16,
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 56,
  },
  numberNotification: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    color: colors.while,
  },
});
