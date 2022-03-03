import AsyncStorage from '@react-native-async-storage/async-storage';

export const readUserToken = async props => {
  const {setToken} = props;
  try {
    const data = await AsyncStorage.getItem('userToken');
    setToken(data);
  } catch (error) {
    console.log(error);
  }
};
