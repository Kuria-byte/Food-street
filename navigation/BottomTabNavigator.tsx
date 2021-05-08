/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import RestaurantList from '../screens/RestaurantListScreen';
import UserProfile from '../screens/UserProfileScreen';
import CartScreen from '../screens/CartScreen';
import Profile from '../screens/TestUSerProfile';
import { BottomTabParamList, RestaurantScreenParamList, UserProfileScreenParamList, CartScreenParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Restaurants"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Restaurants"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-restaurant" color={"green"} />,
        }}
      />

      <BottomTab.Screen
        name="Cart"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-cart" color={"green"} />,
        }}
      />

      <BottomTab.Screen
        name="User"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={"green"} />,
        }}
      />


    </BottomTab.Navigator>

  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<RestaurantScreenParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="RestaurantList"
        component={RestaurantList}
        options={{ headerTitle: 'Food Street' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<UserProfileScreenParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="UserProfile"
        component={Profile}
        options={{ headerTitle: 'My Account ' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<CartScreenParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerTitle: 'Cart ' }}
      />
    </TabThreeStack.Navigator>
  );
}
