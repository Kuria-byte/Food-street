import React, { memo, useCallback } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { widthScreen } from '../assets/ultis/layout';
import colors from '../assets/ultis/colors';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import FONTS from '../assets/ultis/fonts';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../assets/ultis/routes';
import Rating from '../components/Rating';
import SvgCalendar from '../svgs/SignUp/SvgCalendar';
import SvgCookTime from '../svgs/SignUp/SvgCookTime';
import ScrollMenuTab from '../components/HorizontalMenuTab';



const data = {
    avatar: require('../assets/Profile/avatar.png'),
    userName: 'Ian Kuria',
    gmail: 'ian@gmail.com',
    numberNotification: '3',
    walaPoint: 'Restaurant 1',
    orderHistory: true,
};


const RestaurantMenu = memo(() => {
    const navigation = useNavigation();

    const onOrderHistory = useCallback(() => {
        navigation.navigate('ProfileOrderHistory');
    }, [navigation]);

    const onPaymentMethod = useCallback(() => {
        navigation.navigate(ROUTES.ProfilePaymentMethod);
    }, [navigation]);



    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            // stickyHeaderIndices={[]}
            bounces={false}
            contentContainerStyle={styles.contentContainerStyle}>
            <ImageBackground
                style={styles.imgBackGround}
                source={require('../assets/Community/Restaurant.jpg')}>

            </ImageBackground>
            <TouchableOpacity style={styles.notificationView}>

            </TouchableOpacity>
            <View style={styles.primaryMenu}>
                <View style={styles.walaPointView}>
                    <Text style={styles.txtPoint}>
                        <Text style={styles.txtWalaPoint}></Text>
                        {data.walaPoint}
                    </Text>
                    <TouchableOpacity style={styles.getMoreView}>
                        <Text style={styles.txtGetMore}>  <Rating rate={4} /> </Text>

                    </TouchableOpacity>
                </View>


                <View style={styles.primaryItemView}>
                    <Text style={styles.txtTag}>This BBQ is famous in Town for having the most unique and flavorful BBQ items for our visitors.</Text>

                </View>

                <View style={styles.Calendar}>
                    <SvgCalendar />
                    <Text style={styles.svgText}>Monday - Sunday </Text>
                </View>
                <View style={styles.svg}>

                    <SvgCookTime />
                    <Text style={styles.svgText}> 10:00 AM - 02:00 AM - Open now  </Text>

                </View>

            </View>

            <View style={styles.MenuTab}>
                <ScrollMenuTab />
                {/* <RestaurantSection/> */}
            </View>
        </ScrollView>
    );
});

export default RestaurantMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7FB',
    },
    tabarUnLine: {
        backgroundColor: "#0EAD69",
        height: 2
    },
    tabarText: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 12,
        fontWeight: "400"
    }, MenuTab: {
        width: widthScreen,
        paddingTop: 18
    },
    svgText: {
        fontFamily: 'Montserrat',
        fontWeight: '300',
        fontSize: 12,
        textShadowRadius: 0,
        paddingLeft: 6

    }, Calendar: {
        marginTop: 0,
        marginLeft: 30,
        marginBottom: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingBottom: 8,

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
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0,
    },
    txtGmail: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        color: colors.while,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0, height: 1 },
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
        shadowOffset: { width: 0, height: 3 },
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
        fontFamily: 'Montserrat-Bold',
        fontSize: 13,
        color: colors.title,
        fontWeight: '600',
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
        marginTop: -5,
        marginBottom: 6,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 30,
        paddingBottom: 8,


    },
    primaryItemView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
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
        shadowOffset: { width: 0, height: 3 },
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
    txtTag: {
        fontFamily: "Montserrat",
        fontSize: 12,
        color: colors.title,
        fontStyle: 'normal',
        fontWeight: '500',
        marginRight: 4,
        marginLeft: -16,
        marginTop: -10,
        flex: 1,
        flexWrap: 'wrap'
    }, tagView: {
        flexDirection: 'row',
        marginLeft: 6,
    },
});
