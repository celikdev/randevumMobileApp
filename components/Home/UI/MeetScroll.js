import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {StyledMeetsCard} from '../../main/StyledComponents';

const MeetScroll = ({data}) => {
  return (
    <View>
      {data.map(item => (
        <Text>{item._key}</Text>
      ))}
    </View>
  );
};

export default MeetScroll;
