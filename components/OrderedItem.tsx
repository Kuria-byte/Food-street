import React, { memo, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FONTS from '../assets/ultis/fonts';
import ROUTES from '../assets/ultis/routes';
import SvgAdd from '../svgs/SvgAdd';
import SvgOrderList from '../svgs/Explorer/SvgOrderList';

interface PropsItemList {
    svgName?: any,
    name?: string,
    rate: number
}

const OrderedItem = memo((props: PropsItemList) => {
    const navigation = useNavigation();
    const [isActive, showActive] = useState(false)
    const isShowActive = useCallback(() => {
        showActive(!isActive)
    }, [isActive])
    return (
        <TouchableOpacity style={styles.container} >
            {/* <View style={styles.heightSvg}>
              
                <SvgOrderList/>
            </View> */}
            <View style={styles.viewContent}>
                <View style={styles.viewText}>
                    <View style={styles.ContainerTop}>
                        <Text style={styles.textName} > Arabina Restaurant</Text>
                        <Text style={styles.textHeader} > Rs. 150</Text>
                    </View>
                    <View style={styles.txtView}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.MenuDescription} >{props.name} {props.name}</Text>

                    </View>


                </View>

                <View style={styles.viewFooterContent}>

                    <Text style={styles.OrderDate} >10 May, 17: 25</Text>
                    <TouchableOpacity onPress={isShowActive}>
                        <Text style={styles.Price}>Delivered</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity >
    )
})

export default OrderedItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        borderRadius: 12,
        height: 105,
        shadowColor: 'rgba(141, 151, 158, 0.2)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16,
        flexDirection: 'row',
        marginTop: 16,
        marginHorizontal: 16
    }, ContainerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },txtView:{
        lineHeight: 24,
        flexDirection: 'row',
        maxWidth: 220
    }, OrderDate:{
        fontSize: 11,
        color: 'grey',
        fontWeight: '500',
        fontFamily: FONTS.Montserrat.Medium,
        lineHeight: 14,
        paddingTop: 20,
        paddingLeft: 4,
     
         

    },
    textHeader: {
        fontSize: 13,
        color: '#1D1E2C',
        fontWeight: '600',
        fontFamily: FONTS.Montserrat.Bold,
        lineHeight: 24,
        marginLeft: 120,


    },
    viewContent: {
        paddingHorizontal: 16,
        flex: 1
    },
    FoodHeight: {
        height: 180

    },
    MenuDescription: {
        fontSize: 11,
        color: 'grey',
        fontWeight: '500',
        fontFamily: FONTS.Montserrat.Medium,
        lineHeight: 14,
        paddingTop: 4,
        paddingLeft: 4,
        paddingBottom: 4,
         

    },
    Price: {
        fontSize: 11,
        color: 'green',
        fontWeight: '500',
        fontFamily: FONTS.Montserrat.Medium,
        lineHeight: 14,
        paddingTop: 19,
        paddingRight: 20

    },
    textName: {
        fontSize: 12,
        color: '#1D1E2C',
        fontWeight: '600',
        fontFamily: FONTS.Montserrat.Bold,
        lineHeight: 24
    },
    viewFooterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    heightSvg: {
        height: '100%',
        width: 120
    },
    viewText: {
        paddingVertical: 8,
        height: 48,
        paddingRight: 32,
        flex: 1
    }
})
