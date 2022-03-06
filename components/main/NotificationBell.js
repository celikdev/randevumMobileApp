import React from 'react';
import {TouchableOpacity, View, useColorScheme} from 'react-native';

import {NotificationIcon} from '../../Icons';

import {COLORS} from '../../Colors';

import {useSelector} from 'react-redux';

const NotificationBell = ({navigation}) => {
  const colorSchema = useColorScheme();

  const notification = useSelector(state => state.userData.notification);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Notifications')}
      activeOpacity={0.6}
      hitSlop={{top: 16, left: 16, right: 16, bottom: 16}}
      style={{
        marginRight: 16,
        justifyContent: 'center',
        position: 'relative',
      }}>
      {notification.length ? (
        <View
          style={{
            top: 2,
            right: 4,
            position: 'absolute',
            width: 8,
            height: 8,
            backgroundColor: COLORS.DARK.RED,
            borderRadius: 6,
            borderWidth: 2,
            borderColor:
              colorSchema == 'light'
                ? COLORS.LIGHT.BOX_COLOR
                : COLORS.DARK.BOX_COLOR,
          }}
        />
      ) : null}
      <View style={{zIndex: -1}}>
        <NotificationIcon
          color={
            colorSchema == 'light'
              ? COLORS.LIGHT.TEXT_COLOR
              : COLORS.DARK.TEXT_COLOR
          }
          width={24}
          height={24}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationBell;
