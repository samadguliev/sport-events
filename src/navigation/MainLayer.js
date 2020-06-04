import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import { MainScreen } from '../containers/MainScreen';
import {TrainingListScreen} from "../containers/TrainingListScreen";
import {MyRegistrationScreen} from "../containers/MyRegistrationScreen";
import {GymsScreen} from "../containers/GymsScreen";

const MainLayer = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: ({
      header: null,
      headerBackTitle: null
    })
  },
  GymsScreen: {
    screen: GymsScreen,
    navigationOptions: ({
      header: null,
      headerBackTitle: null
    })
  },
  TrainingList: {
    screen: TrainingListScreen,
    navigationOptions: ({
      header: null,
      headerBackTitle: null
    })
  },
  MyRegistration: {
    screen: MyRegistrationScreen,
    navigationOptions: ({
      header: null,
      headerBackTitle: null
    })
  },
});

export { MainLayer };
