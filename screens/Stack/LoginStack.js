import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {loginStackRoutes} from './LoginStackRoutes';

const Stack = createNativeStackNavigator();

import {Login, Account} from '../';
import {useSelector} from 'react-redux';

const LoginStack = () => {
  const token = useSelector(state => state.userData.userData);
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
      <Stack.Screen name="Login" component={token ? Account : Login} />
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
