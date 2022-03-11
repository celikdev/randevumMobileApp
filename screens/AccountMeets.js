import React from 'react';

import {useColorScheme} from 'react-native';

import {
  StyledContainer,
  StyledBox,
  StyledTitle,
} from '../components/main/StyledComponents';

const AccountMeets = () => {
  const colorSchema = useColorScheme();

  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Account Meets</StyledTitle>
      </StyledBox>
    </StyledContainer>
  );
};

export default AccountMeets;
