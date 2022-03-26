import React, {useState} from 'react';
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

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <StyledContainer theme={colorSchema} style={{paddingVertical: 20}}>
      <StyledTitle theme={colorSchema}>Oluştur</StyledTitle>
      <StyledSearchInput
        defaultValue={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        theme={colorSchema}
        placeholder="Aramak İstediğiniz İşletme Adını Girin"
      />
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>İşletmeler</StyledTitle>
        <Business searchQuery={searchQuery} navigation={navigation} />
      </StyledBox>
    </StyledContainer>
  );
};

export default Create;
