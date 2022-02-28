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
} from '../main/StyledComponents';

const Business = () => {
  const colorSchema = useColorScheme();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/businesses`)
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  });

  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      {loading ? (
        <ActivityIndicator size={36} color={COLORS.DARK.RED} />
      ) : (
        data.map((business, index) => (
          <StyledBusinessContainer
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
      )}
    </View>
  );
};

export default Business;
