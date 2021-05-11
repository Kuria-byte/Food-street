import React, { memo, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import InactiveRate from'app/components/InactiveRate';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SvgBookMark from '../svgs/Explorer/SvgBookMark'
import FONTS from'../assets/ultis/fonts';
import ROUTES from'../assets/ultis/routes';
import SvgAdd from '../svgs/SvgAdd';
import SvgOrderList from '../svgs/Explorer/SvgOrderList';

interface PropsItemList {
    svgName?: any,
    name?: string,
    rate: number
}

const MenuItem = memo((props: PropsItemList) => {
    const navigation = useNavigation();

    const onDetail = useCallback(() => {
        navigation.navigate(ROUTES.RecipeDetail, {
            IsExplorer: true
        });
    }, [navigation]);
    const [isActive, showActive] = useState(false)
    const isShowActive = useCallback(() => {
        showActive(!isActive)
    }, [isActive])
    return (
        <TouchableOpacity style={styles.container} onPress={onDetail}>
            <View style={styles.heightSvg}>
                {/* {props.svgName} */}
                <SvgOrderList/>
            </View>
            <View style={styles.viewContent}>
                <View style={styles.viewText}>
                    <Text style={styles.textName} >{props.name}</Text>
                </View>
                
                <View style={styles.viewFooterContent}>
                <Text style={styles.MenuDescription}>Rs. 500 </Text>
                    <TouchableOpacity onPress={isShowActive}>
                        <SvgAdd  />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity >
    )
})

export default MenuItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        borderRadius: 12,
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
    },
    viewContent: {
        paddingHorizontal: 16,
        flex: 1
    },
    FoodHeight:{
        height: 180

    },
    MenuDescription:{
        fontSize: 12,
        color: 'green',
        fontWeight: '500',
        fontFamily: FONTS.Montserrat.Medium,
        lineHeight: 14,
        paddingTop: 4

    },
    Price:{
        fontSize: 12,
        color: 'green',
        fontWeight: '500',
        fontFamily: FONTS.Montserrat.Medium,
        lineHeight: 14,
        paddingTop: 4

    },
    textName: {
        fontSize: 12,
        color: '#1D1E2C',
        fontWeight: '600',
        fontFamily: FONTS.Montserrat.Medium,
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
