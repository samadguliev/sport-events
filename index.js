import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';

import {name as appName} from './app.json';
import configureStore from './src/store/configureStore';
import App from './App';

const store = configureStore();

const root = () => (
  <Provider store = { store }>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => root);
