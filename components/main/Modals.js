import React, {useState} from 'react';

import {View, Text, Button, Dimensions, useColorScheme} from 'react-native';

import Modal from 'react-native-modal';
import {COLORS} from '../../Colors';
import {StyledBox, StyledTitle} from './StyledComponents';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Modals = ({
  modalVisibility,
  setModalVisibility,
  children,
  navigation,
  navigateName,
}) => {
  const colorSchema = useColorScheme();

  return (
    <Modal
      backdropOpacity={0.9}
      animationIn="slideInUp"
      animationOut="slideOutRight"
      backdropColor={colorSchema == 'light' ? 'white' : 'black'}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      isVisible={modalVisibility}
      onBackButtonPress={() => {
        setModalVisibility(false);
        navigation.navigate(navigateName);
      }}
      useNativeDriver={false}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StyledBox theme={colorSchema}>{children}</StyledBox>
    </Modal>
  );
};

export default Modals;
