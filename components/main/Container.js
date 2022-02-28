import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {COLORS} from '../../Colors';

const Container = props => {
  const colorSchema = useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor:
          colorSchema == 'light'
            ? COLORS.LIGHT.BACKGROUND
            : COLORS.DARK.BACKGROUND,
      }}>
      {props.children}
    </View>
  );
};

export default Container;
