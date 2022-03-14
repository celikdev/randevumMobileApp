import React, {useEffect, useState} from 'react';
import {useColorScheme, Text, View, TouchableOpacity} from 'react-native';
import {
  StyledBox,
  StyledButton,
  StyledContainer,
  StyledLoginInput,
  StyledTitle,
} from '../components/main/StyledComponents';

import CheckBox from '@react-native-community/checkbox';

import {COLORS} from '../Colors';
import axios from 'axios';
import {API_URL} from '../config';
import {Modals} from '../components/main';

const Register = ({navigation}) => {
  const token = false;

  const colorSchema = useColorScheme();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('1');
  const [surname, setSurname] = useState('2');
  const [email, setEmail] = useState('3');
  const [password, setPassword] = useState('4');
  const [phone, setPhone] = useState('5');

  const [toggleCheckbox, setToggleCheckbox] = useState(false);

  const [buttonDisable, setButtonDisable] = useState(false);

  const [successModal, setSuccessModal] = useState(false);

  useEffect(() => {
    if (
      loading ||
      !name ||
      !surname ||
      !email ||
      !password ||
      !phone ||
      !toggleCheckbox
    ) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  });

  //TODO:Register Sonrası E-Mail Doğrulama Yapılacak!
  const handleRegister = () => {
    axios
      .post(`${API_URL}/auth/register`, {
        userName: name,
        userSurname: surname,
        userEmail: email,
        userPassword: password,
        userPhone: phone,
        KVKK: toggleCheckbox,
      })
      .then(res => setSuccessModal(true))
      .catch(err => console.log(err));
  };

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
          defaultValue={name}
          onChangeText={text => setName(text)}
        />
        <StyledLoginInput
          placeholderTextColor={
            colorSchema == 'light'
              ? COLORS.LIGHT.TEXT_COLOR
              : COLORS.DARK.TEXT_COLOR
          }
          theme={colorSchema}
          placeholder="Soyisim"
          defaultValue={surname}
          onChangeText={text => setSurname(text)}
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
          defaultValue={email}
          onChangeText={text => setEmail(text)}
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
          defaultValue={password}
          onChangeText={text => setPassword(text)}
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
          defaultValue={phone}
          onChangeText={text => setPhone(text)}
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
        <StyledButton
          onPress={() => handleRegister()}
          disabled={buttonDisable}
          buttonDisable={buttonDisable}>
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
      <Modals
        modalVisibility={successModal}
        setModalVisibility={setSuccessModal}
        navigation={navigation}
        navigateName="Login">
        <StyledTitle theme={colorSchema}>Kayıt Başarılı</StyledTitle>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            borderWidth: 2,
            borderColor: COLORS.DARK.RED,
            paddingVertical: 8,
            paddingHorizontal: 20,
            borderRadius: 6,
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 14,
              color:
                colorSchema == 'light'
                  ? COLORS.LIGHT.TEXT_COLOR
                  : COLORS.DARK.TEXT_COLOR,
            }}>
            Giriş Yap
          </Text>
        </TouchableOpacity>
      </Modals>
    </StyledContainer>
  );
};

export default Register;
