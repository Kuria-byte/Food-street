/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';


export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    initialRouteName: 'ResttauranrList',
    screens: {
      Root: {
        screens: {
          Restaurants: {
            screens: {
              Restaurants: "Restaurants",
              RestaurantList: 'RestaurantList',
              RestaurantMenu: 'RestaurantMenu',
            },
          },
          Cart: {
            screens: {
              Cart: 'Cart',
            },
          }, User: {
            screens: {
              UserProfile: 'UserProfile',
              MyProfileEdit: 'MyProfileEdit',
              
            },
          },
          Orders:{
            screens:{
              Orders: 'Orders'
            }
          },
          Onboarding:{
            screens:{
              Onboarding: 'OnBoarding'
            }
          }
        },
      }, 
      //   MyProfileEdit: {
      //     screens: {
      //       MyProfileEdit: 'MyProfileEdit',
      //       path: 'MyProfileEdit',
      //     }
      //   }
      // ,
      NotFound: '*',
    },
  },
};
