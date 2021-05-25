import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { parse } from 'fast-xml-parser';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function PostUser() {
    let [response, setresponse] = React.useState('')

    let _fname = "React"
    let _lname = "Test"
    let _email = "react@gmail.com"
    let _phone = "07228952415"
    let _password = "12345"
    let _cityID = "1"
    let _districtID = "1"
    let _subdivisionid = "1"
    let _userAddress = "F9-KarachiPakistan"

    var params='fname='+ _fname +'&lname='+ _lname+'&email='+ _email+'&phone='+ _phone+'&password='+ _password+'&cityid='+ _cityID +'&districtid='+ _districtID+'&subdivisionid='+ _subdivisionid+'&address='+ _userAddress
    let url = `https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser`


    // XMLHTTP - IMPLEMENTATION
    var xhr = new XMLHttpRequest();
    let xmlObject
    let PostData = () => {
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

        xhr.onreadystatechange = function () { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Request finished. Do processing here.
                xmlObject = parse(xhr.responseText)
                console.log(xmlObject)
                setresponse(xmlObject.int)
            }
        }
        xhr.send(params);
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
                <Text>{response}</Text>
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