import React, {useEffect, useState} from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {
  StyledBox,
  StyledButton,
  StyledContainer,
  StyledTitle,
} from '../components/main/StyledComponents';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {COLORS} from '../Colors';
import axios from 'axios';
import {API_URL} from '../config';
import {Modals} from '../components/main';

const CELL_COUNT = 4;

const MailVerification = ({route, navigation}) => {
  const colorSchema = useColorScheme();

  const email = route.params.email;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [successAlert, setSuccessAlert] = useState(false);

  const [successVerifyModal, setSuccessVerifyModal] = useState(false);

  useEffect(() => {
    axios
      .post(`${API_URL}/auth/verification-email`, {
        userEmail: email,
      })
      .then(() => setSuccessAlert(true))
      .catch(err => console.log(err.response));
  }, []);

  //TODO:Error Alert Yapılacak!
  const handleSubmit = () => {
    axios
      .post(`${API_URL}/auth/verify-email-code`, {
        verificationCode: value,
        userEmail: email,
      })
      .then(res => setSuccessVerifyModal(true))
      .catch(err => console.log(err.response));
  };

  return (
    <StyledContainer theme={colorSchema}>
      <View
        style={{
          display: successAlert ? 'flex' : 'none',
          backgroundColor: 'lightgreen',
          width: '90%',
          marginTop: 30,
          paddingVertical: 20,
          borderRadius: 6,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color:
              colorSchema == 'light'
                ? COLORS.DARK.TEXT_COLOR
                : COLORS.LIGHT.TEXT_COLOR,
            fontFamily: 'Montserrat-SemiBold',
          }}>
          E-Posta Gönderildi
        </Text>
      </View>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>E-Posta Doğrulama</StyledTitle>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 12,
            textAlign: 'center',
            paddingHorizontal: 20,
            marginBottom: 10,
          }}>
          Lütfen E-Posta Adresinize Gelen Doğrulama Kodunuzu Girin
        </Text>
        <CodeField
          onFocus={() => setSuccessAlert(false)}
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[
                getStyle(colorSchema).cell,
                isFocused && getStyle(colorSchema).focusCell,
              ]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <StyledButton
          onPress={() => handleSubmit()}
          disabled={value.length < 4}
          style={{marginTop: 20}}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              color:
                colorSchema == 'light'
                  ? COLORS.LIGHT.TEXT_COLOR
                  : COLORS.DARK.TEXT_COLOR,
            }}>
            Gönder
          </Text>
        </StyledButton>
      </StyledBox>
      <Modals
        theme={colorSchema}
        setModalVisibility={setSuccessVerifyModal}
        modalVisibility={successVerifyModal}>
        <StyledTitle theme={colorSchema}>Doğrulama Başarılı</StyledTitle>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 12,
            opacity: 0.6,
            fontFamily: 'Montserrat-SemiBold',
            color:
              colorSchema == 'light'
                ? COLORS.LIGHT.TEXT_COLOR
                : COLORS.DARK.TEXT_COLOR,
          }}>
          E-Posta Adresin Başarıyla Doğrulandı!
        </Text>
        <StyledButton
          onPress={() => navigation.navigate('Login')}
          theme={colorSchema}>
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
        </StyledButton>
      </Modals>
    </StyledContainer>
  );
};

export default MailVerification;

getStyle = function ({colorSchema}) {
  return {
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    cell: {
      width: 40,
      height: 40,
      margin: 10,
      lineHeight: 40,
      fontSize: 16,
      fontFamily: 'Montserrat-SemiBold',
      borderWidth: 2,
      borderColor:
        colorSchema == 'light'
          ? COLORS.DARK.DISABLED_COLOR
          : COLORS.LIGHT.DISABLED_COLOR,
      color:
        colorSchema == 'light'
          ? COLORS.LIGHT.TEXT_COLOR
          : COLORS.DARK.TEXT_COLOR,
      textAlign: 'center',
      borderRadius: 6,
    },
    focusCell: {
      borderColor: COLORS.DARK.RED,
    },
  };
};
