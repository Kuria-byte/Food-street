/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import {
  Text
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import MyProfileEdit from '../screens/MyProfileEdit';
import NotFoundScreen from '../screens/NotFoundScreen';
import {  RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import RestaurantMenu from '../screens/RestaurantMenu';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration} fallback={<Text>Loading...</Text>}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="MyProfileEdit" component={MyProfileEdit} options={{ headerTitle: 'My Profile', headerShown: true }} />
      <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} options={{ headerTitle: 'Restaurant', headerShown: true }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

    </Stack.Navigator>
  );


}