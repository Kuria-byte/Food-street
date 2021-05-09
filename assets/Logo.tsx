
import React from 'react';

import {View, Image} from 'react-native';

const PKLogo = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{
          uri:
            'https://ibb.co/0s9S8hd',
        }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 80 / 2,
          marginLeft: 100,
        }}
      />
    </View>
  );
};

export default PKLogo;