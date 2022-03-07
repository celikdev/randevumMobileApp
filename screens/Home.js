import React, {useEffect} from 'react';
import {useColorScheme, ScrollView} from 'react-native';

import {Category, HeroSection, HowToWorks, Meets} from '../components/Home';

import {StyledContainer} from '../components/main/StyledComponents';

import {useDispatch, useSelector} from 'react-redux';

import {readUserToken} from '../storage/Storage';

const Home = ({navigation}) => {
  const token = useSelector(state => state.userData.userData);

  const colorSchema = useColorScheme();
  const dispatch = useDispatch();

  useEffect(() => {
    readUserToken(dispatch);
  }, []);

  return (
    <StyledContainer theme={colorSchema}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          width: '100%',
          paddingBottom: 20,
        }}
        style={{flex: 1, width: '100%'}}>
        {token ? <Meets navigation={navigation} /> : <HeroSection />}
        <Category navigation={navigation} />
        <HowToWorks />
      </ScrollView>
    </StyledContainer>
  );
};

export default Home;
