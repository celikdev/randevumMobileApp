import React from 'react';
import {useColorScheme, View} from 'react-native';
import {COLORS} from '../../Colors';

const Box = props => {
  const colorSchema = useColorScheme();
  return <View style={{}}>{props.children}</View>;
};

export default Box;
