import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, useColorScheme, View} from 'react-native';
import {COLORS} from '../../Colors';
import {API_URL} from '../../config';

import {
  Kuafor,
  Restorant,
  Saglik,
  CafePub,
  Emlak,
  Servis,
  Spor,
  GuzellikSalonu,
} from '../../Icons';
import {
  StyledBox,
  StyledCategoryButton,
  StyledCategoryButtonText,
  StyledTitle,
} from '../main/StyledComponents';

const Category = ({navigation}) => {
  const colorSchema = useColorScheme();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/category`)
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  const SwitchIcon = props => {
    switch (props) {
      case 'Kuafor':
        return (
          <Kuafor
            color={
              colorSchema == 'light'
                ? COLORS.LIGHT.TEXT_COLOR
                : COLORS.DARK.TEXT_COLOR
            }
          />
        );
      case 'Restorant':
        return (
          <Restorant
            color={
              colorSchema == 'light'
                ? COLORS.LIGHT.TEXT_COLOR
                : COLORS.DARK.TEXT_COLOR
            }
          />
        );
      case 'Saglik':
        return (
          <Saglik
            color={
              colorSchema == 'light'
                ? COLORS.LIGHT.TEXT_COLOR
                : COLORS.DARK.TEXT_COLOR
            }
          />
        );
      case 'Emlak':
        return (
          <Emlak
            color={
              colorSchema == 'light'
                ? COLORS.LIGHT.TEXT_COLOR
                : COLORS.DARK.TEXT_COLOR
            }
          />
        );
      case 'Spor':
        return (
          <Spor
            color={
              colorSchema == 'light'
                ? COLORS.LIGHT.TEXT_COLOR
                : COLORS.DARK.TEXT_COLOR
            }
          />
        );
      case 'CafePub':
        return (
          <CafePub
            color={
              colorSchema == 'light'
                ? COLORS.LIGHT.TEXT_COLOR
                : COLORS.DARK.TEXT_COLOR
            }
          />
        );
      case 'GuzellikSalonu':
        return (
          <GuzellikSalonu
            color={
              colorSchema == 'light'
                ? COLORS.LIGHT.TEXT_COLOR
                : COLORS.DARK.TEXT_COLOR
            }
            width={20}
            height={20}
          />
        );
      case 'Servis':
        return (
          <Servis
            color={
              colorSchema == 'light'
                ? COLORS.LIGHT.TEXT_COLOR
                : COLORS.DARK.TEXT_COLOR
            }
            width={20}
            height={20}
          />
        );

      default:
        break;
    }
  };
  return (
    <StyledBox theme={colorSchema}>
      <StyledTitle theme={colorSchema}>Kategoriler</StyledTitle>
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
        {loading ? (
          <ActivityIndicator color={COLORS.DARK.RED} />
        ) : (
          data.map((category, index) => (
            <StyledCategoryButton
              onPress={() =>
                navigation.push('BusinessFilterByCategory', {
                  categoryID: category._id,
                  categoryName: category.categoryName,
                })
              }
              key={index}>
              <View />
              {SwitchIcon(category.mobileIconName)}
              <StyledCategoryButtonText theme={colorSchema}>
                {category.categoryName}
              </StyledCategoryButtonText>
            </StyledCategoryButton>
          ))
        )}
      </View>
    </StyledBox>
  );
};

export default Category;
