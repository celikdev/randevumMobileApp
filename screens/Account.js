import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, Text, useColorScheme, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {COLORS} from '../Colors';
import {setData} from '../redux/slices/UserSlices';

import {StyledTitle} from '../components/main/StyledComponents';

const Account = ({navigation}) => {
  const colorSchema = useColorScheme();

  const dispatch = useDispatch();

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('userToken');
    dispatch(setData(''));
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
      <StyledTitle theme={colorSchema}>Hesap</StyledTitle>
      <TouchableOpacity onPress={() => handleLogOut()} style={{paddingTop: 24}}>
        <StyledTitle theme={colorSchema}>Çıkış Yap</StyledTitle>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('AccountMeets')}
        style={{paddingTop: 24}}>
        <StyledTitle theme={colorSchema}>My Meets</StyledTitle>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
