import React, {useState} from 'react';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_URL} from '../config';

import {useDispatch, useSelector} from 'react-redux';

import {
  Text,
  useColorScheme,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import {COLORS} from '../Colors';

import {
  StyledBox,
  StyledContainer,
  StyledLoginInput,
  StyledRegisterButton,
  StyledRegisterText,
  StyledTitle,
} from '../components/main/StyledComponents';

const Login = ({navigation}) => {
  const colorSchema = useColorScheme();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setLoading(true);
    axios
      .post(`${API_URL}/auth/login`, {
        userEmail: email,
        userPassword: password,
      })
      .then(res => {
        storeData(res.data);
        setLoading(false);
        navigation.navigate('Anasayfa');
      })
      .catch(err => {
        setLoading(false);
        console.log('hata');
      });
  };

  const storeData = async authResponse => {
    try {
      await AsyncStorage.setItem('userToken', authResponse.token);
    } catch (error) {
      console.log(error);
    }
  };

  const writeConsole = async () => {
    try {
      const data = await AsyncStorage.getItem('userToken');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledContainer theme={colorSchema}>
      <Button title="asdadsdasd" onPress={() => writeConsole()} />
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Giriş Yap</StyledTitle>
        <StyledLoginInput
          placeholderTextColor={
            colorSchema == 'light'
              ? COLORS.LIGHT.TEXT_COLOR
              : COLORS.DARK.TEXT_COLOR
          }
          theme={colorSchema}
          defaultValue={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="E-Posta"
        />
        <StyledLoginInput
          placeholderTextColor={
            colorSchema == 'light'
              ? COLORS.LIGHT.TEXT_COLOR
              : COLORS.DARK.TEXT_COLOR
          }
          theme={colorSchema}
          secureTextEntry={true}
          defaultValue={password}
          onChangeText={text => setPassword(text)}
          autoCapitalize="none"
          placeholder="Şifre"
        />
        <TouchableOpacity
          disabled={loading}
          onPress={() => handleLogin()}
          style={{
            width: '30%',
            borderWidth: 2,
            borderColor: loading
              ? colorSchema == 'light'
                ? COLORS.LIGHT.DISABLED_COLOR
                : COLORS.DARK.DISABLED_COLOR
              : COLORS.DARK.RED,
            alignItems: 'center',
            paddingVertical: 8,
            borderRadius: 6,
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              color:
                colorSchema == 'light'
                  ? COLORS.LIGHT.TEXT_COLOR
                  : COLORS.DARK.TEXT_COLOR,
            }}>
            {loading ? (
              <ActivityIndicator color={COLORS.DARK.RED} />
            ) : (
              'Giriş Yap'
            )}
          </Text>
        </TouchableOpacity>
      </StyledBox>
      <StyledRegisterButton
        onPress={() => navigation.navigate('Register')}
        theme={colorSchema}>
        <StyledRegisterText theme={colorSchema}>
          Hemen Kayıt Ol
        </StyledRegisterText>
      </StyledRegisterButton>
    </StyledContainer>
  );
};

export default Login;
