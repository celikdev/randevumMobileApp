import React, {useState} from 'react';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_URL} from '../config';

import {
  Text,
  useColorScheme,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../Colors';

import {
  StyledBox,
  StyledButton,
  StyledContainer,
  StyledLoginInput,
  StyledRegisterButton,
  StyledRegisterText,
  StyledTitle,
} from '../components/main/StyledComponents';

const Login = ({navigation}) => {
  const colorSchema = useColorScheme();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('celikhakan5255@gmail.com');
  const [password, setPassword] = useState('123');

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
      .catch(() => {
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
        <StyledButton
          disabled={loading}
          loading={loading}
          theme={colorSchema}
          onPress={() => handleLogin()}>
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
        </StyledButton>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={{
            marginTop: 24,
            marginVertical: 16,
            padding: 4,
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              textAlign: 'center',
              fontSize: 12,
              color:
                colorSchema == 'light'
                  ? COLORS.LIGHT.TEXT_COLOR
                  : COLORS.DARK.TEXT_COLOR,
            }}>
            Şifremi Unuttum
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
