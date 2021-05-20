import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { parse } from 'fast-xml-parser';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { setCurrentUser } from '../Redux/user/user-actions';
import { connect, useDispatch } from 'react-redux';
import { store } from '../Redux/Store';


export default function VerifyUser() {
    let [userName, setuserName] = React.useState('')
    let [password, setPassword] = React.useState('')
    let [phone, setPhone] = React.useState('')
    let [city, setCity] = React.useState('')
    let [district, setDistrict] = React.useState('')
    
    let _email = 'kashifmanzoor_net@hotmail.com'
    let _password = 'Abc123'


    let getXMLResponse = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/VerifyUserLogin?email=${_email}&password=${_password}`, {
            "method": "GET",
            "headers": {
                "host": "www.pkfoodstreet.com",
                "Content-Type": "application/xml; charset=utf-8"
            },
        })
            .then(async (response) => response.text())
            .then((textResponse) => {
                let obj = parse(textResponse);
                setuserName(obj.mUser.UserName)
                setPassword(obj.mUser.UserPassword)
                setPhone(obj.mUser.UserPhone)
                setDistrict(obj.mUser.DistrictID)
                setCity(obj.mUser.CityID)
                store.dispatch(setCurrentUser(obj.mUser))
                console.log(obj)
                console.log(store.getState())
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PK API Calls</Text>
            <Text>Using with fetch and Axios</Text>
            <TouchableHighlight onPress={getXMLResponse}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}> Fetch API</Text>
                </View>
            </TouchableHighlight>
            <View>
                <Text>Name: {userName}</Text>
                <Text>Phone: {phone}</Text>
                <Text>Pass: {password}</Text>
                <Text>City ID: {city}</Text>
                <Text>District ID: {district}</Text>
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

// const mapStateToProps = createStructuredSelector({
//     currentUser : selectCurrentUser,
//     shopCollections : selectCollectioinForPreview
//   });
