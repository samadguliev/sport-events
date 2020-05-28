import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import { MainScreen } from '../containers/MainScreen';
import {AddTrainingScreen} from "../containers/AddTrainingScreen";
import {TrainingListScreen} from "../containers/TrainingListScreen";
import {MyRegistrationScreen} from "../containers/MyRegistrationScreen";

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
