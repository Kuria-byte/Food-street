import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { widthScreen } from '../assets/ultis/layout';
function LogoTitle() {
  return (
    <Image
      style={{ flex: 1,
        width: 250,
        height: 90,
        resizeMode: 'contain' }}
      source={require('../assets/Community/logo.png')}
    />
  );
}



export default LogoTitle;
