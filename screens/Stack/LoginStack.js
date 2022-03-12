import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {loginStackRoutes} from './LoginStackRoutes';

const Stack = createNativeStackNavigator();

import {Login, Account} from '../';
import {useSelector} from 'react-redux';

import AccountMeets from '../AccountMeets';

const LoginStack = ({navigation}) => {
  const token = useSelector(state => state.userData.userData);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animation: 'none',
        unmountOnBlur: true,
      }}>
      <Stack.Screen name="Login" component={token ? Account : Login} />
      {loginStackRoutes.map((routes, index) => (
        <Stack.Screen
          name={routes.name}
          component={routes.component}
          key={index}
        />
      ))}
      <Stack.Screen name="AccountMeets" component={AccountMeets} />
    </Stack.Navigator>
  );
};

export default LoginStack;
