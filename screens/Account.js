import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {COLORS} from '../Colors';
import {setData} from '../redux/slices/UserSlices';

import {StyledTitle} from '../components/main/StyledComponents';

import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

import PushNotification from 'react-native-push-notification';

const Account = ({navigation}) => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
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

  const sendNotification = () => {
    PushNotification.localNotification({
      channelId: 'deneme-channel',
      title: 'Deneme',
      message: 'Deneme Message',
    });
  };
  const colorSchema = useColorScheme();

  const dispatch = useDispatch();

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('userToken');
    dispatch(setData(''));
    navigation.navigate('Anasayfa');
  };

  useEffect(() => {
    messaging()
      .getToken(firebase.app().options.messagingSenderId)
      .then(x => console.log(x))
      .catch(e => console.log(e));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 24,
        backgroundColor:
          colorSchema == 'light'
            ? COLORS.LIGHT.BACKGROUND
            : COLORS.DARK.BACKGROUND,
      }}>
      <StyledTitle theme={colorSchema}>Hesap</StyledTitle>
      <TouchableOpacity onPress={() => handleLogOut()} style={{paddingTop: 24}}>
        <StyledTitle theme={colorSchema}>Çıkış Yap</StyledTitle>
      </TouchableOpacity>

      <Button title="Send" onPress={() => sendNotification()} />

      <TouchableOpacity
        onPress={() => navigation.navigate('AccountMeets')}
        style={{paddingTop: 24}}>
        <StyledTitle theme={colorSchema}>My Meets</StyledTitle>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
