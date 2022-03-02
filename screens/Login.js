import React, {useState} from 'react';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_URL} from '../config';

import {useDispatch, useSelector} from 'react-redux';

import {
  Text,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
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

  const userToken = AsyncStorage.getItem('userToken');
  console.log(userToken);

  const handleLogin = () => {
    setLoading(true);
    axios
      .post(`${API_URL}/auth/login`, {
        userEmail: email,
        userPassword: password,
      })
      .then(async res => {
        await AsyncStorage.setItem('userToken', res.data.token);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log('hata');
      });
  };

  return (
    <StyledContainer theme={colorSchema}>
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
