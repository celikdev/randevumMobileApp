import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  useColorScheme,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {useSelector} from 'react-redux';

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

const BusinessPage = ({route, navigation}) => {
  const {businessID} = route.params;

  const colorSchema = useColorScheme();

  const token = useSelector(state => state.userData.userData);

  const [data, setData] = useState([]);

  const [doluSaat, setDoluSaat] = useState([]);

  useEffect(() => {
    const fetchBusinessData = async () => {
      await axios
        .get(`${API_URL}/businesses/${businessID}`, {
          headers: {Authorization: 'Bearer ' + token},
        })
        .then(res => setData(res.data))
        .catch(() => alert('Business Error'));
      await axios
        .get(`${API_URL}/meets/business/${businessID}`)
        .then(res =>
          res.data.map(meet =>
            setDoluSaat(before => [
              ...before,
              {clock: meet.clock, date: meet.date},
            ]),
          ),
        )
        .catch(() => alert('Business Error'));
    };

    fetchBusinessData();
  }, []);

  const [loading, setLoading] = useState(false);

  const meetDate = ['11.03.2022', '12.03.2022', '13.03.2022'];
  const meetTime = ['08:30', '09:30', '10:30', '11:30', '12:30', '13:30'];
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  //TODO:Randevu Oluşturma Eklenecek

  const handleCreate = () => {
    setLoading(true);
    axios
      .post(
        `${API_URL}/meets`,
        {
          businessID,
          businessName: data.businessName,
          date: selectedDate,
          clock: selectedTime,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      )
      .then(() => alert('Meet Successfully Created'))
      .catch(e => alert(e))
      .finally(() => {
        setLoading(false);
        setSelectedDate(''), setSelectedTime('');
        navigation.navigate('Anasayfa');
      });
  };

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
              disabled={doluSaat.find(saat =>
                saat.date == selectedDate
                  ? saat.clock == meetTime
                    ? console.log(true)
                    : console.log(false)
                  : null,
              )}
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
          onPress={() => handleCreate()}
          disabled={!selectedDate || !selectedTime || loading}
          style={{
            marginTop: 24,
            width: '30%',
            alignItems: 'center',
            borderWidth: 2,
            borderColor:
              !selectedDate || !selectedTime || loading
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
          {loading ? (
            <ActivityIndicator size={20} color={COLORS.DARK.RED} />
          ) : (
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
          )}
        </TouchableOpacity>
      </StyledBox>
    </StyledContainer>
  );
};

export default BusinessPage;
