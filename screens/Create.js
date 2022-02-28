import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import Business from '../components/Create/Business';
import {
  StyledBox,
  StyledContainer,
  StyledSearchInput,
  StyledTitle,
} from '../components/main/StyledComponents';

const Create = () => {
  const colorSchema = useColorScheme();
  return (
    <StyledContainer theme={colorSchema} style={{paddingVertical: 20}}>
      <StyledTitle theme={colorSchema}>Create</StyledTitle>
      <StyledSearchInput
        theme={colorSchema}
        placeholder="Aramak İstediğiniz İşletme Adını Girin"
      />
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>İşletmeler</StyledTitle>
        <Business />
      </StyledBox>
    </StyledContainer>
  );
};

export default Create;
