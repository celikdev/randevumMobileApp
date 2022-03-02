import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import FilteredBusiness from '../components/Category/FilteredBusiness';

import {
  StyledContainer,
  StyledTitle,
  StyledSearchInput,
  StyledBox,
} from '../components/main/StyledComponents';

const BusinessFilterByCategory = ({route, navigation}) => {
  const colorSchema = useColorScheme();

  const {categoryName} = route.params;

  return (
    <StyledContainer theme={colorSchema} style={{paddingVertical: 20}}>
      <StyledTitle theme={colorSchema}>{categoryName}</StyledTitle>
      <StyledSearchInput
        theme={colorSchema}
        placeholder="Aramak İstediğiniz İşletme Adını Girin"
      />
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>İşletmeler</StyledTitle>
        <FilteredBusiness route={route} navigation={navigation} />
      </StyledBox>
    </StyledContainer>
  );
};

export default BusinessFilterByCategory;
