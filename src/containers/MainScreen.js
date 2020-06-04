import React, {useEffect, useState}  from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";

import { useNavigation } from 'react-navigation-hooks';
import {defaultStyles} from "../styles/style";

const MainScreen = () => {

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={{
          ...styles.button,
          ...defaultStyles.shadowBlock,
        }}
        onPress={() => {
          navigate('GymsScreen');
        }}>
        <Text style={styles.buttonText}>
          Записаться на тренировку
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          ...styles.button,
          ...defaultStyles.shadowBlock,
        }}
        onPress={() => {
          navigate('MyRegistration');
        }}>
        <Text style={styles.buttonText}>
          Мои записи
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  button: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 26,
    textAlign: 'center',
  }
});

export {MainScreen};
