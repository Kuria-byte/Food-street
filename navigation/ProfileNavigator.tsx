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



/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */


 
 