import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import { MainScreen } from '../containers/MainScreen';
import {AddTrainingScreen} from "../containers/AddTrainingScreen";

const MainLayer = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: ({
      header: null,
      headerBackTitle: null
    })
  },
  AddTraining: {
    screen: AddTrainingScreen,
    navigationOptions: ({
      header: null,
      headerBackTitle: null
    })
  },
});

export { MainLayer };
