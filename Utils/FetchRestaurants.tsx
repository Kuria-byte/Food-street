import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { parse } from 'fast-xml-parser';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { setCurrentUser } from '../Redux/user/user-actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../Redux/Store';
import { setRestaurants } from '../Redux/Restaurant/restaurant-actions';


export default function FetchRestaurants() {

    const user = useSelector((state: RootState) => state.CurrentUser);
    let {UserID, CityID, DistrictID, SubDistrictID} =user.CurrentUser
 

    let GetRestaurantsAPI = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/GetBusinessListByUserID?userid=${UserID}&cityid=${CityID}&districtid=${DistrictID}&subdistrictid=${SubDistrictID}`, {
            "method": "GET",
            "headers": {
                "host": "www.pkfoodstreet.com",
                "Content-Type": "application/xml; charset=utf-8"
            },
        })
            .then(async (response) => response.text())
            .then((textResponse) => {
                let obj = parse(textResponse);
                
                store.dispatch(setRestaurants(obj.ArrayOfMBusinessAPI.mBusinessAPI))
                console.log(obj)
                // console.log(store.getState())
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PK API Calls</Text>
            <Text>Using with fetch and Axios</Text>
            <TouchableHighlight onPress={GetRestaurantsAPI}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}> Fetch API</Text>
                </View>
            </TouchableHighlight>
            <View>
                {/* <Text>Name: {userName}</Text>
                <Text>Phone: {phone}</Text>
                <Text>Pass: {password}</Text>
                <Text>City ID: {city}</Text>
                <Text>District ID: {district}</Text> */}
            </View>
            <StatusBar style="auto" />
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AAA',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    },
    title: {
        fontSize: 35,
        color: '#fff'
    },
    button: {
        padding: 10,
        marginVertical: 15,
        backgroundColor: '#0645AD'
    },
    buttonText: {
        color: '#fff'
    }
});
