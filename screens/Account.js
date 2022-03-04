import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, Text, useColorScheme, TouchableOpacity} from 'react-native';
import {COLORS} from '../Colors';

const Account = ({navigation}) => {
  const colorSchema = useColorScheme();

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.navigate('Anasayfa');
  };

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
      <Text style={{color: COLORS.DARK.TEXT_COLOR}}>Account</Text>
      <TouchableOpacity onPress={() => handleLogOut()} style={{paddingTop: 24}}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 26,
            fontFamily: 'Montserrat-SemiBold',
          }}>
          Çıkış Yap
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
