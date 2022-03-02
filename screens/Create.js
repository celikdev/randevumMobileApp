import React from 'react';
import {useColorScheme} from 'react-native';
import Business from '../components/Create/Business';
import {
  StyledBox,
  StyledContainer,
  StyledSearchInput,
  StyledTitle,
} from '../components/main/StyledComponents';

const Create = ({navigation}) => {
  const colorSchema = useColorScheme();
  return (
    <StyledContainer theme={colorSchema} style={{paddingVertical: 20}}>
      <StyledTitle theme={colorSchema}>Oluştur</StyledTitle>
      <StyledSearchInput
        theme={colorSchema}
        placeholder="Aramak İstediğiniz İşletme Adını Girin"
      />
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>İşletmeler</StyledTitle>
        <Business navigation={navigation} />
      </StyledBox>
    </StyledContainer>
  );
};

export default Create;
