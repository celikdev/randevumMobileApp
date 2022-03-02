import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {Image, useColorScheme, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {routes} from './Routes';

import {COLORS} from './Colors';

import {Provider} from 'react-redux';
import {store} from './redux/store';

const Tab = createBottomTabNavigator();

const App = () => {
  const colorSchema = useColorScheme();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
