import React, {useEffect} from 'react';

import {useColorScheme, StatusBar, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {COLORS} from './Colors';

import {NotificationBell} from './components/main';

import {routes} from './Routes';

import axios from 'axios';
import {API_URL} from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setNotification} from './redux/slices/UserSlices';

const Stack = createNativeStackNavigator();

const App = () => {
  const colorSchema = useColorScheme();
  const dispatch = useDispatch();

  //Get Notifications
  const getNotifications = async () => {
    const token = await AsyncStorage.getItem('userToken');

    axios
      .get(`${API_URL}/notifications`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => dispatch(setNotification(res.data)));
  };

  useEffect(() => {
    getNotifications();
  }, []);

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
        <Stack.Navigator
          screenOptions={({navigation}) => ({
            headerTitleAlign: 'center',
            headerRight: () => <NotificationBell navigation={navigation} />,
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
          })}>
          {routes.map((route, index) => (
            <Stack.Screen
              key={index}
              name={route.name}
              component={route.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
