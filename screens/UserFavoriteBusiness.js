import React from 'react';
import {useColorScheme} from 'react-native';
import {
  StyledBox,
  StyledContainer,
  StyledTitle,
} from '../components/main/StyledComponents';

const UserFavoriteBusiness = () => {
  const colorSchema = useColorScheme();
  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Favori İşletmelerim</StyledTitle>
      </StyledBox>
    </StyledContainer>
  );
};

export default UserFavoriteBusiness;
