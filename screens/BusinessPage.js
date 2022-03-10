import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, useColorScheme, ScrollView} from 'react-native';

import City from '../City';
import {COLORS} from '../Colors';

import {
  StyledBox,
  StyledBusinessCategoryName,
  StyledBusinessImage,
  StyledContainer,
  StyledTitle,
} from '../components/main/StyledComponents';
import {API_URL} from '../config';

const BusinessPage = ({route}) => {
  const {businessID} = route.params;

  const colorSchema = useColorScheme();

  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${API_URL}/businesses/${businessID}`)
        .then(res => setData(res.data))
        .catch(() => alert('Business Error'));
    } catch (error) {
      alert(error);
    }
  }, []);

  const meetDate = ['11.03.2022', '12.03.2022', '13.03.2022'];
  const meetTime = ['08:30', '09:30', '10:30', '11:30', '12:30', '13:30'];
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>{data.businessName}</StyledTitle>
        <StyledBusinessImage source={{uri: data.businessImage}} />
        <StyledBusinessCategoryName theme={colorSchema}>
          {data.businessCategory}
        </StyledBusinessCategoryName>
        <StyledBusinessCategoryName theme={colorSchema}>
          {data.businessAddress}
        </StyledBusinessCategoryName>
        <StyledBusinessCategoryName theme={colorSchema}>
          {data.businessIlce
            ? data.businessIlce[0] + data.businessIlce.substr(1).toLowerCase()
            : ''}{' '}
          / {data.businessCountry ? City[data.businessCountry - 1].name : null}
        </StyledBusinessCategoryName>
        {/* Meet Dates */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 24,
            width: '100%',
            flexDirection: 'row',
          }}>
          {meetDate.map((date, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setSelectedDate(date === selectedDate ? '' : date)}
              style={{
                backgroundColor:
                  selectedDate == date
                    ? colorSchema == 'light'
                      ? COLORS.LIGHT.TEXT_COLOR
                      : COLORS.DARK.TEXT_COLOR
                    : null,
                borderWidth: 2,
                paddingVertical: 8,
                paddingHorizontal: 24,
                borderColor:
                  selectedDate == date ? 'transparent' : COLORS.DARK.RED,
                marginHorizontal: 8,
                borderRadius: 6,
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  color:
                    selectedDate == date
                      ? colorSchema == 'light'
                        ? COLORS.LIGHT.BACKGROUND
                        : COLORS.DARK.BACKGROUND
                      : colorSchema == 'light'
                      ? COLORS.LIGHT.TEXT_COLOR
                      : COLORS.DARK.TEXT_COLOR,
                }}>
                {date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* Meet Times */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 24,
            width: '100%',
            flexDirection: 'row',
          }}>
          {meetTime.map((time, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setSelectedTime(time === selectedTime ? '' : time)}
              style={{
                backgroundColor:
                  selectedTime == time
                    ? colorSchema == 'light'
                      ? COLORS.LIGHT.TEXT_COLOR
                      : COLORS.DARK.TEXT_COLOR
                    : null,
                borderWidth: 2,
                paddingVertical: 8,
                paddingHorizontal: 24,
                borderColor:
                  selectedTime == time ? 'transparent' : COLORS.DARK.RED,
                marginHorizontal: 8,
                borderRadius: 6,
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  color:
                    selectedTime == time
                      ? colorSchema == 'light'
                        ? COLORS.LIGHT.BACKGROUND
                        : COLORS.DARK.BACKGROUND
                      : colorSchema == 'light'
                      ? COLORS.LIGHT.TEXT_COLOR
                      : COLORS.DARK.TEXT_COLOR,
                }}>
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity
          disabled={!selectedDate || !selectedTime}
          style={{
            marginTop: 24,
            borderWidth: 2,
            borderColor:
              !selectedDate || !selectedTime
                ? COLORS.DARK.DISABLED_COLOR
                : COLORS.DARK.RED,
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 6,
            backgroundColor:
              !selectedDate || !selectedTime
                ? colorSchema == 'light'
                  ? COLORS.LIGHT.DISABLED_COLOR
                  : COLORS.DARK.DISABLED_COLOR
                : null,
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              color:
                colorSchema == 'light'
                  ? COLORS.LIGHT.TEXT_COLOR
                  : COLORS.DARK.TEXT_COLOR,
            }}>
            Oluştur
          </Text>
        </TouchableOpacity>
      </StyledBox>
    </StyledContainer>
  );
};

export default BusinessPage;
