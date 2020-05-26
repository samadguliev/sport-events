import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { MainLayer } from "./MainLayer";
import { AuthLayer } from "./AuthLayer";

export const firstSeenScreen = 'Education';
const AppNavigator = createSwitchNavigator({
  Unauthorized: AuthLayer,
  // Authorized: MainLayer,
},{
  initialRouteName: "Unauthorized",
  cardStyle: { shadowColor: 'transparent' },
  navigationOptions: () => ({
    headerForceInset: { top: 'never' },
  }),
});

export default createAppContainer(AppNavigator);
