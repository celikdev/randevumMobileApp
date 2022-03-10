import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  useColorScheme,
  ActivityIndicator,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS} from '../../Colors';
import {API_URL} from '../../config';
import {
  StyledMeetsBox,
  StyledMeetsCard,
  StyledMeetsText,
  StyledTitle,
} from '../main/StyledComponents';

const Meets = ({navigation}) => {
  const colorSchema = useColorScheme();

  const token = useSelector(state => state.userData.userData);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/meets`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <StyledMeetsBox theme={colorSchema}>
      <StyledTitle theme={colorSchema}>Aktif Randevular</StyledTitle>
      {loading ? (
        <ActivityIndicator size={26} color={COLORS.DARK.RED} />
      ) : data.length ? (
        <View style={{flex: 1}}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{paddingHorizontal: 16}}>
            {data.map((meet, index) => (
              <StyledMeetsCard
                onPress={() =>
                  navigation.navigate('Hesap', {
                    screen: 'AccountMeets',
                  })
                }
                theme={colorSchema}
                style={{
                  marginHorizontal: 8,
                  padding: 8,
                  paddingVertical: 12,
                }}
                key={index}>
                <StyledMeetsText theme={colorSchema}>
                  {meet.businessName}
                </StyledMeetsText>
                <StyledMeetsText theme={colorSchema}>
                  {meet.date}
                </StyledMeetsText>
                <StyledMeetsText theme={colorSchema}>
                  {meet.clock}
                </StyledMeetsText>
              </StyledMeetsCard>
            ))}
          </ScrollView>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate('Oluştur')}
          style={{width: '80%'}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 12,
              opacity: 0.7,
              color:
                colorSchema == 'light'
                  ? COLORS.LIGHT.TEXT_COLOR
                  : COLORS.DARK.TEXT_COLOR,
            }}>
            Aktif Randevunuz Bulunamadı! Oluşturmak İçin Buraya Tıklayın
          </Text>
        </TouchableOpacity>
      )}
    </StyledMeetsBox>
  );
};

export default Meets;
