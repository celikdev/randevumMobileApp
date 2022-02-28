import React from 'react';
import {useColorScheme, ScrollView} from 'react-native';

import {Category, HeroSection, HowToWorks, Meets} from '../components/Home';

import {StyledContainer} from '../components/main/StyledComponents';

const Home = () => {
  const token = false;

  const colorSchema = useColorScheme();
  return (
    <StyledContainer theme={colorSchema}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center', paddingBottom: 20}}
        style={{flex: 1}}>
        {token ? <Meets /> : <HeroSection />}
        <Category />
        <HowToWorks />
      </ScrollView>
    </StyledContainer>
  );
};

export default Home;
