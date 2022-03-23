import React, {useEffect, useState} from 'react';

import {useColorScheme, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../Colors';

import {
  StyledContainer,
  StyledBox,
  StyledTitle,
} from '../components/main/StyledComponents';

import {Modals} from '../components/main/';
import axios from 'axios';

import {API_URL} from '../config';
import {useSelector} from 'react-redux';

import PushNotification from 'react-native-push-notification';

const AccountMeets = ({route, navigation}) => {
  const colorSchema = useColorScheme();

  const {meet} = route.params;

  const token = useSelector(state => state.userData.userData);

  const [modalVisibility, setModalVisibility] = useState(false);

  const handleDeleteMeet = () => {
    axios
      .delete(`${API_URL}/meets/${meet._id}`, {
        headers: {Authorization: 'Bearer ' + token},
      })
      .then(res => {
        setModalVisibility(false);
        PushNotification.localNotification({
          channelId: 'deneme-channel',
          title: 'Randevu İptal Edildi',
          message: `${meet.date} Tarihli, ${meet.clock} Saatli ${meet.businessName} Randevunuz İptal Edilmiştir!`,
        });
        navigation.navigate('Anasayfa');
      });
  };

  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Meet Details</StyledTitle>
        <Text>{meet.date}</Text>
        <TouchableOpacity
          onPress={() => setModalVisibility(true)}
          style={{
            marginVertical: 8,
            borderWidth: 2,
            borderColor: COLORS.DARK.RED,
            paddingHorizontal: 20,
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
            İptal
          </Text>
        </TouchableOpacity>
      </StyledBox>
      <Modals
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}>
        <StyledTitle theme={colorSchema}>İptal Et</StyledTitle>
        <Text
          style={{
            color:
              colorSchema == 'light'
                ? COLORS.LIGHT.TEXT_COLOR
                : COLORS.DARK.TEXT_COLOR,
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 12,
          }}>
          Randevunuzu İptal Etmek İstiyor Musunuz?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => setModalVisibility(false)}
            style={{
              marginVertical: 8,
              borderWidth: 2,
              borderColor: COLORS.DARK.RED,
              paddingHorizontal: 16,
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
              Vazgeç
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDeleteMeet()}
            style={{
              marginVertical: 8,
              borderWidth: 2,
              borderColor: COLORS.DARK.RED,
              paddingHorizontal: 16,
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
              Evet
            </Text>
          </TouchableOpacity>
        </View>
      </Modals>
    </StyledContainer>
  );
};

export default AccountMeets;
