// fname=string&lname=string&email=string&phone=string&password=string&cityid=string&districtid=string&subdivisionid=string&address=string

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { parse } from 'fast-xml-parser';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
export default function PostUserTest() {
    let [userName, setuserName] = React.useState('')




    let _fname = 'Ian'
    let _lname = 'Kuria'
    let _email = 'ian@gmail.com'
    let _phone = '07228952415'
    let _password = '12345'
    let _cityID = '1'
    let _districtID = '1'
    let _subdivisionid = '2'
    let _userAddress = 'KarachiPakistan'
    

    // let url = 'https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser?fname=ian&lname=Kuria&email=ian@gmail.com&phone=07228952415&password=12345&cityid=1&districtid=1&subdivisionid=2&address=f29-40KarachiPakistan'
    // let url2 = `https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser?fname=${_fname}&lname=${_lname}&email=${_email}&phone=${_phone}&password=${_password}&cityid=${_cityID}&districtid=${_districtID}&subdivisionid=${_subdivisionid}&address=${_userAddress}`
    let url3 = 'https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser'
    let url4 = 'https://cors-anywhere.herokuapp.com//http://tempuri.org/AddNewUser'
    // let url5 = `https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser?${params}`
    let url6 = `https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser`

    let PostData = () => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url3, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded" )
   
       

        xhr.onreadystatechange = function () { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Request finished. Do processing here.
                let obj = parse(this.responseText);

                console.log(obj)
            } else {
                console.log(this.onerror)
            }
        }
        xhr.send(`fname=${_fname}&lname=${_lname}&email=${_email}&phone=${_phone}&password=${_password}&cityid=${_cityID}&districtid=${_districtID}&subdivisionid=${_subdivisionid}&address=${_userAddress}`)

    }





    let url = 'https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser?fname=Ian&lname=Kuria&email=ian@gmail.com&phone=07228952415&password=12345&cityid=1&districtid=1&subdivisionid=2&address=f29-40KarachiPakistan'
    let url2 = `https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser?fname=${_fname}&lname=${_lname}&email=${_email}&phone=${_phone}&password=${_password}&cityid=${_cityID}&districtid=${_districtID}&subdivisionid=${_subdivisionid}&address=${_userAddress}`
   
    let AddUserApi = () => {
        fetch(url2, {
            "method": "POST",
            "headers": {
                "host": "www.pkfoodstreet.com",
                "Content-Type": "application/x-www-form-urlencoded",
                'Content-Length': "length",
            },
        })
            .then(async (response) => response.text())
            .then((textResponse) => {
                let obj = parse(textResponse);
                console.log(obj)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    let getXMLResponse = () => {
        fetch(url2, {
            "method": "POST",
            "headers": {
                "host": "www.pkfoodstreet.com",
                "Content-Type": "text/xml; charset=utf-8",
                'Content-Length': "length",
            },
        })
            .then(async (response) => response.text())
            .then((textResponse) => {
                // let obj = parse(textResponse);
                // setuserName(obj.mCity.userName)
                console.log(textResponse)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Native API Calls</Text>
            <Text>Example with fetch and Axios</Text>
            <TouchableHighlight onPress={PostData}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Use Fetch API</Text>
                </View>
            </TouchableHighlight>
            <View>
                <Text>{userName}</Text>
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