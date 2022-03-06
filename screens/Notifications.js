import React from 'react';
import {useColorScheme} from 'react-native';
import {
  StyledBox,
  StyledContainer,
  StyledTitle,
} from '../components/main/StyledComponents';

const Notifications = () => {
  const colorSchema = useColorScheme();
  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Bildirimler</StyledTitle>
      </StyledBox>
    </StyledContainer>
  );
};

export default Notifications;
