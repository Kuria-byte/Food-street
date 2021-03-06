import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 import UpdateOnboardingStatus from '../hooks/updateOnBoardingStatus';

const data = [
  {
    title: 'Best restaurants in Pakistan',
    text: 'Order and Enjoy tasty.\n meals',
    image: require('../assets/Community/Restaurant.jpg'),
    bg: '#59b2ab',
  },
  {
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/Community/pizza.jpg'),
    bg: '#febe29',
  },
  {
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/Community/cakes.jpg'),
    bg: '#22bcb5',
  },
];

type Item = typeof data[0];




export default class OnBoardingScreen extends React.Component {

  _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
  
    // return OnboardingStatus;
    UpdateOnboardingStatus()
  }
  

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          data={data}
          onDone ={this._onDone}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
