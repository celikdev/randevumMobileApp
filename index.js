/**
 * @format
 */
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';

import SplashScreen from 'react-native-splash-screen';
import {name as appName} from './app.json';
import {store} from './redux/store';

const RNRedux = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
