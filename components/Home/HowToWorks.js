import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {Box} from '../main';
import {StyledTitle} from '../main/StyledComponents';

const HowToWorks = () => {
  const colorSchema = useColorScheme();
  return (
    <Box>
      <StyledTitle theme={colorSchema}>Nasıl Çalışır?</StyledTitle>
    </Box>
  );
};

export default HowToWorks;
