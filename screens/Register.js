import React from 'react';
import {useColorScheme} from 'react-native';
import {
  StyledBox,
  StyledContainer,
  StyledLoginInput,
  StyledTitle,
} from '../components/main/StyledComponents';

import {COLORS} from '../Colors';

const Register = () => {
  const token = false;

  const colorSchema = useColorScheme();

  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Kayıt Ol</StyledTitle>
        <StyledLoginInput
          placeholderTextColor={
            colorSchema == 'light'
              ? COLORS.LIGHT.TEXT_COLOR
              : COLORS.DARK.TEXT_COLOR
          }
          theme={colorSchema}
          placeholder="İsim"
        />
        <StyledLoginInput
          placeholderTextColor={
            colorSchema == 'light'
              ? COLORS.LIGHT.TEXT_COLOR
              : COLORS.DARK.TEXT_COLOR
          }
          theme={colorSchema}
          placeholder="Soyisim"
        />
        <StyledLoginInput
          placeholderTextColor={
            colorSchema == 'light'
              ? COLORS.LIGHT.TEXT_COLOR
              : COLORS.DARK.TEXT_COLOR
          }
          theme={colorSchema}
          placeholder="E-Posta"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <StyledLoginInput
          placeholderTextColor={
            colorSchema == 'light'
              ? COLORS.LIGHT.TEXT_COLOR
              : COLORS.DARK.TEXT_COLOR
          }
          theme={colorSchema}
          placeholder="Şifre"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <StyledLoginInput
          placeholderTextColor={
            colorSchema == 'light'
              ? COLORS.LIGHT.TEXT_COLOR
              : COLORS.DARK.TEXT_COLOR
          }
          theme={colorSchema}
          placeholder="Telefon"
          keyboardType="number-pad"
        />
      </StyledBox>
    </StyledContainer>
  );
};

export default Register;
