import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { parse } from 'fast-xml-parser';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
export default function MakeApiCall() {
    let [quote, setQuote] = React.useState('')


    let getXMLResponse = () => {
        fetch('https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/GetCityByCityID?id=1', {
            "method": "GET",
            "headers": {
                "host": "www.pkfoodstreet.com",
                "Content-Type": "application/xml; charset=utf-8"
            },
        })
            .then(async (response) => response.text())
            .then((textResponse) => {
                let obj = parse(textResponse);
                setQuote( obj.mCity.CityName)
                console.log(obj)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Native API Calls</Text>
            <Text>Example with fetch and Axios</Text>
            <TouchableHighlight onPress={getXMLResponse}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Use Fetch API</Text>
                </View>
            </TouchableHighlight>
            <View>
                <Text>{quote}</Text>
                {/* <Text>{source}</Text> */}
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