import React from 'react';
import {useColorScheme} from 'react-native';
import {
  StyledBox,
  StyledContainer,
  StyledTitle,
} from '../components/main/StyledComponents';

const UserInfo = () => {
  const colorSchema = useColorScheme();

  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Deneme</StyledTitle>
      </StyledBox>
    </StyledContainer>
  );
};

export default UserInfo;
