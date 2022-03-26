import React, {useEffect, useState} from 'react';

import {
  useColorScheme,
  StatusBar,
  Image,
  Text,
  PushNotificationIOS,
  Button,
  BackHandler,
} from 'react-native';

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

import PushNotification from 'react-native-push-notification';

import messaging from '@react-native-firebase/messaging';

import NetInfo from '@react-native-community/netinfo';

import {Modals} from './components/main/';
import {StyledButton, StyledTitle} from './components/main/StyledComponents';

const Stack = createNativeStackNavigator();

const App = () => {
  const colorSchema = useColorScheme();
  const dispatch = useDispatch();

  const [internetModal, setInternetModal] = useState(false);

  PushNotification.configure({
    onRegister: function (token) {
      //console.log('TOKEN:', token);
    },

    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);

      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    onAction: function (notification) {
      console.log('ACTION:', notification.action);
    },

    senderID: '443887146586',
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });

  //TODO:Giriş Yapıldıktan Sonra Notifications Fetch Yapılacak!
  //Get Notifications
  const getNotifications = async () => {
    const token = await AsyncStorage.getItem('userToken');

    if (!token) {
      console.log('no token');
      return;
    }
    console.log('notification fetch start');
    axios
      .get(`${API_URL}/notifications`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => dispatch(setNotification(res.data)))
      .catch(err => console.error(err.response));
  };

  useEffect(() => {
    getNotifications();

    const internetInfo = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        setInternetModal(true);
      } else {
        return;
      }
    });

    const unsubscribe = messaging().onMessage(payload => {
      console.log('A new FCM message arrived!', payload.notification.body);
      PushNotification.localNotification({
        channelId: 'deneme-channel',
        title: payload.notification.title,
        message: payload.notification.body,
      });
    });
    return unsubscribe;
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
        <Modals
          modalVisibility={internetModal}
          setModalVisibility={setInternetModal}>
          <StyledTitle
            style={{textAlign: 'center', fontSize: 14}}
            theme={colorSchema}>
            Lütfen İnternet Bağlantınızı Kontrol Edin
          </StyledTitle>
          <StyledButton
            theme={colorSchema}
            onPress={() => BackHandler.exitApp()}>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                color:
                  colorSchema == 'light'
                    ? COLORS.LIGHT.TEXT_COLOR
                    : COLORS.DARK.TEXT_COLOR,
              }}>
              Tamam
            </Text>
          </StyledButton>
        </Modals>
        <Stack.Navigator
          screenOptions={({navigation}) => ({
            animation: 'slide_from_right',
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
            headerTintColor: 'white',
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
