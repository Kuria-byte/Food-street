import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyProfileEdit from '../screens/MyProfileEdit';
import ROUTES from '../assets/ultis/routes';
import { MyProfileEditScreenParamList } from '../types';


const Stack = createStackNavigator<MyProfileEditScreenParamList>();

const ProfileNavigation = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MyProfileEdit'
        component={MyProfileEdit}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
});

export default ProfileNavigation;

// const TabFourStack = createStackNavigator<MyProfileEditScreenParamList>();

// function TabFourNavigator() {
//   return (
//     <TabFourStack.Navigator>
//       <TabFourStack.Screen
//         name="MyProfileEdit"
//         component={MyProfileEdit}
//         options={{ headerTitle: 'My Profile ', headerShown: false }}
//       />
//     </TabFourStack.Navigator>
//   );
// }


/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

//  import { Ionicons } from '@expo/vector-icons';
//  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//  import { createStackNavigator } from '@react-navigation/stack';
//  import * as React from 'react';
 
//  import Colors from '../constants/Colors';
//  import useColorScheme from '../hooks/useColorScheme';
//  import RestaurantList from '../screens/RestaurantList';
//  import UserProfile from '../screens/UserProfileScreen';
//  import CartScreen from '../screens/CartScreen';
//  import Profile from '../screens/TestUSerProfile';
//  import { MyProfileEditScreenParamList } from '../types';
//  import RestaurantItem from '../components/RestaurantItem';
//  import Restaurants from '../screens/Restaurants';
//  import SvgLogo from '../svgs/Login/SvgLogo';
//  import PKLogo from '../assets/Logo';
//  import { ImageBackground } from 'react-native';
//  import SvgFilter from '../svgs/SignUp/SvgFilter';
//  import MyProfileEdit from '../screens/MyProfileEdit';
 

// //  // You can explore the built-in icon families and icons on the web at:
// //  // https://icons.expo.fyi/
// //  function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
// //    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// //  }
 
//  // Each tab has its own navigation stack, you can read more about this pattern here:
//  // https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
//  const ProfileScreenStack = createStackNavigator<MyProfileEditScreenParamList>();
 
//  function MyProfileNavigator() {
//    return (
//      <ProfileScreenStack.Navigator>
//        <ProfileScreenStack.Screen
//          name="MyProfileEdit"
//          component={MyProfileEdit}
//          options={{ headerTitle: 'My Profile ', headerShown: false }}
//        />
 
//      </ProfileScreenStack.Navigator>
 
 
//    );
//  }
 
//  const TabTwoStack = createStackNavigator<UserProfileScreenParamList>();
 
//  function TabTwoNavigator() {
//    return (
//      <TabTwoStack.Navigator>
//        <TabTwoStack.Screen
//          name="UserProfile"
//          component={Profile}
//          options={{ headerTitle: 'My Account ', headerShown: false }}
//        />
//      </TabTwoStack.Navigator>
//    );
//  }
 
 