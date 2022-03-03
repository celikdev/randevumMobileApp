import React from 'react';
import {
  View,
  Text,
  useColorScheme,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import {StyledMeetsBox, StyledTitle} from '../main/StyledComponents';

const Meets = () => {
  const colorSchema = useColorScheme();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const renderItem = ({item}) => (
    <Text style={{width: '50%'}}>{item.title}</Text>
  );

  return (
    <StyledMeetsBox theme={colorSchema}>
      <StyledTitle>Aktif Randevular</StyledTitle>
    </StyledMeetsBox>
  );
};

export default Meets;
