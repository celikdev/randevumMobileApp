import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackRoutes} from './CreateStackRoutes';

const Stack = createNativeStackNavigator();

const CreateStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
      {createStackRoutes.map((routes, index) => (
        <Stack.Screen
          name={routes.name}
          component={routes.component}
          key={index}
        />
      ))}
    </Stack.Navigator>
  );
};

export default CreateStack;
