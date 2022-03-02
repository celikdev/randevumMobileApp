import React from 'react';
import {useColorScheme} from 'react-native';
import {StyledBox, StyledTitle} from '../main/StyledComponents';

const HowToWorks = () => {
  const colorSchema = useColorScheme();
  return (
    <StyledBox theme={colorSchema}>
      <StyledTitle theme={colorSchema}>Nasıl Çalışır?</StyledTitle>
    </StyledBox>
  );
};

export default HowToWorks;
