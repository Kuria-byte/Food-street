import React, { memo, useState, useCallback } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FONTS from "../assets/ultis/fonts";


interface PropsItemList {
    svgName?: any;
    name?: string;
    rate: number;
}

const OrderedItem = memo((props: PropsItemList) => {
    const navigation = useNavigation();
    const [isActive, showActive] = useState(false);
    const isShowActive = useCallback(() => {
        showActive(!isActive);
    }, [isActive]);
    return (
        <TouchableOpacity style={styles.container}>
            {/* <View style={styles.heightSvg}>
              
                <SvgOrderList/>
            </View> */}
            <View style={styles.viewContent}>
                <View style={styles.viewText}>
                    <View style={styles.ContainerTop}>
                        <Text style={styles.textName}> Arabina Restaurant </Text>
            
                        <Text style={styles.textHeader}> Rs. 150</Text>
                    </View>
                    <View style={styles.txtView}>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode="tail"
                            style={styles.MenuDescription}
                        >
                            {props.name}
                        </Text>

                    </View>
            
                   
                </View>

                <View style={styles.viewFooterContent}>
                    <View style={{flexDirection: "column" }}>
                    <Text style={styles.Price}>Delivered</Text>
                    <Text style={styles.OrderDate}>10 May, 17: 25</Text>
                   
                 
                    </View>
                    
               
                    <TouchableOpacity onPress={isShowActive}>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnOrder}>Oder Again</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
});

export default OrderedItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        borderRadius: 12,
        height: 132,
        shadowColor: "rgba(141, 151, 158, 0.2)",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16,
        flexDirection: "row",
        marginTop: 16,
        marginHorizontal: 16,
    }, btnOrder: {
        fontSize: 10,
        color: "white",
        fontWeight: "400",
        fontFamily: FONTS.Montserrat.Bold,
        marginTop: 6,
        textAlign: "center"

    },
    btnContainer: {
        backgroundColor: '#00BC22',
        width: 80,
        height: 30,
        borderRadius: 5,
        shadowColor: "rgba(141, 151, 158, 0.2)",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16,
        // paddingTop: 28

    },
    ContainerTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    txtView: {
        lineHeight: 24,
        flexDirection: "row",
        maxWidth: 235,
    }, txtStatus: {
        height: 12,
        flexDirection: "row",
        maxWidth: 235,
    },
    OrderDate: {
        fontSize: 11,
        color: "grey",
        fontWeight: "500",
        fontFamily: FONTS.Montserrat.Medium,
        marginTop: 5,
        paddingLeft: 4,
    },
    textHeader: {
        fontSize: 13,
        color: "#1D1E2C",
        fontWeight: "600",
        fontFamily: FONTS.Montserrat.Bold,
        lineHeight: 24,
        // marginLeft: 120,
    },
    viewContent: {
        paddingHorizontal: 16,
        flex: 1,
    },
    FoodHeight: {
        height: 180,
    },
    MenuDescription: {
        fontSize: 11,
        color: "grey",
        fontWeight: "500",
        fontFamily: FONTS.Montserrat.Medium,
        lineHeight: 14,
        paddingTop: 4,
        paddingLeft: 4,
        paddingBottom: 6,
    },
    Price: {
        fontSize: 11,
        color: "green",
        fontWeight: "500",
        fontFamily: FONTS.Montserrat.Medium,
        marginTop: 12,
        marginLeft: 4
     
    },
    textName: {
        fontSize: 12,
        color: "#1D1E2C",
        fontWeight: "600",
        fontFamily: FONTS.Montserrat.Bold,
        lineHeight: 24,
    },
    viewFooterContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        textAlign: "left"
    },
    heightSvg: {
        height: "100%",
        width: 120,
    },
    viewText: {
        paddingVertical: 8,
        height: 48,
        paddingRight: 32,
        flex: 1,
    },
});
