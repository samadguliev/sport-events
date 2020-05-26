import React from 'react';
import AppNavigator from "../navigation/Navigation";
import {
  View,
  StatusBar,
  StyleSheet,
  Text
} from "react-native";

const AppWithNavigationState = () => {
  return (
    <View style={styles.safeArea}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content"/>
      <AppNavigator />
    </View>
  )
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AppWithNavigationState;
