import React from 'react';

import {Image, useColorScheme, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {routes} from './Routes';

import {COLORS} from './Colors';

import {NotificationBell} from './components/main';

const Tab = createBottomTabNavigator();

const App = () => {
  const colorSchema = useColorScheme();

  return (
    <>
      <StatusBar
        barStyle={colorSchema == 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={
          colorSchema == 'light'
            ? COLORS.LIGHT.BOX_COLOR
            : COLORS.DARK.BOX_COLOR
        }
      />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{unmountOnBlur: true}}>
          {routes.map((route, index) => (
            <Tab.Screen
              key={index}
              options={{
                headerTitleAlign: 'center',
                headerRight: () => <NotificationBell />,
                headerTitle: () => (
                  <Image
                    style={{
                      width: 44,
                      height: 44,
                    }}
                    source={require('./assets/icon/randevum-30.png')}
                  />
                ),
                headerStyle: {
                  shadowColor: '#222020',
                  backgroundColor:
                    colorSchema == 'light'
                      ? COLORS.LIGHT.BOX_COLOR
                      : COLORS.DARK.BOX_COLOR,
                },
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
      </NavigationContainer>
    </>
  );
};

export default App;
