import React from 'react';
import {useColorScheme} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {StyledBox, StyledTitle} from '../main/StyledComponents';

const HowToWorks = () => {
  const colorSchema = useColorScheme();
  return (
    <StyledBox theme={colorSchema}>
      <StyledTitle theme={colorSchema}>Nasıl Çalışır?</StyledTitle>
      <SvgUri uri="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/HowToWorks.svg?alt=media&token=58d038bb-e5f7-4001-90b6-0484bf880e10" />
    </StyledBox>
  );
};

export default HowToWorks;
