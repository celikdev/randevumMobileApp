import React from 'react';
import {TouchableOpacity, View, useColorScheme} from 'react-native';

import {NotificationIcon} from '../../Icons';

import {COLORS} from '../../Colors';

import {useDispatch, useSelector} from 'react-redux';

import {setNotification} from '../../redux/slices/UserSlices';

const NotificationBell = () => {
  const colorSchema = useColorScheme();

  const dispatch = useDispatch();

  const notification = useSelector(state => state.userData.notification);

  return (
    <TouchableOpacity
      onPress={() => dispatch(setNotification())}
      activeOpacity={0.6}
      hitSlop={{top: 16, left: 16, right: 16, bottom: 16}}
      style={{
        marginRight: 16,
        justifyContent: 'center',
        position: 'relative',
      }}>
      {notification > 0 ? (
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
