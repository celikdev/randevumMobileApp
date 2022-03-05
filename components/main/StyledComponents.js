import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import styled from 'styled-components';

import {COLORS} from '../../Colors';

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.BACKGROUND : COLORS.DARK.BACKGROUND};
  align-items: center;
`;

const StyledBox = styled.View`
  width: 80%;
  align-items: center;
  background-color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.BOX_COLOR : COLORS.DARK.BOX_COLOR};
  border-radius: 6px;
  padding: 10px;
  margin-top: 30px;
`;

const StyledTitle = styled.Text`
  margin-bottom: 20px;
  font-family: 'Montserrat-SemiBold';
  font-size: 16px;
  color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.TEXT_COLOR : COLORS.DARK.TEXT_COLOR};
`;

const StyledSearchInput = styled.TextInput`
  width: 90%;
  height: 50px;
  border-radius: 8px;
  font-family: 'Montserrat-SemiBold';
  margin-bottom: 10px;
  font-size: 12px;
  padding-left: 8px;
  border-width: 2px;
  color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.TEXT_COLOR : COLORS.DARK.TEXT_COLOR};
  border-color: ${COLORS.DARK.RED};
`;

const StyledCategoryButton = styled.TouchableOpacity`
  width: 96px;
  height: 112px;
  border: 2px solid ${COLORS.DARK.RED};
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const StyledCategoryButtonText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  text-align: center;
  color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.TEXT_COLOR : COLORS.DARK.TEXT_COLOR};
`;

const StyledBusinessContainer = styled.TouchableOpacity`
  width: 90%;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.BACKGROUND : COLORS.DARK.BACKGROUND};
`;

const StyledBusinessImage = styled.Image`
  margin-bottom: 10px;
  width: 90%;
  height: 180px;
  border-radius: 8px;
`;

const StyledBusinessName = styled.Text`
  font-family: 'Montserrat-SemiBold';
  color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.TEXT_COLOR : COLORS.DARK.TEXT_COLOR};
`;

const StyledBusinessCategoryName = styled.Text`
  margin-top: 6px;
  font-family: 'Montserrat-Medium';
  opacity: 0.6;
  font-size: 12px;
  color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.TEXT_COLOR : COLORS.DARK.TEXT_COLOR};
`;

const StyledLoginInput = styled.TextInput`
  width: 80%;
  height: 50px;
  margin-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  border-width: 2px;
  border-radius: 8px;
  border-color: ${COLORS.DARK.RED};
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.TEXT_COLOR : COLORS.DARK.TEXT_COLOR};
`;

const StyledNotFoundText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 10px;
  opacity: 0.6;
`;

const StyledRegisterButton = styled.TouchableOpacity`
  margin-top: 40px;
  width: 90%;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 6px;
  background-color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.BOX_COLOR : COLORS.DARK.BOX_COLOR};
`;

const StyledRegisterText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.TEXT_COLOR : COLORS.DARK.TEXT_COLOR};
`;

const StyledMeetsBox = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 30px;
  padding: 10px;
  background-color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.BOX_COLOR : COLORS.DARK.BOX_COLOR};
`;

const StyledMeetsCard = styled.TouchableOpacity`
  background-color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.BOX_COLOR : COLORS.DARK.BOX_COLOR};
  width: 100px;
  height: 110px;
  justify-content: space-between;
  align-items: center;
  border-width: 2px;
  border-radius: 6px;
  border-color: ${COLORS.DARK.RED};
`;

const StyledMeetsText = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${props =>
    props.theme == 'light' ? COLORS.LIGHT.TEXT_COLOR : COLORS.DARK.TEXT_COLOR};
  text-align: center;
`;

export {
  StyledContainer,
  StyledBox,
  StyledTitle,
  StyledSearchInput,
  StyledCategoryButton,
  StyledCategoryButtonText,
  StyledBusinessContainer,
  StyledBusinessImage,
  StyledBusinessName,
  StyledBusinessCategoryName,
  StyledLoginInput,
  StyledNotFoundText,
  StyledRegisterButton,
  StyledRegisterText,
  StyledMeetsBox,
  StyledMeetsCard,
  StyledMeetsText,
};
