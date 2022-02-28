import React from 'react';
import {View, Text, Button, useColorScheme} from 'react-native';
import {COLORS} from '../Colors';

import SyncStorage from 'sync-storage';

const Account = () => {
  const colorSchema = useColorScheme();

  const token = false;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 24,
        backgroundColor:
          colorSchema == 'light'
            ? COLORS.LIGHT.BACKGROUND
            : COLORS.DARK.BACKGROUND,
      }}>
      <Text style={{color: COLORS.DARK.TEXT_COLOR}}>Account</Text>
    </View>
  );
};

export default Account;
