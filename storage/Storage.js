import AsyncStorage from '@react-native-async-storage/async-storage';

import {setData} from '../redux/slices/UserSlices';

const readUserToken = async props => {
  const data = await AsyncStorage.getItem('userToken');
  props(setData(data));
};

export {readUserToken};
