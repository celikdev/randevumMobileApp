import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useColorScheme, Text, View, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../Colors';
import {
  StyledBox,
  StyledButton,
  StyledContainer,
  StyledLoginInput,
  StyledTitle,
} from '../components/main/StyledComponents';

import {API_URL} from '../config';

const UserInfo = () => {
  const colorSchema = useColorScheme();
  const token = useSelector(state => state.userData.userData);

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/userData`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => setData(res.data))
      .catch(err => console.log(err.response));
  });

  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Kişisel Bilgiler</StyledTitle>
        <View
          style={{
            borderWidth: 4,
            borderColor: COLORS.DARK.RED,
            width: 110,
            height: 110,
            marginBottom: 16,
            borderRadius: 110,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: data.userProfilePicture}}
            style={{width: 90, height: 90, borderRadius: 90}}
          />
        </View>
        <StyledLoginInput
          editable={false}
          style={{
            borderColor: COLORS.DARK.DISABLED_COLOR,
            color: COLORS.DARK.DISABLED_COLOR,
          }}
          theme={colorSchema}>
          {data.userName}
        </StyledLoginInput>
        <StyledLoginInput
          editable={false}
          style={{
            borderColor: COLORS.DARK.DISABLED_COLOR,
            color: COLORS.DARK.DISABLED_COLOR,
          }}
          theme={colorSchema}>
          {data.userSurname}
        </StyledLoginInput>
        <StyledLoginInput
          editable={false}
          style={{
            borderColor: COLORS.DARK.DISABLED_COLOR,
            color: COLORS.DARK.DISABLED_COLOR,
          }}
          theme={colorSchema}>
          {data.userEmail}
        </StyledLoginInput>
        <StyledLoginInput
          editable={false}
          style={{
            borderColor: COLORS.DARK.DISABLED_COLOR,
            color: COLORS.DARK.DISABLED_COLOR,
          }}
          theme={colorSchema}>
          {data.userPhone}
        </StyledLoginInput>
        <StyledButton disabled={true} theme={colorSchema}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              color:
                colorSchema == 'light'
                  ? COLORS.LIGHT.TEXT_COLOR
                  : COLORS.DARK.TEXT_COLOR,
            }}>
            Düzenle
          </Text>
        </StyledButton>
      </StyledBox>
    </StyledContainer>
  );
};

export default UserInfo;
