import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {homeStackRoutes} from './HomeStackRoutes';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, animation: 'none'}}>
      {homeStackRoutes.map((routes, index) => (
        <Stack.Screen
          name={routes.name}
          component={routes.component}
          key={index}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;
