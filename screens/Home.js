import React, {useEffect, useState} from 'react';
import {useColorScheme, ScrollView} from 'react-native';

import {Category, HeroSection, HowToWorks, Meets} from '../components/Home';

import {StyledContainer} from '../components/main/StyledComponents';
import {readUserToken} from '../storage/Storage';

const Home = ({navigation}) => {
  const [token, setToken] = useState('');
  const colorSchema = useColorScheme();

  useEffect(() => {
    readUserToken({setToken, colorSchema});
  }, []);

  console.log(token);

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
        {token ? <Meets /> : <HeroSection />}
        <Category navigation={navigation} />
        <HowToWorks />
      </ScrollView>
    </StyledContainer>
  );
};

export default Home;
