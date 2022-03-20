import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import {
  StyledBox,
  StyledContainer,
  StyledLoginInput,
  StyledTitle,
} from '../components/main/StyledComponents';

import {API_URL} from '../config';

const UserInfo = () => {
  const colorSchema = useColorScheme();
  const token = useSelector(state => state.userData.userData);

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/userData`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => setData(res.data))
      .catch(err => console.log(err.response));
  });

  return (
    <StyledContainer theme={colorSchema}>
      <StyledBox theme={colorSchema}>
        <StyledTitle theme={colorSchema}>Deneme</StyledTitle>
        <StyledLoginInput theme={colorSchema}>{data.userName}</StyledLoginInput>
        <StyledLoginInput theme={colorSchema}>
          {data.userSurname}
        </StyledLoginInput>
      </StyledBox>
    </StyledContainer>
  );
};

export default UserInfo;
