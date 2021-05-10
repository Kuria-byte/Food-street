/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          RestaurantList: {
            screens: {
              TabOneScreen: 'RestaurantList',
            },
          },
          Cart: {
            screens: {
              Cart: 'Cart',
            },
          }, MyProfile: {
            screens: {
              MyProfileEdit: 'MyProfileEdit',
              MyProfile: 'MyProfile'
            },
            
          },
        },
      },
      NotFound: '*',
    },
  },
};
