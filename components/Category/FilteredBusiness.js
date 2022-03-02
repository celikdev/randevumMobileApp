import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import {COLORS} from '../../Colors';
import {API_URL} from '../../config';
import {
  StyledBusinessCategoryName,
  StyledBusinessContainer,
  StyledBusinessImage,
  StyledBusinessName,
  StyledNotFoundText,
} from '../main/StyledComponents';

const FilteredBusiness = ({route}) => {
  const colorSchema = useColorScheme();

  const {categoryName} = route.params;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await axios
          .post(`${API_URL}/businesses/`, {
            categoryName: categoryName,
          })
          .then(res => setData(res.data));
      } catch (error) {
        alert('Error');
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      {loading ? (
        <ActivityIndicator size={36} color={COLORS.DARK.RED} />
      ) : data.length ? (
        data.map((business, index) => (
          <StyledBusinessContainer
            onPress={() => alert('asd')}
            activeOpacity={0.6}
            theme={colorSchema}
            key={index}>
            <StyledBusinessImage source={{uri: business.businessImage}} />
            <StyledBusinessName theme={colorSchema}>
              {business.businessName}
            </StyledBusinessName>
            <StyledBusinessCategoryName theme={colorSchema}>
              {business.businessCategory}
            </StyledBusinessCategoryName>
          </StyledBusinessContainer>
        ))
      ) : (
        <StyledNotFoundText>
          Aradığınız Kriterlerde İşletme Bulunamadı!
        </StyledNotFoundText>
      )}
    </View>
  );
};

export default FilteredBusiness;
