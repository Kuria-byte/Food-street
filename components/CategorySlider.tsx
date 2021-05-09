import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
// import FONTS from'app/ultis/fonts';
import colors from '../assets/ultis/colors/index';
import { widthScreen } from '../assets/ultis/layout';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

interface Props {
    img: any;
    title: string;
}

const CategorySlider = (props: Props) => {
    return (

        <View style={styles.categorySlider}  >
            <ImageBackground source={props.img} style={styles.imgBackGround} />
        
         </View>
         

    );

};

export default CategorySlider;

const styles = StyleSheet.create({
    categorySlider: {
        marginRight: 14,
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        borderWidth: 3,
        borderColor: "green"

    },
   
    txtTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 16,
        color: colors.while,
        textTransform: 'uppercase',
        marginTop: 16,
        marginLeft: 16,
    },
    imgBackGround: {
        width: 74,
        height: 74,
        borderRadius: 74 / 2,
        overflow: "hidden",

    },
    avatarView: {
        top: getStatusBarHeight() + 44,
        left: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtHottest: {
        fontFamily: "Montserrat",
        fontWeight: '600',
        color: colors.title,
        fontSize: 14,
        alignItems: 'center',

    },
});
