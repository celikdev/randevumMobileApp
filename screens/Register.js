import React, {useState} from 'react';
import {useColorScheme, Text, View} from 'react-native';
import {
  StyledBox,
  StyledButton,
  StyledContainer,
  StyledLoginInput,
  StyledTitle,
} from '../components/main/StyledComponents';

import CheckBox from '@react-native-community/checkbox';

import {COLORS} from '../Colors';

const Register = () => {
  const token = false;

  const colorSchema = useColorScheme();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [toggleCheckbox, setToggleCheckbox] = useState(false);

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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 24,
          }}>
          <CheckBox
            disabled={false}
            value={toggleCheckbox}
            onValueChange={newValue => setToggleCheckbox(newValue)}
          />
          <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 12}}>
            Gizlilik Politikası'nı Okudum ve Kabul Ediyorum
          </Text>
        </View>
        <StyledButton disabled={loading}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              color:
                colorSchema == 'light'
                  ? COLORS.LIGHT.TEXT_COLOR
                  : COLORS.DARK.TEXT_COLOR,
            }}>
            Kayıt Ol
          </Text>
        </StyledButton>
      </StyledBox>
    </StyledContainer>
  );
};

export default Register;
