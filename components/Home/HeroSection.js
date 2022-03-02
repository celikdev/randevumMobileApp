import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {COLORS} from '../../Colors';

const {width} = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel';

//TODO:Orjinal Resimler Gelecek
const carouselItems = [
  {
    URL: 'https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/uygulama_hakk%C4%B1nda_bilgi_image.png?alt=media&token=35f4fa44-615a-4351-b37b-ee904ab7c875',
  },
  {
    URL: 'https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/fusion_red.png?alt=media&token=3bb6b159-116e-4f0c-969c-d22c72b1ef6c',
  },
];

const _renderItem = ({item, index}) => {
  return (
    <View>
      <Image style={{width, height: 250}} source={{uri: item.URL}} />
    </View>
  );
};
const HeroSection = () => {
  return (
    <View style={{height: 250}}>
      <Carousel
        loop={true}
        layout={'default'}
        autoplay={true}
        autoplayDelay={4000}
        autoplayInterval={4000}
        pagingEnabled
        data={carouselItems}
        sliderWidth={width}
        itemWidth={width}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default HeroSection;
