import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, useColorScheme} from 'react-native';
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

  useEffect(() => {
    alert(email);
  }, []);

  //TODO:useEffect verification mail gönderilecek!
  //TODO:handleSubmit yapılacak!
  return (
    <StyledContainer theme={colorSchema}>
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
        <StyledButton disabled={value.length < 4} style={{marginTop: 20}}>
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
