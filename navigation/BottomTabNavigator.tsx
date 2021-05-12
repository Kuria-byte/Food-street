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
import RestaurantList from '../screens/RestaurantList';

import CartScreen from '../screens/CartScreen';
import Profile from '../screens/MyUserAccount';
import { BottomTabParamList, RestaurantScreenParamList, UserProfileScreenParamList, CartScreenParamList } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import LogoTitle from '../components/HeaderLogo';
import NotFoundScreen from '../screens/NotFoundScreen';


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
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-restaurant-outline" color={"#0EAD69"} />
        }}
      />


      <BottomTab.Screen
        name="Cart"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-cart-outline" color={"#0EAD69"} />, tabBarBadge: 3
        }}
      />

     <BottomTab.Screen
        name="Orders"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-time-outline" color={"#0EAD69"} />,
        }}
      />

      <BottomTab.Screen
        name="User"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person-outline" color={"#0EAD69"} />,
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
        options={{
          headerStyle: {
            backgroundColor: '#249843',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, headerTitle: props => <LogoTitle  />,
          headerBackground: (props) => <LinearGradient colors={['#108623', '#00ff87']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }} />,


        }}


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
        options={{ headerTitle: 'My Account ', headerShown: false,  }}
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
        options={{ headerTitle: 'Cart ', headerTitleStyle: {color: 'white'}, headerShown: true,  headerBackground: (props) => <LinearGradient colors={['#108623', '#00ff87']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} />, }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<BottomTabParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Orders"
        component={NotFoundScreen}
        options={{ headerTitle: 'Order History ', headerTitleStyle: {color: 'white'}, headerShown: true,  headerBackground: (props) => <LinearGradient colors={['#108623', '#00ff87']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} />, }}
      />
    </TabFourStack.Navigator>
  );
}



