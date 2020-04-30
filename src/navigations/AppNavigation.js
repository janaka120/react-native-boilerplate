// @flow
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../features/home/screens/HomeScreen';
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
