import axios from 'axios';
import React from 'react';
import {useColorScheme, Text, View, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {
  StyledBox,
  StyledContainer,
  StyledTitle,
} from '../components/main/StyledComponents';
import {API_URL} from '../config';

const Notifications = () => {
  const colorSchema = useColorScheme();

  const notification = useSelector(state => state.userData.notification);

  const handleDelete = props => {
    axios
      .delete(`${API_URL}/notifications/${props._id}`)
      .then(() => alert('Silindi'));
  };

  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Bildirimler</StyledTitle>
        {notification.map((notify, index) => (
          <View key={index}>
            <Text>{notify.message}</Text>
            <Button title="Delete" onPress={() => handleDelete(notify)} />
          </View>
        ))}
      </StyledBox>
    </StyledContainer>
  );
};

export default Notifications;
