import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';

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
      </StyledBox>
    </StyledContainer>
  );
};

export default BusinessPage;
