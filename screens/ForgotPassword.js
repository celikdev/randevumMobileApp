import React from 'react';
import {useColorScheme, Text} from 'react-native';
import {
  StyledBox,
  StyledContainer,
  StyledLoginInput,
  StyledTitle,
} from '../components/main/StyledComponents';

const ForgotPassword = () => {
  const colorSchema = useColorScheme();

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
        <StyledLoginInput placeholder="E-Posta" />
      </StyledBox>
    </StyledContainer>
  );
};

export default ForgotPassword;
