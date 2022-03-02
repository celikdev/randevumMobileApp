import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {loginStackRoutes} from './LoginStackRoutes';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, animation: 'none'}}>
      {loginStackRoutes.map((routes, index) => (
        <Stack.Screen
          name={routes.name}
          component={routes.component}
          key={index}
        />
      ))}
    </Stack.Navigator>
  );
};

export default LoginStack;
