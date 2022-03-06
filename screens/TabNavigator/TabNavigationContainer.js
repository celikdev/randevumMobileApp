import React from 'react';
import {useColorScheme} from 'react-native';

import {routes} from './Routes';

import {COLORS} from '../../Colors';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigationContainer = () => {
  const colorSchema = useColorScheme();

  return (
    <Tab.Navigator screenOptions={{unmountOnBlur: true}}>
      {routes.map((route, index) => (
        <Tab.Screen
          key={index}
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              paddingBottom: 2,
              fontFamily: 'Montserrat-SemiBold',
              color:
                colorSchema == 'light'
                  ? COLORS.LIGHT.TEXT_COLOR
                  : COLORS.DARK.TEXT_COLOR,
            },
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
              height: 52,
              borderTopWidth: 0,
              backgroundColor:
                colorSchema == 'light'
                  ? COLORS.LIGHT.BOX_COLOR
                  : COLORS.DARK.BOX_COLOR,
            },
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <route.focusedIcon
                  width={30}
                  height={30}
                  color={
                    colorSchema == 'light'
                      ? COLORS.LIGHT.TEXT_COLOR
                      : COLORS.DARK.TEXT_COLOR
                  }
                />
              ) : (
                <route.icon
                  width={30}
                  height={30}
                  color={
                    colorSchema == 'light'
                      ? COLORS.LIGHT.DISABLED_COLOR
                      : COLORS.DARK.DISABLED_COLOR
                  }
                />
              ),
          }}
          name={route.name}
          component={route.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigationContainer;
