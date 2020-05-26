import React from "react";
import { createStackNavigator } from 'react-navigation-stack';

import { AuthorizationScreen } from '../containers/Authorization/AuthorizationScreen';

const AuthLayer = createStackNavigator({
  Login: {
    screen: AuthorizationScreen,
    navigationOptions: ({
      header: null,
      headerBackTitle: null
    })
  },
});

export { AuthLayer };
