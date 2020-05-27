import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import { MainScreen } from '../containers/MainScreen';

const MainLayer = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: ({
      header: null,
      headerBackTitle: null
    })
  },
});

export { MainLayer };
