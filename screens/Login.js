import axios from 'axios';
import React, {useState} from 'react';
import SyncStorage from 'sync-storage';

import {API_URL} from '../config';

import {
  View,
  Text,
  useColorScheme,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../Colors';

import {
  StyledBox,
  StyledContainer,
  StyledLoginInput,
  StyledTitle,
} from '../components/main/StyledComponents';

const Login = props => {
  const colorSchema = useColorScheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios
      .post(`${API_URL}/auth/login`, {
        userEmail: email,
        userPassword: password,
      })
      .then(res => {
        SyncStorage.set('token', res.data.token);
        props.navigation.navigate('Anasayfa');
      });
  };

  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Giriş Yap</StyledTitle>
        <TextInput theme={colorSchema} onChangeText={text => setEmail(text)} />
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
        <Text>{email}</Text>
        <TouchableOpacity
          onPress={() => handleLogin()}
          style={{
            width: '30%',
            borderWidth: 2,
            borderColor: COLORS.DARK.RED,
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
            Giriş Yap
          </Text>
        </TouchableOpacity>
      </StyledBox>
    </StyledContainer>
  );
};

export default Login;
