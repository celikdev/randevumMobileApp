import axios from 'axios';
import React, {useState} from 'react';
import {useColorScheme, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../Colors';
import {
  StyledBox,
  StyledContainer,
  StyledLoginInput,
  StyledTitle,
} from '../components/main/StyledComponents';
import {API_URL} from '../config';

const ForgotPassword = ({navigation}) => {
  const colorSchema = useColorScheme();

  const [email, setEmail] = useState('celikhakan5255@gmail.com');
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    /*axios
      .post(`${API_URL}/password-reset`, {
        email: email,
      })
      .then(res => navigation.navigate('NewPasswordPage'))
      .catch(e => console.error(e));*/
    navigation.navigate('NewPasswordPage');
  };

  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Şifremi Unuttum</StyledTitle>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 10,
          }}>
          Şifre Sıfırlama Bağlantısı İçin Lütfen E-Posta Adresinizi Girin
        </Text>
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
        <TouchableOpacity
          disabled={loading}
          onPress={() => handleSend()}
          style={{
            width: '35%',
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
            {loading ? <ActivityIndicator color={COLORS.DARK.RED} /> : 'Gönder'}
          </Text>
        </TouchableOpacity>
      </StyledBox>
    </StyledContainer>
  );
};

export default ForgotPassword;
